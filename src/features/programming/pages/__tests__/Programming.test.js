import React from 'react'
import renderer from 'react-test-renderer'

import ProgrammingServiceModel from '../../models/ProgrammingServiceModel'

import Programming from '../Programming'

describe('Tests for Programming component', () => {
    const programming = new ProgrammingServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        createdAt: '2019-02-21T00:00:00.000Z',
        describe: 'teste',
        script: '123',
        scriptDate: '2019-03-01T00:00:00.000Z',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })

    it('Should render withou crash', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c949223ab705'
            }
        }
        const tree = renderer
            .create(
                <Programming
                    match={match}
                    programming={programming}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    requestSaveDataAction={jest.fn()}
                    travelRequestGetSingleAction={jest.fn()}
                    travelScript={null}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
