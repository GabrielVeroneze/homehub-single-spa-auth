import { FormValues } from './types/FormValues'

export const loginFunction = (data: FormValues) => {
    const authId = crypto.randomUUID()

    localStorage.setItem('auth', JSON.stringify(data))

    location.replace(`/dashboard/${authId}/`)
}
