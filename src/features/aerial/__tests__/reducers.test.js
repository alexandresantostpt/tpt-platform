import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as aerialActions from '../actions'
import { logoutAction } from '@features/login/actions'

import AerialServiceModel from '../models/AerialServiceModel'

describe('Tests for Aerial reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        item = new AerialServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-03-14T16:34:42.827Z',
            journeys: [
                {
                    _id: '5c8a82a201ef651f03c4a6da',
                    companyName: 'teste',
                    flightNumber: 123,
                    from: { airport: 'teste', city: 'teste', date: '2019-03-15T15:00:00.000Z', hour: '2019-03-14T15:00:00.288Z' },
                    passengers: [{ _id: '5c8a82a201ef650d68c4a6db', client: '5c7a69db283f8a18ed32a7fd' }],
                    to: { airport: 'teste', city: 'teste', hour: '2019-03-14T20:00:00.361Z' }
                },
                {
                    _id: '5c8a82a201ef652302c4a6d8',
                    companyName: 'teste',
                    flightNumber: 12312312,
                    from: { airport: 'teste', city: 'teste', date: '2019-03-14T15:00:00.000Z', hour: '2019-03-14T15:00:00.063Z' },
                    passengers: [{ _id: '5c8a82a201ef650011c4a6d9', client: '5c7a69db283f8a18ed32a7fd' }],
                    to: { airport: 'teste', city: 'teste', hour: '2019-03-14T17:00:00.024Z' }
                }
            ],
            script: '5c8a547c01ef65c1e2c4a67b',
            scriptDate: '2019-03-14T00:00:00.000Z',
            type: 'AERIAL',
            updatedAt: '2019-03-14T16:34:42.827Z'
        })

        store = Record({
            obj: null
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should delete a travel object when delAction have been called', () => {
        const reducerStore = reducers(store, aerialActions.delAction('5c52ebcd5fc7c9b1433ab704')).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new aerial item when saveDataAction have been called', () => {
        const newItem = new AerialServiceModel({
            createdAt: '2019-03-14T16:34:42.827Z',
            journeys: [
                {
                    _id: '5c8a82a201ef651f03c4a6da',
                    companyName: 'teste',
                    flightNumber: 123,
                    from: { airport: 'teste', city: 'teste', date: '2019-03-15T15:00:00.000Z', hour: '2019-03-14T15:00:00.288Z' },
                    passengers: [{ _id: '5c8a82a201ef650d68c4a6db', client: '5c7a69db283f8a18ed32a7fd' }],
                    to: { airport: 'teste', city: 'teste', hour: '2019-03-14T20:00:00.361Z' }
                },
                {
                    _id: '5c8a82a201ef652302c4a6d8',
                    companyName: 'teste',
                    flightNumber: 12312312,
                    from: { airport: 'teste', city: 'teste', date: '2019-03-14T15:00:00.000Z', hour: '2019-03-14T15:00:00.063Z' },
                    passengers: [{ _id: '5c8a82a201ef650011c4a6d9', client: '5c7a69db283f8a18ed32a7fd' }],
                    to: { airport: 'teste', city: 'teste', hour: '2019-03-14T17:00:00.024Z' }
                }
            ],
            script: '5c8a547c01ef65c1e2c4a67b',
            scriptDate: '2019-03-14T00:00:00.000Z',
            type: 'AERIAL',
            updatedAt: '2019-03-14T16:34:42.827Z'
        })

        const reducerStore = reducers(store, aerialActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get an aerial object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, aerialActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists travel item when saveDataAction have been called', () => {
        const newItem = new AerialServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-03-14T16:34:42.827Z',
            journeys: [
                {
                    _id: '5c8a82a201ef651f03c4a6da',
                    companyName: 'teste',
                    flightNumber: 123,
                    from: { airport: 'teste', city: 'teste', date: '2019-03-15T15:00:00.000Z', hour: '2019-03-14T15:00:00.288Z' },
                    passengers: [{ _id: '5c8a82a201ef650d68c4a6db', client: '5c7a69db283f8a18ed32a7fd' }],
                    to: { airport: 'teste', city: 'teste', hour: '2019-03-14T20:00:00.361Z' }
                },
                {
                    _id: '5c8a82a201ef652302c4a6d8',
                    companyName: 'teste',
                    flightNumber: 12312312,
                    from: { airport: 'teste', city: 'teste', date: '2019-03-14T15:00:00.000Z', hour: '2019-03-14T15:00:00.063Z' },
                    passengers: [{ _id: '5c8a82a201ef650011c4a6d9', client: '5c7a69db283f8a18ed32a7fd' }],
                    to: { airport: 'teste', city: 'teste', hour: '2019-03-14T17:00:00.024Z' }
                }
            ],
            script: '5c8a547c01ef65c1e2c4a67b',
            scriptDate: '2019-03-14T00:00:00.000Z',
            type: 'AERIAL',
            updatedAt: '2019-03-14T16:34:42.827Z'
        })

        const reducerStore = reducers(store, aerialActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, logoutAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})
