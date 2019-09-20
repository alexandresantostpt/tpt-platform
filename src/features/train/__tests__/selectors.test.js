import { Record } from 'immutable'

import * as trainSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Train selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            trainReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = trainSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
