import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

describe('Tests for Button component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer
            .create(
                <Button disabled={false} onClick={jest.fn()}>
                    Text
                </Button>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
