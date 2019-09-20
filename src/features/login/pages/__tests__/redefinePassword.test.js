import React from 'react'
import renderer from 'react-test-renderer'

import RedefinePassword from '../RedefinePassword'

describe('Tests for RedefinePassword component', () => {
    it('Should render withou crash', () => {
        const tree = renderer.create(<RedefinePassword requestUpdatePasswordAction={jest.fn()} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
