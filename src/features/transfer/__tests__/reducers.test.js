import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as transferActions from '../actions'
import { logoutAction } from '@features/login/actions'

import CarModel from '../models/CarModel'
import DriverModel from '../models/DriverModel'
import TransferServiceModel from '../models/TransferServiceModel'

describe('Tests for TansferModel reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        const car = new CarModel({
            board: 'ABC123',
            model: 'Dx'
        })

        const driver = new DriverModel({
            howIdentify: 'Fulano',
            name: 'Meu motorista',
            phone: '(99)99999-9999'
        })

        item = new TransferServiceModel({
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

        store = Record({
            obj: null
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should delete a transfer object when delAction have been called', () => {
        const reducerStore = reducers(store, transferActions.delAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a transfer object when editAction have been called', () => {
        const reducerStore = reducers(store, transferActions.editAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new transfer item when saveDataAction have been called', () => {
        const reducerStore = reducers(store, transferActions.saveDataAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, logoutAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})
