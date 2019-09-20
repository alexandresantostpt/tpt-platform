import { Record } from 'immutable'

import * as cruiseSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Cruise selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            cruiseReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = cruiseSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
