import { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { checkIsAuthenticated } from '../../utils/src/homehub-utils'
import { AuthInfo } from '../../utils/src/types/AuthInfo'
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
        </div>
    )
}

export default App
