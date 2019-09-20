import React from 'react'
import renderer from 'react-test-renderer'

import If from '@components/if/If'

describe('Tests for If component', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <If condition={true}>
                    <h1>Must be show</h1>
                </If>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('Should rendering el props ', () => {
        const tree = renderer
            .create(
                <If condition={false} el={<h2>Must be show</h2>}>
                    <h1>Must not be show</h1>
                </If>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
