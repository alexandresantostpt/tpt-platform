import React from 'react'
import renderer from 'react-test-renderer'

import LinkTo from '../LinkTo'

describe('Tests for LinkTo component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<LinkTo text="123" to="/" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
