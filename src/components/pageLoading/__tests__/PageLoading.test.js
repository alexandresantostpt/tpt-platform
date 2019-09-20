import React from 'react'
import renderer from 'react-test-renderer'

import PageLoading from '../PageLoading'

describe('Tests for PageLoading component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer.create(<PageLoading />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
