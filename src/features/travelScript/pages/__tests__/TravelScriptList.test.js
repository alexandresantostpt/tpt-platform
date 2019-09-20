import configureMockStore from 'redux-mock-store'
import moment from 'moment'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import TravelModel from '@features/travel/TravelModel'
import TravelScriptModel from '../../models/TravelScriptModel'

import TravelScriptList from '../TravelScriptList'

describe('Tests for TravelScript component', () => {
    let mockStore = {}
    let store = {}
    let toast = {}
    let task = {}

    const travel = new TravelModel({
        __v: 0,
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
        closed: false,
        createdAt: '2019-01-31T12:36:29.463Z',
        travelEndDate: '2019-01-30T12:10:10.000Z',
        travelStartDate: '2019-02-05T17:10:10.000Z',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    const service = {
        service: {
            __v: 1,
            address: 'Teste DOIS',
            clients: ['5c792716e6e6030f80b85732'],
            confirmedBy: 'Teste',
            createdAt: '2019-03-07T21:52:59.347Z',
            dressCode: 'Casual',
            id: '5c8192bb650a39eb9dd49249',
            library: {
                name: 'Teste'
            },
            peopleCount: 1,
            reserveDate: '2019-02-01T00:00:00.000Z',
            reserveHour: '2019-02-01T02:30:00.000Z',
            reserveNumber: 123,
            script: '5c819219650a3965a5d49243',
            scriptDate: '2019-02-01T00:00:00.000Z',
            type: 'RESTAURANT',
            updatedAt: '2019-03-08T12:38:21.680Z'
        }
    }

    const date = {
        city: 'Campinas',
        date: moment('15-02-2019', 'DD-MM-YYYY').utc(false),
        services: [service]
    }

    const travelScript = new TravelScriptModel({
        __v: '1.0',
        _id: '1',
        createdAt: '2019-02-21',
        dates: [date],
        services: [],
        travel,
        updatedAt: '2019-02-21'
    })

    beforeEach(() => {
        task = {
            __v: 28,
            _id: '5c9e31f8c57b4917b426e334',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 123',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        }
        toast = { icon: 'check', message: 'success', type: 'success' }

        mockStore = configureMockStore()
        store = mockStore(
            Record({
                tasksReducers: Map({
                    list: List.of(task)
                }),
                toastReducers: Map({
                    list: List.of(toast)
                })
            })()
        )
    })

    it('Should render withou crash', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c9b1433ab704'
            }
        }
        const tree = renderer
            .create(
                <Provider store={store}>
                    <TravelScriptList
                        match={match}
                        requestGetSingleAction={jest.fn()}
                        requestUpdateCityAction={jest.fn()}
                        travelScript={travelScript}
                    />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('Should render a closed travel', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c9b1433ab704'
            }
        }

        const closeTravelScript = new TravelScriptModel({
            __v: '1.0',
            _id: '1',
            createdAt: '2019-02-21',
            dates: [date],
            travel: { ...travel, closed: true },
            updatedAt: '2019-02-21'
        })
        const tree = renderer
            .create(
                <Provider store={store}>
                    <TravelScriptList
                        match={match}
                        requestGetSingleAction={jest.fn()}
                        requestUpdateCityAction={jest.fn()}
                        travelScript={closeTravelScript}
                    />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
