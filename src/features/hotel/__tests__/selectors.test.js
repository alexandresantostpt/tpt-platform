import { Record } from 'immutable'

import * as hotelSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Hotel selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            hotelReducers: store
        })()
    })

    it('Should return a null obj when get initial obj', () => {
        const initialList = hotelSelectors.getObjSelector(mockedStore)
        expect(initialList).toEqual(null)
    })
})
