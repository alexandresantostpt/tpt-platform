import { actions } from '../constants'

import * as transferActions from '../actions'

import { getAction } from '@utils/actions'

import CarModel from '../models/CarModel'
import DriverModel from '../models/DriverModel'
import TransferServiceModel from '../models/TransferServiceModel'

describe('Tests for Transfer actions', () => {
    const car = new CarModel({
        board: 'ABC123',
        model: 'Dx'
    })

    const driver = new DriverModel({
        howIdentify: 'Fulano',
        name: 'Meu motorista',
        phone: '(99)99999-9999'
    })

    const transfer = new TransferServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        assistance: 'Personalizada',
        car,
        createdAt: '2019-01-31T12:36:29.463Z',
        date: '2019-0201T00:00.000Z',
        driver,
        guideOrDriver: 'Guia',
        hour: '2019-0201T00:00.000Z',
        localOperator: 'Meu operador',
        luggageLimite: 5,
        meetPoint: 'Teste',
        name: 'Teste',
        passenger: ['123', '123'],
        script: '123',
        scriptDate: '2019-01-31T12:36:29.463Z',
        transferType: 'Privado',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const type = getAction(actions.TRANSFER_DEL)

        expect(transferActions.delAction()).toEqual({ type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c9b1433ab704'
        const type = getAction(actions.TRANSFER_REQUEST_DEL)

        expect(transferActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = transfer
        const type = getAction(actions.TRANSFER_REQUEST_SAVE_DATA)

        expect(transferActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const type = getAction(actions.TRANSFER_SAVE_DATA)

        expect(transferActions.saveDataAction()).toEqual({ type })
    })
})
