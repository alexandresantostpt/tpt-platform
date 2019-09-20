import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../Avatar'

describe('Tests for Avatar component', () => {
    it('Should render without crash', () => {
        const tree = renderer.create(<Avatar alt="A" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Should render with given size', () => {
        const tree = renderer.create(<Avatar alt="A" size={20} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Should render with given name', () => {
        const tree = renderer.create(<Avatar alt="Harry Potter" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
