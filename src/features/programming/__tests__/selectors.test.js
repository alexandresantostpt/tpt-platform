import { Record } from 'immutable'

import * as programmingSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Programming selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            programmingReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialList = programmingSelectors.getObjSelector(mockedStore)
        expect(initialList).toEqual(null)
    })
})
