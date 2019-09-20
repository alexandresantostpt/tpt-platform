import { Record } from 'immutable'

import * as carRentalSelectors from '../selectors'

import { store } from '../store'

describe('Tests for CarRental selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            carRentalReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialObj = carRentalSelectors.getObjSelector(mockedStore)
        expect(initialObj).toEqual(null)
    })
})
