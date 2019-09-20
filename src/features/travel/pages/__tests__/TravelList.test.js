import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import TravelList from '../TravelList'

import TravelModel from '../../TravelModel'

describe('Tests for Travel component', () => {
    let mockStore = {}
    let store = {}
    let toast = {}

    const travel = new TravelModel({
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

    beforeEach(() => {
        toast = { icon: 'check', message: 'success', type: 'success' }

        mockStore = configureMockStore()
        store = mockStore(
            Record({
                toastReducers: Map({
                    list: List.of(toast)
                })
            })()
        )
    })

    it.skip('Should render withou crash', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <TravelList
                        requestDelAction={jest.fn()}
                        requestEditAction={jest.fn()}
                        requestGetListAction={jest.fn()}
                        requestResetAction={jest.fn()}
                        requestSaveDataAction={jest.fn()}
                        requestSearchAction={jest.fn()}
                        requestSearchClientsAction={jest.fn()}
                        travel={travel}
                        travels={[travel]}
                    />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
