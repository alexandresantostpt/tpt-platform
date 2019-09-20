import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import Tasks from '../Tasks'

describe('Tests for Travel component', () => {
    let mockStore = {}
    let store = {}
    let toast = {}

    const tasks = [
        {
            __v: 28,
            _id: '5c9e31f8c57b4917b426e334',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 123',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        },
        {
            __v: 2,
            _id: '5c9e31f8c57b4917b426e344',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 1234',
            done: true,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        }
    ]

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

    it('Should render withou crash', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Tasks
                        requestDelAction={jest.fn()}
                        requestGetAllAction={jest.fn()}
                        requestSaveDataAction={jest.fn()}
                        tasks={tasks}
                    />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
