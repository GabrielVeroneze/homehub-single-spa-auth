import { FormValues } from './types/FormValues'

export const loginFunction = (data: FormValues) => {
    const authId = crypto.randomUUID()

    localStorage.setItem('auth', JSON.stringify(data))

    location.replace(`/dashboard/${authId}/`)
}

export const checkIsAuthenticated = () => {
    const auth = localStorage.getItem('auth')

    if (!auth) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    const authObj = JSON.parse(auth)

    return { authInfo: authObj, isAuthenticated: true }
}
