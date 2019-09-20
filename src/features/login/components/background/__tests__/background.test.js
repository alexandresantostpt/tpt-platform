import React from 'react'
import renderer from 'react-test-renderer'

import Background from '../Background'

describe('Tests for Background component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<Background />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
