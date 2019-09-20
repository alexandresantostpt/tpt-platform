import React from 'react'
import renderer from 'react-test-renderer'

import Title from '@components/title/Title'

describe('Tests for Title component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer.create(<Title>My test</Title>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
