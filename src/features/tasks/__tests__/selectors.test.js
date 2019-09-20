import { Record } from 'immutable'

import * as tasksSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Tasks selectors', () => {
    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            tasksReducers: store
        })()
    })

    it('Should return an empty array when get initial list', () => {
        const initialList = tasksSelectors.getListSelector(mockedStore)
        expect(initialList).toEqual([])
    })
})
