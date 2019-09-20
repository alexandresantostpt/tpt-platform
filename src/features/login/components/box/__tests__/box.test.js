import React from 'react'
import renderer from 'react-test-renderer'

import Box from '../Box'

describe('Tests for Box component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer
            .create(
                <Box>
                    <h1>Must be show!</h1>
                </Box>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
