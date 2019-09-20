import { actions } from '../constants'

import * as loginActions from '../actions'

import { getAction } from '@utils/actions'

import UserModel from '../UserModel'

describe('Tests for Login actions', () => {
    const user = new UserModel({
        active: false,
        agency: '5c93811aea4041283c66c477',
        blocked: false,
        cellPhone: '(00)00000-0000',
        cpf: '000.000.000-00',
        email: 'dextra@admin.com',
        name: 'DX Admin',
        password: '2b6bd83b132b04be516597978b2e124366f45f796a4eead7e29572a892a00a5d',
        role: 'MASTER'
    })

    const email = { email: 'abc@abc.com' }

    const login = {
        password: '000.000.000-00',
        user: 'dextra@admin.com'
    }

    const resetPassword = {
        confirmPassword: 'password',
        hash: '12345',
        password: 'password'
    }

    const updateUser = {
        _id: '123',
        newPassword: 'nova senha',
        oldPassword: 'antiga senha'
    }

    it('Dispatches authAction with the correct action and payload', () => {
        const payload = user
        const type = getAction(actions.LOGIN_AUTH)

        expect(loginActions.authAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches logoutAction with the correct action and payload', () => {
        const type = getAction(actions.LOGIN_LOGOUT)

        expect(loginActions.logoutAction()).toEqual({ type })
    })

    it('Dispatches requestAuthAction with the correct action and payload', () => {
        const payload = login
        const type = getAction(actions.LOGIN_REQUEST_AUTH)

        expect(loginActions.requestAuthAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestLogoutAction with the correct action and payload', () => {
        const type = getAction(actions.LOGIN_REQUEST_LOGOUT)

        expect(loginActions.requestLogoutAction()).toEqual({ type })
    })

    it('Dispatches requestUpdatePasswordAction with the correct action and payload', () => {
        const payload = updateUser
        const type = getAction(actions.LOGIN_REQUEST_UPDATE_PASSWORD)

        expect(loginActions.requestUpdatePasswordAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches updatePasswordAction with the correct action and payload', () => {
        const payload = user
        const type = getAction(actions.LOGIN_UPDATE_PASSWORD)

        expect(loginActions.updatePasswordAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches rememberPasswordAction with the correct action and payload', () => {
        const payload = true
        const type = getAction(actions.LOGIN_REMEMBER_PASSWORD)

        expect(loginActions.rememberPasswordAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestRememberPasswordAction with the correct action and payload', () => {
        const payload = email
        const type = getAction(actions.LOGIN_REQUEST_REMEMBER_PASSWORD)

        expect(loginActions.requestRememberPasswordAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestResetPasswordAction with the correct action and payload', () => {
        const payload = resetPassword
        const type = getAction(actions.LOGIN_REQUEST_RESET_PASSWORD)

        expect(loginActions.requestResetPasswordAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches resetPasswordAction with the correct action and payload', () => {
        const payload = true
        const type = getAction(actions.LOGIN_RESET_PASSWORD)

        expect(loginActions.resetPasswordAction(payload)).toEqual({ payload, type })
    })
})
