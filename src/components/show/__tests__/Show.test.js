import React from 'react'
import renderer from 'react-test-renderer'

import Show from '@components/show/Show'

describe('Tests for Show component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <Show only={true}>
                    <h1>Must be show</h1>
                </Show>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('Should return null when only is a false value ', () => {
        const tree = renderer
            .create(
                <Show only={false}>
                    <h1>Must not be show</h1>
                </Show>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
