import { Record } from 'immutable'

import * as clientSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Client selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            clientReducers: store
        })()
    })

    it('Should return an empty array when get initial list', () => {
        const initialList = clientSelectors.getListSelector(mockedStore)
        expect(initialList).toEqual([])
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = clientSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
