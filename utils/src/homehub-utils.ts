import { AuthInfo } from './types/AuthInfo'

export const loginFunction = (email: AuthInfo['email']) => {
    const authId = crypto.randomUUID()

    localStorage.setItem(
        'auth',
        JSON.stringify({ email: email, authId: authId })
    )

    location.replace(`/dashboard/${authId}/`)
}

export const logoutFunction = () => {
    localStorage.removeItem('auth')

    return location.replace('/')
}

export const checkIsAuthenticated = () => {
    const auth = localStorage.getItem('auth')

    if (!auth) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    const authObj: AuthInfo = JSON.parse(auth)

    if (!location.pathname.includes(authObj.authId)) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    return { authInfo: authObj, isAuthenticated: true }
}
