import { Record } from 'immutable'

import * as tipSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Tip selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            tipReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = tipSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
