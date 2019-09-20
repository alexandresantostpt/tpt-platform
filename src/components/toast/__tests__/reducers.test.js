import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import { addToastAction, removeToastAction } from '../actions'

describe('Tests for Toast reducers', () => {
    let toast = null
    let store = null

    beforeEach(() => {
        toast = { id: '123', message: 'Test' }

        store = Record({
            list: List.of(toast)
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = { list: [] }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should addToastAction and return a store with a new toast', () => {
        const reducerStore = reducers(store, addToastAction(toast)).toJS()
        const expectedStore = { list: [toast] }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should removeToastAction and return a store with toast removed', () => {
        const reducerStore = reducers(store, removeToastAction(toast.id)).toJS()
        const expectedStore = { list: [] }

        expect(reducerStore).toEqual(expectedStore)
    })
})
