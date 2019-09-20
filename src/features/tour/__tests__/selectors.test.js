import { Record } from 'immutable'

import * as tourSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Tour selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            tourReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = tourSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
