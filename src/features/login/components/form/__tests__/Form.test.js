import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

describe('Tests for Form component', () => {
    it('Should rendering without crash', () => {
        const tree = renderer
            .create(
                <Form>
                    <h1>Must be show!</h1>
                </Form>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
