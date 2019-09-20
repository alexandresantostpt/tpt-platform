import { actions } from './constants'

import { createAction } from '@utils/actions'

const authAction = createAction(actions.LOGIN_AUTH)
const logoutAction = createAction(actions.LOGIN_LOGOUT)
const rememberPasswordAction = createAction(actions.LOGIN_REMEMBER_PASSWORD)
const requestAuthAction = createAction(actions.LOGIN_REQUEST_AUTH)
const requestLogoutAction = createAction(actions.LOGIN_REQUEST_LOGOUT)
const requestRememberPasswordAction = createAction(actions.LOGIN_REQUEST_REMEMBER_PASSWORD)
const requestResetPasswordAction = createAction(actions.LOGIN_REQUEST_RESET_PASSWORD)
const requestUpdatePasswordAction = createAction(actions.LOGIN_REQUEST_UPDATE_PASSWORD)
const resetPasswordAction = createAction(actions.LOGIN_RESET_PASSWORD)
const updatePasswordAction = createAction(actions.LOGIN_UPDATE_PASSWORD)

export {
    authAction,
    logoutAction,
    rememberPasswordAction,
    requestAuthAction,
    requestLogoutAction,
    requestRememberPasswordAction,
    requestResetPasswordAction,
    requestUpdatePasswordAction,
    resetPasswordAction,
    updatePasswordAction
}
