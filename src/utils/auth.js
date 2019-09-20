import { decoded } from '@utils/jwt'
import { isEmpty } from '@utils/functions'

import UserModel from '@features/login/UserModel'

const BRANDO_KEY = 'TPTPlatformBrand'
const THEME_KEY = 'TPTPlatformTheme'
const TOKEN_KEY = 'TPTPlatformToken'

const clear = () => window.localStorage.clear()

const getBrand = () => window.localStorage.getItem(BRANDO_KEY)

const getTheme = () => JSON.parse(window.localStorage.getItem(THEME_KEY))

const getToken = () => window.localStorage.getItem(TOKEN_KEY)

const getUser = () => {
    const jwt = getToken()

    if (isEmpty(jwt)) {
        return null
    }

    const { user: decodedUser } = decoded(jwt)
    return new UserModel(decodedUser)
}

const isActive = () => {
    const user = getUser()
    if (user) {
        return user.active
    }
    return false
}

const isAgencyRegistrationComplete = () => isActive() || getUser().isConsultant() || getUser().isMaster()

const isLogged = () => !!getToken()

const logout = () => {
    removeBrand()
    removeTheme()
    removeToken()
}

const removeBrand = () => window.localStorage.removeItem(BRANDO_KEY)

const removeTheme = () => window.localStorage.removeItem(THEME_KEY)

const removeToken = () => window.localStorage.removeItem(TOKEN_KEY)

const setBrand = image => window.localStorage.setItem(BRANDO_KEY, image)

const setTheme = theme => window.localStorage.setItem(THEME_KEY, JSON.stringify(theme))

const setToken = token => {
    const obj = decoded(token)
    if (obj) {
        const { user } = obj
        if (user) {
            const { logo, theme } = user
            window.localStorage.setItem(TOKEN_KEY, token)
            setBrand(logo)
            setTheme(theme)
        }
    }
}

export {
    clear,
    getBrand,
    getTheme,
    getToken,
    getUser,
    isActive,
    isAgencyRegistrationComplete,
    isLogged,
    logout,
    setBrand,
    setTheme,
    setToken
}
