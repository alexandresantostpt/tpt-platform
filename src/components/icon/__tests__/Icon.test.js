import React from 'react'
import renderer from 'react-test-renderer'

import Icon from '@components/icon/Icon'

describe('Tests for Icon component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer.create(<Icon icon="icon-bookmark" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
