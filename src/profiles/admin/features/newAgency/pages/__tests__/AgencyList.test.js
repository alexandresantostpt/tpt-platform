import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import AgencyList from '../AgencyList'

import AgencyUserModel from '../../AgencyUserModel'

describe('Tests for Agency component', () => {
    let mockStore = {}
    let store = {}
    let task = {}
    let toast = {}

    const agency = new AgencyUserModel({
        agency: {
            __v: 0,
            _id: '5caf547ce3f3db3e69103a10',
            cnpj: '12.123.123/1234-12',
            createdAt: '2019-04-11T14:51:40.267Z',
            deleted: false,
            socialName: 'Agência testes',
            updatedAt: '2019-04-11T19:13:03.592Z'
        },
        user: {
            __v: 0,
            _id: '5caf547ce3f3db3e69103a11',
            active: false,
            agency: '5caf547ce3f3db3e69103a10',
            blocked: true,
            cpf: '437.958.818-11',
            createdAt: '2019-04-11T14:51:40.271Z',
            deleted: false,
            email: 'teste@teste.com.br',
            lastAccess: '2019-04-11T13:47:29.312Z',
            name: 'Adm teste',
            password: 'c705d2857889ded02c1ec111134236e7a4a9cb3d89ec0d3577ee40a84ec180db',
            role: 'ADMIN',
            updatedAt: '2019-04-11T19:13:03.594Z'
        }
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
        const tree = renderer
            .create(
                <Provider store={store}>
                    <AgencyList
                        agencies={[agency]}
                        agency={agency}
                        requestGetListAction={jest.fn()}
                        requestGetSingleAction={jest.fn()}
                        requestSaveDataAction={jest.fn()}
                        requestSearchAction={jest.fn()}
                    />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
