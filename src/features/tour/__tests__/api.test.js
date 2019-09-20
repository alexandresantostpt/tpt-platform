import moxios from 'moxios'

import { http } from '@http'

import * as tourApi from '../api'

import TourServiceModel from '../models/TourServiceModel'

describe('Tests for Tour API', () => {
    const tourModel = new TourServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        createdAt: '2019-01-31T12:36:29.463Z',
        departureTime: '18:00',
        describe: 'Test',
        duration: '2019-01-31T12:36:29.463Z',
        guideOrDriver: 'Guide',
        includedMeals: ['Café da manhã', 'Almoço'],
        language: 'Português',
        localOperator: 'Seu João',
        meanOfTransportation: 'Carro',
        outDate: '2019-03-22T13:50:44.018Z',
        outHour: '2019-03-22T13:50:44.018Z',
        passenger: ['5c757fb2f1a4a01bbfe7b21b'],
        peopleCount: '1',
        script: '5c757fb2f1a4a01bbfe7b21c',
        scriptDate: '2019-02-01T02:00:00.000Z',
        title: 'Título do passeio',
        tourType: 'Privativo',
        transferType: '',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = tourModel
        const expectedResponse = new TourServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-01-31T12:36:29.463Z',
            departureTime: '18:00',
            describe: 'Test',
            duration: '2019-01-31T12:36:29.463Z',
            guideOrDriver: 'Guide',
            includedMeals: ['Café da manhã', 'Almoço'],
            language: 'Português',
            localOperator: 'Seu João',
            meanOfTransportation: 'Carro',
            outDate: '2019-03-22T13:50:44.018Z',
            outHour: '2019-03-22T13:50:44.018Z',
            passenger: ['5c757fb2f1a4a01bbfe7b21b'],
            peopleCount: '1',
            script: '5c757fb2f1a4a01bbfe7b21c',
            scriptDate: '2019-02-01T02:00:00.000Z',
            title: 'Título do passeio',
            tourType: 'Privativo',
            transferType: '',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data } = await tourApi.delAPI('5c52ebcd5fc7c9b1433ab704')
        expect(data).toEqual(expectedResponse)
    })

    it('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = tourModel
        const expectedResponse = new TourServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-01-31T12:36:29.463Z',
            departureTime: '18:00',
            describe: 'Test',
            duration: '2019-01-31T12:36:29.463Z',
            guideOrDriver: 'Guide',
            includedMeals: ['Café da manhã', 'Almoço'],
            language: 'Português',
            localOperator: 'Seu João',
            meanOfTransportation: 'Carro',
            outDate: '2019-03-22T13:50:44.018Z',
            outHour: '2019-03-22T13:50:44.018Z',
            passenger: ['5c757fb2f1a4a01bbfe7b21b'],
            peopleCount: '1',
            script: '5c757fb2f1a4a01bbfe7b21c',
            scriptDate: '2019-02-01T02:00:00.000Z',
            title: 'Título do passeio',
            tourType: 'Privativo',
            transferType: '',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await tourApi.getSingleAPI('5c52ebcd5fc7c9b1433ab704')
        expect(response).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = tourModel
        const expectedResponse = new TourServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-01-31T12:36:29.463Z',
            departureTime: '18:00',
            describe: 'Test',
            duration: '2019-01-31T12:36:29.463Z',
            guideOrDriver: 'Guide',
            includedMeals: ['Café da manhã', 'Almoço'],
            language: 'Português',
            localOperator: 'Seu João',
            meanOfTransportation: 'Carro',
            outDate: '2019-03-22T13:50:44.018Z',
            outHour: '2019-03-22T13:50:44.018Z',
            passenger: ['5c757fb2f1a4a01bbfe7b21b'],
            peopleCount: '1',
            script: '5c757fb2f1a4a01bbfe7b21c',
            scriptDate: '2019-02-01T02:00:00.000Z',
            title: 'Título do passeio',
            tourType: 'Privativo',
            transferType: '',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await tourApi.saveAPI(tourModel)
        expect(response).toEqual(expectedResponse)
    })
})
