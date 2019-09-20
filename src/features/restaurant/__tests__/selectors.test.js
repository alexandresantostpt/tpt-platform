import { Record } from 'immutable'

import * as restaurantSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Restaurant selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            restaurantReducers: store
        })()
    })

    it('Should return a null object when get initial obj', () => {
        const initialList = restaurantSelectors.getObjSelector(mockedStore)
        expect(initialList).toEqual(null)
    })
})
