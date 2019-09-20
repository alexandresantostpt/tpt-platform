import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as agencyActions from '../actions'
import { logoutAction } from '@features/login/actions'

import AgencyModel from '../AgencyModel'

describe('Tests for Agency reducers', () => {
    let item = null
    let items = []
    let store = {}

    beforeEach(() => {
        item = new AgencyModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            appTheme: '#FFFFFF',
            cnpj: '12345678909876',
            createdAt: '2019-03-01T12:35:34.965Z',
            logoTipo: 'logoTipo.png',
            phoneContact: '191234566',
            phoneEmergency: '1932465789',
            socialName: 'Test',
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

    it('Should reset agency when resetAction have been called', () => {
        const reducerStore = reducers(store, agencyActions.resetAction(items)).toJS()
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
