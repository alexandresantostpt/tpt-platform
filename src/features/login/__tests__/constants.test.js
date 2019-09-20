import { actions } from '../constants'

describe('Tests for Login constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.LOGIN_AUTH).toEqual('LOGIN_AUTH')
        expect(actions.LOGIN_LOGOUT).toEqual('LOGIN_LOGOUT')
        expect(actions.LOGIN_REMEMBER_PASSWORD).toEqual('LOGIN_REMEMBER_PASSWORD')
        expect(actions.LOGIN_REQUEST_AUTH).toEqual('LOGIN_REQUEST_AUTH')
        expect(actions.LOGIN_REQUEST_LOGOUT).toEqual('LOGIN_REQUEST_LOGOUT')
        expect(actions.LOGIN_REQUEST_REMEMBER_PASSWORD).toEqual('LOGIN_REQUEST_REMEMBER_PASSWORD')
        expect(actions.LOGIN_REQUEST_RESET_PASSWORD).toEqual('LOGIN_REQUEST_RESET_PASSWORD')
        expect(actions.LOGIN_REQUEST_UPDATE_PASSWORD).toEqual('LOGIN_REQUEST_UPDATE_PASSWORD')
        expect(actions.LOGIN_RESET_PASSWORD).toEqual('LOGIN_RESET_PASSWORD')
        expect(actions.LOGIN_UPDATE_PASSWORD).toEqual('LOGIN_UPDATE_PASSWORD')
        expect(actions.LOGIN_LOGOUT).toEqual('LOGIN_LOGOUT')
        expect(actions.LOGIN_REQUEST_LOGOUT).toEqual('LOGIN_REQUEST_LOGOUT')
    })
})
