import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as agencyActions from '../actions'
import { logoutAction } from '@features/login/actions'

import AgencyUserModel from '../AgencyUserModel'

describe('Tests for Agency reducers', () => {
    let item = null
    let items = []
    let store = {}

    beforeEach(() => {
        item = new AgencyUserModel({
            __v: 0,
            _id: '5caf547ce3f3db3e69103a11',
            active: false,
            agency: {
                __v: 0,
                _id: '5caf547ce3f3db3e69103a10',
                cnpj: '12.123.123/1234-12',
                createdAt: '2019-04-11T14:51:40.267Z',
                deleted: false,
                socialName: 'Agência testes',
                updatedAt: '2019-04-11T18:25:10.062Z'
            },
            blocked: false,
            cpf: '437.958.818-11',
            createdAt: '2019-04-11T14:51:40.271Z',
            deleted: false,
            email: 'teste@teste.com.br',
            lastAccess: '2019-04-11T13:47:29.312Z',
            name: 'Adm teste',
            password: 'c705d2857889ded02c1ec111134236e7a4a9cb3d89ec0d3577ee40a84ec180db',
            role: 'ADMIN',
            updatedAt: '2019-04-11T18:25:10.063Z'
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

    it('Should get an agency object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, agencyActions.getSingleAction(item)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill list and _listFilter when getListAction have been called', () => {
        const reducerStore = reducers(store, agencyActions.getListAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new agency item when saveDataAction have been called', () => {
        const newItem = new AgencyUserModel({
            _id: '5caf547ce3f3db3e69103a11',
            active: false,
            agency: {
                _id: '5caf547ce3f3db3e69103a10',
                cnpj: '12.123.123/1234-12',
                createdAt: '2019-04-11T14:51:40.267Z',
                deleted: false,
                socialName: 'Agência testes',
                updatedAt: '2019-04-11T18:25:10.062Z'
            },
            blocked: false,
            cpf: '437.958.818-11',
            createdAt: '2019-04-11T14:51:40.271Z',
            deleted: false,
            email: 'teste@teste.com.br',
            lastAccess: '2019-04-11T13:47:29.312Z',
            name: 'Adm teste',
            password: 'c705d2857889ded02c1ec111134236e7a4a9cb3d89ec0d3577ee40a84ec180db',
            role: 'ADMIN',
            updatedAt: '2019-04-11T18:25:10.063Z'
        })

        const newList = List.of(item, newItem)
        const reducerStore = reducers(store, agencyActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should reset agency when resetAction have been called', () => {
        const reducerStore = reducers(store, agencyActions.resetAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            list: items.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update an exists agency item when saveDataAction have been called', () => {
        const newItem = new AgencyUserModel({
            __v: 1,
            _id: '5caf547ce3f3db3e69103a11',
            active: false,
            agency: {
                __v: 1,
                _id: '5caf547ce3f3db3e69103a10',
                cnpj: '12.123.123/1234-12',
                createdAt: '2019-04-11T14:51:40.267Z',
                deleted: false,
                socialName: 'Agência testes',
                updatedAt: '2019-04-11T18:25:10.062Z'
            },
            blocked: false,
            cpf: '437.958.818-11',
            createdAt: '2019-04-11T14:51:40.271Z',
            deleted: false,
            email: 'teste@teste.com.br',
            lastAccess: '2019-04-11T13:47:29.312Z',
            name: 'Adm teste',
            password: 'c705d2857889ded02c1ec111134236e7a4a9cb3d89ec0d3577ee40a84ec180db',
            role: 'ADMIN',
            updatedAt: '2019-04-11T18:25:10.063Z'
        })

        const newList = List.of(newItem)
        const reducerStore = reducers(store, agencyActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS(),
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should filter list when searchAction have been called', () => {
        const reducerStore = reducers(store, agencyActions.searchAction('adm')).toJS()
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
