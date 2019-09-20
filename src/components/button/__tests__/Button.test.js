import React from 'react'
import renderer from 'react-test-renderer'

import Button from '@components/button/Button'

describe('Tests for Button component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<Button text="Test" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
