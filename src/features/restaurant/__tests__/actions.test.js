import { actions } from '../constants'

import * as restaurantActions from '../actions'

import { getAction } from '@utils/actions'

import RestaurantServiceModel from '../models/RestaurantServiceModel'

describe('Tests for Restaurant actions', () => {
    const restaurant = new RestaurantServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        address: 'Rua endereço',
        clients: ['123', '123'],
        confirmedBy: 'Alguém',
        createdAt: '2019-02-21T00:00:00.000Z',
        dressCode: 'ABC-D',
        name: 'Nome do restaurante',
        peopleCount: '4',
        phoneNumber: '(99)99999-9999',
        reserveDate: '2019-03-01T00:00:00.000Z',
        reserveHour: '2019-03-01T18:00:00.000Z',
        reserveNumber: '123',
        script: '123',
        scriptDate: '2019-03-01T00:00:00.000Z',
        site: 'restaurante.com.br',
        type: 'RESTAURANT',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.RESTAURANT_DEL)

        expect(restaurantActions.delAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.RESTAURANT_GET_SINGLE)

        expect(restaurantActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.RESTAURANT_REQUEST_DEL)

        expect(restaurantActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.RESTAURANT_REQUEST_GET_SINGLE)

        expect(restaurantActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = restaurant
        const type = getAction(actions.RESTAURANT_REQUEST_SAVE_DATA)

        expect(restaurantActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = restaurant
        const type = getAction(actions.RESTAURANT_SAVE_DATA)

        expect(restaurantActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
