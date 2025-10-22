import { AuthInfo } from './types/AuthInfo'

export const loginFunction = (email: AuthInfo['email']) => {
    const authId = crypto.randomUUID()

    localStorage.setItem('auth', JSON.stringify({ email: email }))

    location.replace(`/dashboard/${authId}/`)
}

export const checkIsAuthenticated = () => {
    const auth = localStorage.getItem('auth')

    if (!auth) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    const authObj: AuthInfo = JSON.parse(auth)

    return { authInfo: authObj, isAuthenticated: true }
}
