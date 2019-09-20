import moxios from 'moxios'

import { http } from '@http'

import * as transferApi from '../api'

import CarModel from '../models/CarModel'
import DriverModel from '../models/DriverModel'
import TransferServiceModel from '../models/TransferServiceModel'

describe('Tests for Transfer API', () => {
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
        date: '2019-01-31T12:36:29.463Z',
        driver,
        guideOrDriver: 'Guia',
        hour: '2019-01-31T12:36:29.463Z',
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

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = transfer
        const expectedResponse = new TransferServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            assistance: 'Personalizada',
            car,
            createdAt: '2019-01-31T12:36:29.463Z',
            date: '2019-01-31T12:36:29.463Z',
            driver,
            guideOrDriver: 'Guia',
            hour: '2019-01-31T12:36:29.463Z',
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

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data } = await transferApi.delAPI('5c52ebcd5fc7c9b1433ab704')
        expect(data).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = transfer
        const expectedResponse = new TransferServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            assistance: 'Personalizada',
            car,
            createdAt: '2019-01-31T12:36:29.463Z',
            date: '2019-01-31T12:36:29.463Z',
            driver,
            guideOrDriver: 'Guia',
            hour: '2019-01-31T12:36:29.463Z',
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

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await transferApi.saveAPI(transfer)
        expect(response).toEqual(expectedResponse)
    })
})
