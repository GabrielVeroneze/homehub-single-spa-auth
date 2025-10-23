import { useEffect, useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { checkIsAuthenticated } from '../../utils/src/homehub-utils'
import { AuthInfo } from '../../utils/src/types/AuthInfo'
import EditProfile from './components/EditProfile'
import HeroCard from './components/HeroCard'
import UsersCard from './components/UsersCard'
import WaterCard from './components/WaterCard'

const App = () => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>()

    useEffect(() => {
        const { authInfo: authObj, isAuthenticated } = checkIsAuthenticated()

        if (!isAuthenticated) {
            location.replace('/')
            return
        }

        setAuthInfo(authObj)
    }, [])

    return (
        <div id="single-spa-application:react-dashboard">
            {location.pathname.includes('edit-profile') ? (
                <Container
                    maxWidth={false}
                    sx={{ maxWidth: 578 }}
                    disableGutters
                >
                    <Box
                        sx={{
                            bgcolor: '#F5F5F5',
                            mt: '10vh',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            p: 7,
                            pt: 5,
                        }}
                    >
                        <EditProfile />
                    </Box>
                </Container>
            ) : (
                <Box
                    width={2 / 3}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ margin: 'auto' }}
                >
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid size={12}>
                            <HeroCard />
                        </Grid>
                        <Grid size={4}>
                            <UsersCard />
                        </Grid>
                        <Grid size={4}>
                            <WaterCard />
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    )
}

export default App
