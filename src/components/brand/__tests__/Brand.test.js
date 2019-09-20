import React from 'react'
import renderer from 'react-test-renderer'

import Brand from '@components/brand/Brand'

describe('Tests for Brand component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer.create(<Brand />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
