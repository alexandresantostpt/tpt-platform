import React from 'react'
import renderer from 'react-test-renderer'

import WrapperPadding from '../WrapperPadding'

describe('Tests for WrapperPadding component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<WrapperPadding />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
