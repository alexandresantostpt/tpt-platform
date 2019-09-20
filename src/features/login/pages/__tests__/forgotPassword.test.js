import React from 'react'
import renderer from 'react-test-renderer'

import ForgotPassword from '../ForgotPassword'

describe('Tests for ForgotPassword component', () => {
    it('Should render withou crash', () => {
        const tree = renderer.create(<ForgotPassword requestRememberPasswordAction={jest.fn()} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
