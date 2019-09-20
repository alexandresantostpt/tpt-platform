import { Record } from 'immutable'

import * as agencySelectors from '../selectors'

import { store } from '../store'

describe('Tests for Agency selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            agencyReducers: store
        })()
    })

    it('Should return an empty array when get initial list', () => {
        const initialList = agencySelectors.getListSelector(mockedStore)
        expect(initialList).toEqual([])
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = agencySelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
