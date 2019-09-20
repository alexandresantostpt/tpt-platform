import { Record } from 'immutable'

import * as travelSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Travel selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            travelReducers: store
        })()
    })

    it('Should return an empty array when get initial archiveds', () => {
        const initialList = travelSelectors.getArchivedsSelector(mockedStore)
        expect(initialList).toEqual([])
    })

    it('Should return an empty array when get initial list', () => {
        const initialList = travelSelectors.getListSelector(mockedStore)
        expect(initialList).toEqual([])
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = travelSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })

    it('Should return a empty array when get initial suggestions', () => {
        const initialsuggestions = travelSelectors.getSuggestionsSelector(mockedStore)
        expect(initialsuggestions).toEqual([])
    })
})
