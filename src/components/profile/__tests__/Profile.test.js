import React from 'react'
import renderer from 'react-test-renderer'

import Profile from '../Profile'

describe('Tests for Profile component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<Profile />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
