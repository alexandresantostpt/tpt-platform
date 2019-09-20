import moxios from 'moxios'

import { http } from '@http'

import * as carRentalApi from '../api'

import CarRentalServiceModel from '../models/CarRentalServiceModel'

describe('Tests for CarRental API', () => {
    const devolution = {
        address: 'Test',
        date: '2019-02-01T02:00:00.000Z',
        hour: '2019-02-01T02:00:00.000Z',
        name: 'Test',
        operationHourEnd: '2019-02-01T18:00:00.000Z',
        operationHourStart: '2019-02-01T09:00:00.000Z',
        phoneNumber: '1234-1234'
    }

    const retire = {
        address: 'Test',
        date: '2019-02-01T02:00:00.000Z',
        hour: '2019-02-01T02:00:00.000Z',
        name: 'Test',
        operationHourEnd: '2019-02-01T18:00:00.000Z',
        operationHourStart: '2019-02-01T09:00:00.000Z',
        phoneNumber: '1234-1234'
    }

    const carRental = new CarRentalServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        addressDevolution: 'teste',
        addressRetire: 'teste',
        agency: 'teste',
        carModel: 'TST',
        createdAt: '2019-01-31T12:36:29.463Z',
        devolution: devolution,
        devolutionDate: '2019-01-31T12:36:29.463Z',
        devolutionName: 'teste',
        hourDevolution: '12:30',
        hourRetire: '10:00',
        isIncluded: 'teste',
        name: 'TST',
        operationHourEnd: '8:00',
        operationHourStart: '22:00',
        passengerResponsible: '5c757fb2f1a4a01bbfe7b21b',
        phoneNumberDevolution: '11 1234-5678',
        phoneNumberRetire: '11 1234-5678',
        requiredDocuments: {
            cnh: true
        },
        retire: retire,
        retireDate: '2019-01-31T12:36:29.463Z',
        retireName: 'teste',
        script: '5c757fb2f1a4a01bbfe7b21d',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it.skip('Should call delete when delAPI has been called', async () => {
        const responseMocked = carRental

        const expectedResponse = new CarRentalServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            addressDevolution: 'teste',
            addressRetire: 'teste',
            agency: 'teste',
            carModel: 'TST',
            createdAt: '2019-01-31T12:36:29.463Z',
            devolution: devolution,
            devolutionDate: '2019-01-31T12:36:29.463Z',
            devolutionName: 'teste',
            hourDevolution: '12:30',
            hourRetire: '10:00',
            isIncluded: 'teste',
            name: 'TST',
            operationHourEnd: '8:00',
            operationHourStart: '22:00',
            passengerResponsible: '5c757fb2f1a4a01bbfe7b21b',
            phoneNumberDevolution: '11 1234-5678',
            phoneNumberRetire: '11 1234-5678',
            requiredDocuments: {
                cnh: true
            },
            retire: retire,
            retireDate: '2019-01-31T12:36:29.463Z',
            retireName: 'teste',
            script: '5c757fb2f1a4a01bbfe7b21d',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data, request } = await carRentalApi.delAPI('5c52ebcd5fc7c9b1433ab704')
        expect(data).toEqual(expectedResponse)
        expect(request.url).toContain('5c52ebcd5fc7c9b1433ab704')
    })

    it.skip('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = carRental
        const expectedResponse = new CarRentalServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            addressDevolution: 'teste',
            addressRetire: 'teste',
            agency: 'teste',
            carModel: 'TST',
            createdAt: '2019-01-31T12:36:29.463Z',
            devolution: devolution,
            devolutionDate: '2019-01-31T12:36:29.463Z',
            devolutionName: 'teste',
            hourDevolution: '12:30',
            hourRetire: '10:00',
            isIncluded: 'teste',
            name: 'TST',
            operationHourEnd: '8:00',
            operationHourStart: '22:00',
            passengerResponsible: '5c757fb2f1a4a01bbfe7b21b',
            phoneNumberDevolution: '11 1234-5678',
            phoneNumberRetire: '11 1234-5678',
            requiredDocuments: {
                cnh: true
            },
            retire: retire,
            retireDate: '2019-01-31T12:36:29.463Z',
            retireName: 'teste',
            script: '5c757fb2f1a4a01bbfe7b21d',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await carRentalApi.getSingleAPI('5c52ebcd5fc7c9b1433ab704')
        expect(response).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = carRental
        const expectedResponse = new CarRentalServiceModel({
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

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await carRentalApi.saveAPI(carRental)
        expect(response).toEqual(expectedResponse)
    })
})
