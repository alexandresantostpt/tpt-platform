import configureMockStore from 'redux-mock-store'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import Configurations from '../Configurations'

describe('Tests for Configurations component', () => {
    let mockStore = {}
    let store = {}

    beforeEach(() => {
        mockStore = configureMockStore()
        store = mockStore()
    })

    it('Should render without crash', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Configurations />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
