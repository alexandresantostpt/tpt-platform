import React from 'react'
import renderer from 'react-test-renderer'

import Text from '../Text'

describe('Tests for Text component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer
            .create(
                <Text>
                    <h1>Must be show!</h1>
                </Text>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
