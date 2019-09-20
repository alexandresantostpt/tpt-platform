import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as programmingActions from '../actions'
import { logoutAction } from '@features/login/actions'

import ProgrammingServiceModel from '../models/ProgrammingServiceModel'

describe('Tests for Programming reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        item = new ProgrammingServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'teste',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
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

    it('Should delete a programming object when delAction have been called', () => {
        const reducerStore = reducers(store, programmingActions.delAction('5c6c16bc793e3b4f622f7a9e')).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a programming object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, programmingActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new programming item when saveDataAction have been called', () => {
        const newItem = new ProgrammingServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'teste',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })
        const reducerStore = reducers(store, programmingActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists programming item when saveDataAction have been called', () => {
        const newItem = new ProgrammingServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'teste EDITED',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })
        const reducerStore = reducers(store, programmingActions.saveDataAction(newItem)).toJS()
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
