import { Record } from 'immutable'

import * as consultantSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Consultant selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            consultantReducers: store
        })()
    })

    it('Should return an empty array when get initial list', () => {
        const initialList = consultantSelectors.getListSelector(mockedStore)
        expect(initialList).toEqual([])
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = consultantSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
