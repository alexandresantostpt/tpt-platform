import React from 'react'
import renderer from 'react-test-renderer'

import ResetPassword from '../ResetPassword'

describe('Tests for ResetPassword component', () => {
    it('Should render withou crash', () => {
        const tree = renderer.create(<ResetPassword requestResetPasswordAction={jest.fn()} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
