import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import ClientList from '../ClientList'
import ClientModel from '../../ClientModel'

describe('Tests for Client component', () => {
    let mockStore = {}
    let store = {}
    let task = {}
    let toast = {}

    const client = new ClientModel({
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
        const user = {
            agency: '5c52ebcd5fc7c9b1433ab704'
        }
        const tree = renderer
            .create(
                <Provider store={store}>
                    <ClientList
                        client={client}
                        clients={[client]}
                        requestDelAction={jest.fn()}
                        requestGetListAction={jest.fn()}
                        requestGetSingleAction={jest.fn()}
                        requestSaveDataAction={jest.fn()}
                        requestSearchAction={jest.fn()}
                        user={user}
                    />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
