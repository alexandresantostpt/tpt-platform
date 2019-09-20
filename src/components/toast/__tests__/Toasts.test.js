import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { List, Map, Record } from 'immutable'
import { Provider } from 'react-redux'

import Toasts from '../Toasts'

describe('Tests for Toasts component', () => {
    let mockStore = {}
    let toast = {}
    let store = {}

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

    it('Should render without crash', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Toasts requestAddToastAction={jest.fn()} requestRemoveToastAction={jest.fn()} />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
