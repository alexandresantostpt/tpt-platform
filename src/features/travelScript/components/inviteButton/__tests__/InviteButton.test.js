import React from 'react'
import renderer from 'react-test-renderer'

import InviteButton from '../InviteButton'

describe('Tests for InviteButton component', () => {
    it('Should render default button', () => {
        const tree = renderer.create(<InviteButton onClick={null} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Should render round button', () => {
        const tree = renderer.create(<InviteButton onClick={null} round />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
