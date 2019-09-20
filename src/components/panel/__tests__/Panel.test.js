import React from 'react'
import renderer from 'react-test-renderer'

import Panel from '@components/panel/Panel'

describe('Tests for Panel component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<Panel />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
