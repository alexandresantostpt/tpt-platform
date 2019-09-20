import React from 'react'
import renderer from 'react-test-renderer'

import CruiseServiceModel from '../../models/CruiseServiceModel'

import CruiseForm from '../CruiseForm'
import TravelScriptModel from '@/features/travelScript/models/TravelScriptModel'

describe('Tests for CruiseForm component', () => {
    const cruise = new CruiseServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        boarding: {
            date: '2019-03-12T00:00:00.000Z',
            hour: '2019-03-12T20:00:00.458Z',
            point: 'Test'
        },
        cabinNumber: 123145,
        cabinType: 'Test',
        category: 'Test',
        cruiseName: 'Test',
        image: null,
        landing: {
            date: '2019-03-12T00:00:00.000Z',
            hour: '2019-03-12T20:00:00.458Z',
            point: 'Test'
        },
        observation: 'Observation',
        reserveNumber: 123456,
        script: '5c52ebcd5fc7c9b1433ab704',
        shipName: 'Princess Consuela'
    })
    const travelScript = new TravelScriptModel({ travel: { __v: 0 } })

    it('Should render withou crash', () => {
        const match = {
            params: {
                id: '5c52ebcd5fc7c949223ab705'
            }
        }
        const tree = renderer
            .create(
                <CruiseForm
                    cruise={cruise}
                    match={match}
                    requestDelAction={jest.fn()}
                    requestGetSingleAction={jest.fn()}
                    requestSaveDataAction={jest.fn()}
                    travelScript={travelScript}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
