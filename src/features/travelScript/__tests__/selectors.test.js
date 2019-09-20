import { Record } from 'immutable'

import * as travelScriptSelectors from '../selectors'

import { store } from '../store'

describe('Tests for TravelScript selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            travelScriptReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = travelScriptSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
