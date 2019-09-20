import React from 'react'
import renderer from 'react-test-renderer'

import Search from '@components/search/Search'

describe('Tests for Search component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer.create(<Search />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
