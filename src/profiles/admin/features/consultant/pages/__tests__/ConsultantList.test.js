import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import ConsultantList from '../ConsultantList'

import ConsultantModel from '../../ConsultantModel'

describe('Tests for Consultant component', () => {
    let mockStore = {}
    let store = {}
    let task = {}
    let toast = {}

    const consultant = new ConsultantModel({
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
                    <ConsultantList
                        consultant={consultant}
                        consultants={[consultant]}
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
