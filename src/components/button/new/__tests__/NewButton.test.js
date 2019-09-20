import React from 'react'
import renderer from 'react-test-renderer'

import NewButton from '@components/button/new/NewButton'

describe('Tests for NewButton component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<NewButton transparent={false} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
