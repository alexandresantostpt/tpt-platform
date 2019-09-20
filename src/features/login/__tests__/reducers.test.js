import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as loginActions from '../actions'

import UserModel from '../UserModel'

describe('Tests for Login reducers', () => {
    let itemFromBack = null
    let itemObj = null
    let store = {}
    let user = null
    let wrongCredentials = false

    beforeEach(() => {
        itemObj = new UserModel({
            active: false,
            agency: '5c93811aea4041283c66c477',
            blocked: false,
            cellPhone: '(00)00000-0000',
            cpf: '000.000.000-00',
            email: 'dextra@admin.com',
            name: 'DX Admin',
            password: '000.000.000-00',
            phone: '(19)00000-0000',
            role: 'MASTER'
        })

        itemFromBack = {
            active: false,
            agency: '5c93811aea4041283c66c477',
            blocked: false,
            cellPhone: '(00)00000-0000',
            cpf: '000.000.000-00',
            email: 'dextra@admin.com',
            name: 'DX Admin',
            password: '000.000.000-00',
            phone: '(19)00000-0000',
            role: 'MASTER'
        }

        store = Record({
            user: null,
            wrongCredentials: false
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            user: null,
            wrongCredentials: false
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a user object and a wrongCredentials false when authAction have been called', () => {
        user = itemObj
        wrongCredentials = false
        const reducerStore = reducers(store, loginActions.authAction({ user, wrongCredentials })).toJS()
        const expectedStore = {
            user: itemObj,
            wrongCredentials: false
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a null user object and a wrongCredentials true when authAction have been called', () => {
        user = null
        wrongCredentials = true
        const reducerStore = reducers(store, loginActions.authAction({ user, wrongCredentials })).toJS()
        const expectedStore = {
            user: null,
            wrongCredentials: true
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a user object when updatePasswordAction have been called', () => {
        user = itemFromBack
        const reducerStore = reducers(store, loginActions.updatePasswordAction(user)).toJS()
        const expectedStore = {
            user: itemObj,
            wrongCredentials: false
        }

        expect(JSON.stringify(reducerStore)).toEqual(JSON.stringify(expectedStore))
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, loginActions.logoutAction()).toJS()
        const expectedStore = {
            user: null,
            wrongCredentials: false
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a wrongCredentials true when rememberPasswordAction have been called', () => {
        wrongCredentials = true
        const reducerStore = reducers(store, loginActions.rememberPasswordAction({ wrongCredentials })).toJS()
        const expectedStore = {
            user: null,
            wrongCredentials: true
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a wrongCredentials false when rememberPasswordAction have been called', () => {
        wrongCredentials = false
        const reducerStore = reducers(store, loginActions.rememberPasswordAction({ wrongCredentials })).toJS()
        const expectedStore = {
            user: null,
            wrongCredentials: false
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})
