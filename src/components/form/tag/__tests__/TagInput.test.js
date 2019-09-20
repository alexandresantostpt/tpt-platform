import React from 'react'
import renderer from 'react-test-renderer'

import FormTag from '../FormTag'

describe('Tests for TagInput component', () => {
    it('Should render without crash', () => {
        const tree = renderer
            .create(
                <FormTag
                    form={{}}
                    id="MY_INPUT"
                    name="MY_INPUT"
                    onBlur={() => console.log('Blur...')}
                    onChange={() => console.log('Change...')}
                    onFocus={() => console.log('Focus...')}
                    required={true}
                    type="text"
                    value="MY_VALUE"
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
