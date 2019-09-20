import React from 'react'
import renderer from 'react-test-renderer'

import Feedback from '../Feedback'

describe('Tests for Feedback component', () => {
    it('Should render withou crash', () => {
        const tree = renderer.create(<Feedback />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
