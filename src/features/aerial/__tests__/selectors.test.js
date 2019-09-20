import { Record } from 'immutable'

import * as aerialSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Aerial selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            aerialReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = aerialSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
