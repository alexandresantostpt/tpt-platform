import React from 'react'
import renderer from 'react-test-renderer'

import FormBuilder from '../FormBuilder'

describe('Tests for Form component', () => {
    it('Should render without crash', () => {
        const formFields = [
            { component: 'input', id: 'id', name: 'id', required: false, type: 'hidden' },
            { component: 'input', id: 'myField', name: 'myField', required: true, type: 'text' },
            {
                component: 'input',
                id: 'myFieldNotRequired',
                name: 'myFieldNotRequired',
                required: false,
                type: 'text'
            },
            { component: 'input', id: 'myNumberField', name: 'myNumberField', required: false, type: 'number' },
            { component: 'input', id: 'date', name: 'date', required: false, type: 'date' },
            { component: 'input', id: 'time', name: 'time', required: false, type: 'time' }
        ]
        const tree = renderer.create(<FormBuilder fields={formFields} onSubmit={jest.fn()} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
