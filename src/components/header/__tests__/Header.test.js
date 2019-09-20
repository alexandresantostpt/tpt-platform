import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import Header from '@components/header/Header'

describe('Tests for Header component', () => {
    let mockStore = {}
    let store = {}

    beforeEach(() => {
        mockStore = configureMockStore()
        store = mockStore()
    })

    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Header />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
