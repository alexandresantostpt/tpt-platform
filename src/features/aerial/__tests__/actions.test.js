import { actions } from '../constants'

import * as aerialActions from '../actions'

import { getAction } from '@utils/actions'

import AerialServiceModel from '../models/AerialServiceModel'

describe('Tests for Aerial actions', () => {
    const aerial = new AerialServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        createdAt: '2019-03-14T16:34:42.827Z',
        journeys: [
            {
                _id: '5c8a82a201ef651f03c4a6da',
                companyName: 'teste',
                flightNumber: 123,
                from: { airport: 'teste', city: 'teste', date: '2019-03-15T15:00:00.000Z', hour: '2019-03-14T15:00:00.288Z' },
                passengers: [{ _id: '5c8a82a201ef650d68c4a6db', client: '5c7a69db283f8a18ed32a7fd' }],
                to: { airport: 'teste', city: 'teste', hour: '2019-03-14T20:00:00.361Z' }
            },
            {
                _id: '5c8a82a201ef652302c4a6d8',
                companyName: 'teste',
                flightNumber: 12312312,
                from: { airport: 'teste', city: 'teste', date: '2019-03-14T15:00:00.000Z', hour: '2019-03-14T15:00:00.063Z' },
                passengers: [{ _id: '5c8a82a201ef650011c4a6d9', client: '5c7a69db283f8a18ed32a7fd' }],
                to: { airport: 'teste', city: 'teste', hour: '2019-03-14T17:00:00.024Z' }
            }
        ],
        script: '5c8a547c01ef65c1e2c4a67b',
        scriptDate: '2019-03-14T00:00:00.000Z',
        type: 'AERIAL',
        updatedAt: '2019-03-14T16:34:42.827Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.AERIAL_DEL)

        expect(aerialActions.delAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.AERIAL_REQUEST_DEL)

        expect(aerialActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = aerial
        const type = getAction(actions.AERIAL_REQUEST_SAVE_DATA)

        expect(aerialActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = aerial
        const type = getAction(actions.AERIAL_SAVE_DATA)

        expect(aerialActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
