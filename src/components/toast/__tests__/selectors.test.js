import { Record } from 'immutable'

import * as toastSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Toast selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            toastReducers: store
        })()
    })

    it('Should return a empty array when get initial list', () => {
        const initialList = toastSelectors.getListSelector(mockedStore)
        expect(initialList).toEqual([])
    })
})
