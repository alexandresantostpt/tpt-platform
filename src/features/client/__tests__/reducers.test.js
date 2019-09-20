import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as clientActions from '../actions'
import { logoutAction } from '@features/login/actions'

import ClientModel from '../ClientModel'

describe('Tests for Client reducers', () => {
    let item = null
    let items = []
    let store = {}

    beforeEach(() => {
        item = new ClientModel({
            __v: 0,
            _id: '5caf68a3267eb5d14c0734dc',
            active: true,
            agency: '5c52ebcd5fc7c9b1433ab704',
            blocked: false,
            cpf: '211.658.050-14',
            createdAt: '2019-04-11T16:17:39.018Z',
            deleted: false,
            email: 'test@email.com',
            name: 'Name',
            updatedAt: '2019-04-11T16:17:39.018Z'
        })

        items = List.of(item)

        store = Record({
            _listFilter: items,
            list: items,
            obj: null
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            list: [],
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a client object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, clientActions.getSingleAction(item)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill list and _listFilter when getListAction have been called', () => {
        const reducerStore = reducers(store, clientActions.getListAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new client item when saveDataAction have been called', () => {
        const newItem = new ClientModel({
            active: true,
            agency: '5c52ebcd5fc7c9b1433ab704',
            blocked: false,
            cpf: '211.658.050-14',
            createdAt: '2019-04-11T16:17:39.018Z',
            deleted: false,
            email: 'test@email.com',
            name: 'Name',
            updatedAt: '2019-04-11T16:17:39.018Z'
        })

        const newList = List.of(item, newItem)
        const reducerStore = reducers(store, clientActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should reset client when resetAction have been called', () => {
        const reducerStore = reducers(store, clientActions.resetAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists client item when saveDataAction have been called', () => {
        const newItem = new ClientModel({
            __v: 1,
            _id: '5caf68a3267eb5d14c0734dc',
            active: true,
            agency: '5c52ebcd5fc7c9b1433ab704',
            blocked: false,
            cpf: '211.658.050-14',
            createdAt: '2019-04-11T16:17:39.018Z',
            deleted: false,
            email: 'test@email.com',
            name: 'Name',
            updatedAt: '2019-04-11T16:17:39.018Z'
        })

        const newList = List.of(newItem)
        const reducerStore = reducers(store, clientActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should filter list when searchAction have been called', () => {
        const reducerStore = reducers(store, clientActions.searchAction('Name')).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, logoutAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            list: [],
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})
