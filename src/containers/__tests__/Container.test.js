import React from 'react'
import renderer from 'react-test-renderer'

import Container from '../Container'

describe('Tests for Container container', () => {
    it('Should rendering without crash ', () => {
        const tree = renderer
            .create(
                <Container>
                    <h1>Must be show</h1>
                </Container>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
