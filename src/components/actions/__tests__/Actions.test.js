import React from 'react'
import renderer from 'react-test-renderer'

import Actions from '../Actions'

describe('Tests for Actions component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<Actions />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
