import { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { AuthInfo } from './types/AuthInfo'
import HeroCard from './components/HeroCard'
import UsersCard from './components/UsersCard'
import WaterCard from './components/WaterCard'

const App = () => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>()

    useEffect(() => {
        const auth = localStorage.getItem('auth')

        if (!auth) {
            location.replace('/')
            return
        }

        setAuthInfo(JSON.parse(auth))
        console.log('authInfo', auth)
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
