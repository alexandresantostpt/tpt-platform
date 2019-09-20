import { actions } from '../constants'

import * as travelScriptActions from '../actions'

import { getAction } from '@utils/actions'

describe('Tests for TravelScript actions', () => {
    const travel = {
        __v: 0,
        _id: '5cb5cfdedbc945318eee120b',
        agency: '5cb5cf82dbc945318eee1207',
        citiesDestiny: ['Paris', 'Barcelona'],
        clients: ['Cliente 1'],
        closed: true,
        createdAt: '2019-02-21T00:00:00.000Z',
        status: 'SENT',
        title: 'The Travel',
        travelEndDate: '2019-03-02T00:00:00.000Z',
        travelStartDate: '2019-03-01T00:00:00.000Z',
        updatedAt: '2019-02-21T00:00:00.000Z',
        users: ['5cb5cf82dbc945318eee1209']
    }

    const share = {
        email: 'teste@gmail.com',
        id: '5cb5cfdedbc945318eee120b'
    }

    it('Dispatches closeMaterialAction with the correct action and payload', () => {
        const mockValue = travel
        const type = getAction(actions.TRAVEL_SCRIPT_CLOSE_MATERIAL)

        expect(travelScriptActions.closeMaterialAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_SCRIPT_GET_SINGLE)

        expect(travelScriptActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestCloseMaterialAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_SCRIPT_REQUEST_CLOSE_MATERIAL)

        expect(travelScriptActions.requestCloseMaterialAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_SCRIPT_REQUEST_GET_SINGLE)

        expect(travelScriptActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestShareTravelAction with the correct action and payload', () => {
        const payload = share
        const type = getAction(actions.TRAVEL_SCRIPT_REQUEST_SHARE)

        expect(travelScriptActions.requestShareTravelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestUpdateMaterialAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_SCRIPT_REQUEST_UPDATE_MATERIAL)

        expect(travelScriptActions.requestUpdateMaterialAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches shareTravelAction with the correct action and payload', () => {
        const mockValue = travel
        const type = getAction(actions.TRAVEL_SCRIPT_SHARE)

        expect(travelScriptActions.shareTravelAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches updateMaterialAction with the correct action and payload', () => {
        const mockValue = travel
        const type = getAction(actions.TRAVEL_SCRIPT_UPDATE_MATERIAL)

        expect(travelScriptActions.updateMaterialAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
