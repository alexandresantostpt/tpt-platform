import { actions } from '../constants'

import * as cruiseActions from '../actions'

import { getAction } from '@utils/actions'

import CruiseServiceModel from '../models/CruiseServiceModel'

describe('Tests for Cruise actions', () => {
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

    it('Dispatches delAction with the correct action and payload', () => {
        const type = getAction(actions.CRUISE_DEL)

        expect(cruiseActions.delAction()).toEqual({ type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CRUISE_GET_SINGLE)

        expect(cruiseActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CRUISE_REQUEST_DEL)

        expect(cruiseActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CRUISE_REQUEST_GET_SINGLE)

        expect(cruiseActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = cruise
        const type = getAction(actions.CRUISE_REQUEST_SAVE_DATA)

        expect(cruiseActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const type = getAction(actions.CRUISE_SAVE_DATA)

        expect(cruiseActions.saveDataAction()).toEqual({ type })
    })
})
