import React from 'react'
import renderer from 'react-test-renderer'

import PanelActions from '@components/panel/panelActions/PanelActions'

describe('Tests for PanelActions component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer.create(<PanelActions isNewAction={false} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
