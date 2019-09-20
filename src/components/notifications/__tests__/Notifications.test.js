import React from 'react'
import renderer from 'react-test-renderer'

import Notifications from '../Notifications'

describe('Tests for Notifications component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<Notifications />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
