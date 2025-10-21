import { useEffect, useState } from 'react'
import {
    AppBar,
    Badge,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
} from '@mui/material'
import { AuthInfo } from './types/AuthInfo'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import WifiIcon from '@mui/icons-material/Wifi'
import LockIcon from '@mui/icons-material/Lock'
import HomeHubLogo from './assets/home-hub.png'

const App = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [authInfo, setAuthInfo] = useState<AuthInfo>()

    useEffect(() => {
        const auth = localStorage.getItem('auth')

        if (!auth) {
            location.replace('/')
            return
        }

        setAuthInfo(JSON.parse(auth))
    }, [])

    const isMenuOpen = Boolean(anchorEl)

    const [open, setOpen] = useState<boolean>(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SpaceDashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Visão geral" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <WifiIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dispositivos" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LockIcon />
                        </ListItemIcon>
                        <ListItemText primary="Segurança" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Configurações" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>{authInfo?.email}</MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText>Configurações</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText>Perfil</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Sair</ListItemText>
            </MenuItem>
        </Menu>
    )

    return (
        <div id="single-spa-application:react-navbar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#9C27B0' }}>
                    <Toolbar>
                        <Button
                            sx={{ padding: 0 }}
                            onClick={toggleDrawer(true)}
                        >
                            <img
                                src={HomeHubLogo}
                                alt="Logotipo do HomeHub"
                                style={{ width: 176 }}
                            />
                        </Button>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Badge color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
                {renderMenu}
            </Box>
        </div>
    )
}

export default App
