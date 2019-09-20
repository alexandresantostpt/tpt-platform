import React from 'react'
import renderer from 'react-test-renderer'

import Page from '../Page'

describe('Tests for Page component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer
            .create(
                <Page>
                    <h1>Must be show!</h1>
                </Page>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
