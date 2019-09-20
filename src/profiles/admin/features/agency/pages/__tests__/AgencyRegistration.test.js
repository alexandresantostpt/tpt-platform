import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import AgencyRegistration from '../AgencyRegistration'

import AgencyModel from '../../AgencyModel'

describe('Tests for AgencyRegistration component', () => {
    const agency = new AgencyModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        agency: {},
        appTheme: '#FFFFFF',
        businessName: 'This is my test',
        cnpj: '12345678909876',
        createdAt: '2019-03-01T12:35:34.965Z',
        logoTipo: 'logoTipo.png',
        phoneContact: '191234566',
        phoneEmergency: '1932465789',
        socialName: 'Test',
        updatedAt: '2019-03-01T12:35:34.965Z',
        user: {}
    })

    it('Should render withou crash', () => {
        const renderer = new ShallowRenderer()
        const tree = renderer.render(
            <AgencyRegistration agency={agency} requestGetSingleAction={jest.fn()} requestSaveDataAction={jest.fn()} />
        )
        expect(tree).toMatchSnapshot()
    })
})
