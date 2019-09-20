import { actions } from '../constants'

import * as tourActions from '../actions'

import { getAction } from '@utils/actions'

import TourServiceModel from '../models/TourServiceModel'

describe('Tests for Tour actions', () => {
    const transfer = new TourServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        createdAt: '2019-01-31T12:36:29.463Z',
        departureTime: '18:00',
        guideOrDriver: 'Guide',
        includedMeals: ['Café da manhã', 'Almoço'],
        language: 'Português',
        localOperator: 'Seu João',
        meanOfTransportation: 'Carro',
        peopleQuantity: '2',
        title: 'Título do passeio',
        tourDate: '2019-01-31T12:36:29.463Z',
        tourDescription: 'Descrição do passeio',
        tourDuration: '2 horas',
        tourType: 'Privativo',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const type = getAction(actions.TOUR_DEL)

        expect(tourActions.delAction()).toEqual({ type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TOUR_GET_SINGLE)

        expect(tourActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TOUR_REQUEST_DEL)

        expect(tourActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TOUR_REQUEST_GET_SINGLE)

        expect(tourActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = transfer
        const type = getAction(actions.TOUR_REQUEST_SAVE_DATA)

        expect(tourActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const type = getAction(actions.TOUR_SAVE_DATA)

        expect(tourActions.saveDataAction()).toEqual({ type })
    })
})
