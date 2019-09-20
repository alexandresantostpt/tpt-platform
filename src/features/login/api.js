import { http } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import { device } from '@constants/device'

const ROOT_LOGIN_API = '/login/auth/platform'

const PATH_REMEBER_PASSWORD_API = '/user/remember/password'

const PATH_RESET_USER_PASSWORD_API = '/user/reset/password'

const PATH_RESET_CLIENT_PASSWORD_API = '/client/reset/password'

const PATH_UPDATE_PASSWORD_API = '/user/password'

const authAPI = payload =>
    http
        .post(ROOT_LOGIN_API, payload)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return data
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error.response.data.message)
        })

const remeberPasswordAPI = payload =>
    http
        .post(PATH_REMEBER_PASSWORD_API, payload)
        .then(({ status }) => responseWasOK(status))
        .catch(error => {
            handleError(error)
            throw new Error(error.response.data.message)
        })

const resetPasswordAPI = (payload, from, hash) =>
    http({
        data: payload,
        headers: { Authorization: hash },
        method: 'PATCH',
        url: from === device.platform ? PATH_RESET_USER_PASSWORD_API : PATH_RESET_CLIENT_PASSWORD_API
    })
        .then(({ status }) => responseWasOK(status))
        .catch(error => {
            handleError(error)
            throw new Error(error.response.data.message)
        })

const updatePasswordAPI = payload =>
    http
        .patch(PATH_UPDATE_PASSWORD_API, payload)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return data
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error.response.data.message)
        })

export { authAPI, remeberPasswordAPI, resetPasswordAPI, updatePasswordAPI }
