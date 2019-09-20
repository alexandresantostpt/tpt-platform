import React from 'react'
import renderer from 'react-test-renderer'

import Empty from '@components/empty/Empty'

describe('Tests for Empty component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer.create(<Empty />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
