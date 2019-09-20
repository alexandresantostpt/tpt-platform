import { actions } from '../constants'

import * as hotelActions from '../actions'

import { getAction } from '@utils/actions'

import HotelServiceModel from '../models/HotelServiceModel'

describe('Tests for Hotel actions', () => {
    const hotel = new HotelServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        address: 'Rua endereço',
        checkInDate: '2019-03-01T00:00:00.000Z',
        checkInHour: '2019-03-01T19:00:00.000Z',
        checkOutDate: '2019-03-02T00:00:00.000Z',
        checkOutHour: '2019-03-02T19:00:00.000Z',
        createdAt: '2019-02-21T00:00:00.000Z',
        differences: 'Restarante Michelin no hotel',
        guestCount: '4',
        includedMeals: ['Café da manhã', 'Jantar'],
        name: 'Four seasons',
        roomType: 'Deluxe',
        script: '5c792717e6e603726db85733',
        scriptDate: '2019-03-01T17:10:10.000Z',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.HOTEL_DEL)

        expect(hotelActions.delAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.HOTEL_GET_SINGLE)

        expect(hotelActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.HOTEL_REQUEST_DEL)

        expect(hotelActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.HOTEL_REQUEST_GET_SINGLE)

        expect(hotelActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = hotel
        const type = getAction(actions.HOTEL_REQUEST_SAVE_DATA)

        expect(hotelActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = hotel
        const type = getAction(actions.HOTEL_SAVE_DATA)

        expect(hotelActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
