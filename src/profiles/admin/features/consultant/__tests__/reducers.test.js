import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as consultantActions from '../actions'
import { logoutAction } from '@features/login/actions'

import ConsultantModel from '../ConsultantModel'

describe('Tests for Consultant reducers', () => {
    let item = null
    let items = []
    let store = {}

    beforeEach(() => {
        item = new ConsultantModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            active: true,
            agency: '5c52ebcd5fc7c9b1433ab704',
            blocked: true,
            cellPhone: '019998523621',
            cpf: '123.123.123-23',
            createdAt: '2019-03-01T12:35:34.965Z',
            email: 'test@email.com',
            name: 'Name',
            phone: '1932465789',
            role: 'ADMIN',
            updatedAt: '2019-03-01T12:35:34.965Z'
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

    it('Should get a consultant object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, consultantActions.getSingleAction(item)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill list and _listFilter when getListAction have been called', () => {
        const reducerStore = reducers(store, consultantActions.getListAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new consultant item when saveDataAction have been called', () => {
        const newItem = new ConsultantModel({
            active: true,
            agency: '5c52ebcd5fc7c9b1433ab704',
            blocked: true,
            cellPhone: '019998523621',
            cpf: '123.123.123-23',
            createdAt: '2019-03-01T12:35:34.965Z',
            email: 'test@email.com',
            name: 'Name',
            phone: '1932465789',
            role: 'ADMIN',
            updatedAt: '2019-03-01T12:35:34.965Z'
        })

        const newList = List.of(item, newItem)
        const reducerStore = reducers(store, consultantActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should reset consultant when resetAction have been called', () => {
        const reducerStore = reducers(store, consultantActions.resetAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists consultant item when saveDataAction have been called', () => {
        const newItem = new ConsultantModel({
            __v: 1,
            _id: '5c52ebcd5fc7c9b1433ab704',
            active: true,
            agency: '5c52ebcd5fc7c9b1433ab704',
            blocked: true,
            cellPhone: '019998523621',
            cpf: '123.123.123-23',
            createdAt: '2019-03-01T12:35:34.965Z',
            email: 'test@email.com',
            name: 'Name',
            phone: '1932465789',
            role: 'ADMIN',
            updatedAt: '2019-03-01T12:35:34.965Z'
        })

        const newList = List.of(newItem)
        const reducerStore = reducers(store, consultantActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should filter list when searchAction have been called', () => {
        const reducerStore = reducers(store, consultantActions.searchAction('Name')).toJS()
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
