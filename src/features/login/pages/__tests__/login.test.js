import React from 'react'
import renderer from 'react-test-renderer'

import Login from '../Login'

describe('Tests for Login component', () => {
    it('Should render withou crash', () => {
        const tree = renderer.create(<Login requestAuthAction={jest.fn()} wrongCredentials={false} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
