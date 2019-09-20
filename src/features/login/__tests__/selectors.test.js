import { Record } from 'immutable'

import * as loginSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Login selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            loginReducers: store
        })()
    })

    it('Should return a null user when get initial user', () => {
        const initialListUser = loginSelectors.getUserSelector(mockedStore)
        expect(initialListUser).toEqual(null)
    })

    it('Should return false when get initial wrongCredentials', () => {
        const initialListWrongCredentials = loginSelectors.getWrongCredentialsSelector(mockedStore)
        expect(initialListWrongCredentials).toEqual(false)
    })
})
