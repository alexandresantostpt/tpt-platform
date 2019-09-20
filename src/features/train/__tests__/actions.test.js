import { actions } from '../constants'

import * as trainActions from '../actions'

import { getAction } from '@utils/actions'

import TrainServiceModel from '../models/TrainServiceModel'

describe('Tests for TrainForm actions', () => {
    const train = new TrainServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        company: 'Minha empresa',
        createdAt: '2019-01-31T12:36:29.463Z',
        date: '2019-01-30T12:10:10.000Z',
        hourArrival: '2019-01-30T13:00:00.000Z',
        hourExit: '2019-01-30T18:00:00.000Z',
        luggage: 10,
        platform: 'Minha plataforma',
        seat: 'R20',
        stationArrival: 'Chegada',
        stationExit: 'Saída',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAIN_DEL)

        expect(trainActions.delAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAIN_REQUEST_DEL)

        expect(trainActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = train
        const type = getAction(actions.TRAIN_REQUEST_SAVE_DATA)

        expect(trainActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = train
        const type = getAction(actions.TRAIN_SAVE_DATA)

        expect(trainActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
