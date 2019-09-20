import React from 'react'
import renderer from 'react-test-renderer'

import Input from '../Input'

describe('Tests for Input component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<Input onChange={null} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Should render with given props', () => {
        const tree = renderer.create(<Input onChange={null} placeholder="testPlaceholder" value="testValue" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
