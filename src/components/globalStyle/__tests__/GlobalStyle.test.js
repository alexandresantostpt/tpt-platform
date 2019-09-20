import React from 'react'
import renderer from 'react-test-renderer'

import GlobalStyle from '../GlobalStyle'

describe('Tests for GlobalStyle component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<GlobalStyle />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
