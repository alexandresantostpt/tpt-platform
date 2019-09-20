import React from 'react'
import renderer from 'react-test-renderer'

import Input from '../Input'

describe('Tests for Input component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<Input id="teste" onChange={jest.fn()} type="text" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
