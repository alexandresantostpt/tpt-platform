import React from 'react'
import renderer from 'react-test-renderer'

import Summary from '../Summary'

describe('Tests for Summary container', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <Summary>
                    <h1>Must be show</h1>
                </Summary>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
