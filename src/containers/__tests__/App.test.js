import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import App from '../App'

describe('Tests for App container', () => {
    let mockStore = {}
    let store = {}
    let task = {}
    let toast = {}

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

    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <App>
                        <h1>Must be show</h1>
                    </App>
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
