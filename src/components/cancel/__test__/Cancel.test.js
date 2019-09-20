import React from 'react'
import renderer from 'react-test-renderer'

import Cancel from '@components/cancel/Cancel'

describe('Tests for Cancel component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<Cancel link={'/teste'} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
