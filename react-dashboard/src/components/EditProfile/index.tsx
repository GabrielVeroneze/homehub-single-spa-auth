import { useForm } from 'react-hook-form'
import { Box, Button, TextField } from '@mui/material'
import {
    checkIsAuthenticated,
    editAuthInfo,
} from '../../../../utils/src/homehub-utils'
import { AuthInfo } from '../../../../utils/src/types/AuthInfo'

type FormData = Omit<AuthInfo, 'authId'>

const EditProfile = () => {
    const { authInfo } = checkIsAuthenticated()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: authInfo,
    })

    const onSubmit = (data: FormData) => {
        editAuthInfo({
            ...data,
            authId: authInfo.authId,
        })
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                py: 2,
                width: '100%',
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="email"
                label="Email"
                variant="standard"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email', {
                    required: 'O e-mail é obrigatório.',
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'E-mail inválido.',
                    },
                })}
            />
            <TextField
                id="firstName"
                label="Nome"
                variant="standard"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                {...register('firstName')}
            />
            <TextField
                id="lastName"
                label="Sobrenome"
                variant="standard"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                {...register('lastName')}
            />
            <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{ bgcolor: '#9C27B0' }}
            >
                Editar Perfil
            </Button>
        </Box>
    )
}

export default EditProfile
