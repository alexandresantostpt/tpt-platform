import { actions } from './constants'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { device } from '@constants/device'

import { routes } from '@routes'

import { authAPI, remeberPasswordAPI, resetPasswordAPI, updatePasswordAPI } from './api'

import { authAction, logoutAction, rememberPasswordAction, updatePasswordAction } from './actions'

import { decoded } from '@utils/jwt'
import { getAction } from '@utils/actions'
import { navigateTo } from '@utils/browser'
import { setToken, logout } from '@utils/auth'

import { routesFeedback, routesLogin } from './routes'
import { routes as routesTravel } from '@features/travel/routes'

import Toast from '@components/toast'

import UserModel from './UserModel'

function* authRequested({ payload }) {
    try {
        const jwt = yield call(authAPI, payload)
        const { user: decodedUser } = decoded(jwt)
        const user = new UserModel(decodedUser)
        const wrongCredentials = false
        yield setToken(jwt)
        yield put(authAction({ user, wrongCredentials }))
        yield navigateTo(routes.travelList)
    } catch (error) {
        const user = null
        const wrongCredentials = true
        yield put(authAction({ user, wrongCredentials }))
    }
}

function* logoutRequested() {
    try {
        yield put(logoutAction())
        logout()
        yield navigateTo(routesLogin.path)
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* rememberPasswordRequested({ payload }) {
    try {
        yield call(remeberPasswordAPI, payload)
        const wrongCredentials = false
        yield put(rememberPasswordAction({ wrongCredentials }))
        yield navigateTo(`${routesFeedback.path}?message=${i18n.t('messages.success.emailSent')}&path=${routesLogin.login}`)
    } catch (error) {
        const wrongCredentials = true
        yield put(rememberPasswordAction({ wrongCredentials }))
        Toast.error({ message: String(error) })
    }
}

function* resetPasswordRequested({ payload: { confirmPassword, from, hash, password } }) {
    try {
        const response = yield call(resetPasswordAPI, { confirmPassword, password }, from, hash)
        if (response) {
            if (from === device.platform) {
                yield navigateTo(`${routesFeedback.path}?path=${routesLogin.path}&message=${i18n.t('messages.success.savePassword')}`)
            } else {
                yield navigateTo(`${routesFeedback.path}?message=${i18n.t('messages.success.savePassword')}`)
            }
        } else {
            yield Toast.error({
                message: i18n.t('messages.error.resetPassword')
            })
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* updatePasswordRequested({ payload: { _id, insidePlatform, newPassword, oldPassword } }) {
    try {
        const userUpdated = yield call(updatePasswordAPI, { _id, newPassword, oldPassword })
        yield put(updatePasswordAction(userUpdated))
        if (insidePlatform) {
            yield navigateTo(
                `${routesFeedback.path}?path=${routesTravel[0].path}&message=${i18n.t('messages.success.updatePassword')}`
            )
        } else {
            logout()
            yield navigateTo(`${routesFeedback.path}?path=${routesLogin.path}&message=${i18n.t('messages.success.updatePassword')}`)
        }
    } catch (error) {
        Toast.error({ message: String(error) })
    }
}

function* watchAuthRequest() {
    yield takeLatest(getAction(actions.LOGIN_REQUEST_AUTH), authRequested)
}

function* watchLogoutRequest() {
    yield takeLatest(getAction(actions.LOGIN_REQUEST_LOGOUT), logoutRequested)
}

function* watchRememberPassword() {
    yield takeLatest(getAction(actions.LOGIN_REQUEST_REMEMBER_PASSWORD), rememberPasswordRequested)
}

function* watchResetPassword() {
    yield takeLatest(getAction(actions.LOGIN_REQUEST_RESET_PASSWORD), resetPasswordRequested)
}

function* watchUpdatePasswordRequest() {
    yield takeLatest(getAction(actions.LOGIN_REQUEST_UPDATE_PASSWORD), updatePasswordRequested)
}

function* sagas() {
    yield all([watchAuthRequest(), watchLogoutRequest(), watchRememberPassword(), watchResetPassword(), watchUpdatePasswordRequest()])
}

export { sagas }
