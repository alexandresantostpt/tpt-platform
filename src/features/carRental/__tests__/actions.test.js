import { actions } from '../constants'

import * as carRentalActions from '../actions'

import { getAction } from '@utils/actions'

import CarRentalServiceModel from '../models/CarRentalServiceModel'

describe('Tests for CarRental actions', () => {
    const carRental = new CarRentalServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        addressDevolution: 'teste',
        addressRetire: 'teste',
        agency: 'teste',
        createdAt: '2019-01-31T12:36:29.463Z',
        devolutionDate: '2019-01-31T12:36:29.463Z',
        devolutionName: 'teste',
        documents: 'teste',
        hourDevolution: '12:30',
        hourRetire: '10:00',
        isIncluded: 'teste',
        isNotIncluded: 'teste',
        model: 'teste',
        operationHourEnd: '8:00',
        operationHourStart: '22:00',
        phoneNumberDevolution: '11 1234-5678',
        phoneNumberRetire: '11 1234-5678',
        retireDate: '2019-01-31T12:36:29.463Z',
        retireName: 'teste',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const type = getAction(actions.CAR_RENTAL_DEL)

        expect(carRentalActions.delAction()).toEqual({ type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CAR_RENTAL_GET_SINGLE)

        expect(carRentalActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CAR_RENTAL_REQUEST_DEL)

        expect(carRentalActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CAR_RENTAL_REQUEST_GET_SINGLE)

        expect(carRentalActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = carRental
        const type = getAction(actions.CAR_RENTAL_REQUEST_SAVE_DATA)

        expect(carRentalActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const type = getAction(actions.CAR_RENTAL_SAVE_DATA)

        expect(carRentalActions.saveDataAction()).toEqual({ type })
    })
})
