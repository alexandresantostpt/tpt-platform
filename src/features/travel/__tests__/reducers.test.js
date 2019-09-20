import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as travelActions from '../actions'
import { logoutAction } from '@features/login/actions'

import TravelModel from '../TravelModel'

describe('Tests for Travel reducers', () => {
    let item = null
    let items = []
    let store = {}
    const suggestions = []

    beforeEach(() => {
        item = new TravelModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            citiesDestiny: ['Campinas', 'São Paulo'],
            clientCpf: '123.123.123-12',
            clientEmail: 'email@gmail.com',
            clientName: 'TPT',
            clients: [
                {
                    __v: 0,
                    cpf: '123.123.123-12',
                    createdAt: '2019-03-01T12:35:34.965Z',
                    email: 'email@gmail.com',
                    id: '5c792716e6e6030f80b85732',
                    name: 'TPT',
                    updatedAt: '2019-03-01T12:35:34.965Z'
                }
            ],
            createdAt: '2019-01-31T12:36:29.463Z',
            travelEndDate: '2019-01-30T12:10:10.000Z',
            travelStartDate: '2019-02-05T17:10:10.000Z',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        items = List.of(item)

        store = Record({
            _listFilter: items,
            archiveds: items,
            list: items,
            obj: null,
            suggestions: suggestions
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            archiveds: [],
            list: [],
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should delete a travel object when delAction have been called', () => {
        const reducerStore = reducers(store, travelActions.delAction('5c52ebcd5fc7c9b1433ab704')).toJS()
        const expectedStore = {
            _listFilter: [],
            archiveds: [],
            list: [],
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a travel object when editAction have been called', () => {
        const reducerStore = reducers(store, travelActions.editAction(item)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            archiveds: items.toJS(),
            list: items.toJS(),
            obj: item,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill list and _listFilter when getListAction have been called', () => {
        const reducerStore = reducers(store, travelActions.getListAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            archiveds: items.toJS(),
            list: items.toJS(),
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should reset travel when resetAction have been called', () => {
        const reducerStore = reducers(store, travelActions.resetAction(items)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            archiveds: items.toJS(),
            list: items.toJS(),
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new travel item when saveDataAction have been called', () => {
        const newItem = new TravelModel({
            citiesDestiny: ['Campinas', 'São Paulo'],
            clientCpf: '123.123.123-12',
            clientEmail: 'newEmail@gmail.com',
            clientName: 'TPT EDIT',
            clients: [
                {
                    cpf: '123.123.123-12',
                    email: 'email@gmail.com',
                    id: '5c792716e6e6030f80b85732',
                    name: 'TPT EDIT'
                }
            ],
            travelEndDate: '2019-01-30T12:10:10.000Z',
            travelStartDate: '2019-02-05T17:10:10.000Z'
        })

        const newList = List.of(item, newItem)
        const reducerStore = reducers(store, travelActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            archiveds: items.toJS(),
            list: newList.toJS(),
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists travel item when saveDataAction have been called', () => {
        const newItem = new TravelModel({
            __v: 1,
            _id: '5c52ebcd5fc7c9b1433ab704',
            citiesDestiny: ['Campinas', 'São Paulo'],
            clientCpf: '123.123.123-12',
            clientEmail: 'email@gmail.com',
            clientName: 'TPT EDIT',
            clients: [
                {
                    __v: 0,
                    cpf: '123.123.123-12',
                    createdAt: '2019-03-01T12:35:34.965Z',
                    email: 'email@gmail.com',
                    id: '5c792716e6e6030f80b85732',
                    name: 'TPT EDIT',
                    updatedAt: '2019-03-01T12:35:34.965Z'
                }
            ],
            createdAt: '2019-01-31T12:36:29.463Z',
            travelEndDate: '2019-01-30T12:10:10.000Z',
            travelStartDate: '2019-02-05T17:10:10.000Z',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        const newList = List.of(newItem)
        const reducerStore = reducers(store, travelActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            archiveds: items.toJS(),
            list: newList.toJS(),
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should filter list when searchAction have been called', () => {
        const reducerStore = reducers(store, travelActions.searchAction('TPT')).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            archiveds: items.toJS(),
            list: items.toJS(),
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill suggestions when searchCityOurApiAction have been called', () => {
        const mockedSuggestions = ['City1', 'City2']
        const reducerStore = reducers(store, travelActions.searchCityOurApiAction(mockedSuggestions)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            archiveds: items.toJS(),
            list: items.toJS(),
            obj: null,
            suggestions: mockedSuggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill suggestions when searchClientsAction have been called', () => {
        const mockedSuggestions = ['Client1', 'Client2']
        const reducerStore = reducers(store, travelActions.searchClientsAction(mockedSuggestions)).toJS()
        const expectedStore = {
            _listFilter: items.toJS(),
            archiveds: items.toJS(),
            list: items.toJS(),
            obj: null,
            suggestions: mockedSuggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, logoutAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            archiveds: [],
            list: [],
            obj: null,
            suggestions: suggestions
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})
