import { Record } from 'immutable'

import * as transferSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Transfer selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            transferReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = transferSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
