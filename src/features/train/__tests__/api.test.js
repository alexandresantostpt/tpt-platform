import moxios from 'moxios'

import { http } from '@http'

import * as trainApi from '../api'

import TrainServiceModel from '../models/TrainServiceModel'

describe('Tests for Train API', () => {
    const train = new TrainServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        companyName: 'Minha empresa',
        createdAt: '2019-01-31T12:36:29.463Z',
        dateFrom: '2019-01-30T12:10:10.000Z',
        hourEstimatedArrival: '2019-01-30T13:00:00.000Z',
        hourFrom: '2019-01-30T18:00:00.000Z',
        luggage: 10,
        platform: 'Minha plataforma',
        script: '123',
        seat: 'R20',
        stationDestiny: 'Chegada',
        stationFrom: 'Saída',
        updatedAt: '2019-01-31T12:36:29.463Z',
        wagon: '123'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = train
        const expectedResponse = new TrainServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            companyName: 'Minha empresa',
            createdAt: '2019-01-31T12:36:29.463Z',
            dateFrom: '2019-01-30T12:10:10.000Z',
            hourEstimatedArrival: '2019-01-30T13:00:00.000Z',
            hourFrom: '2019-01-30T18:00:00.000Z',
            luggage: 10,
            platform: 'Minha plataforma',
            script: '123',
            seat: 'R20',
            stationDestiny: 'Chegada',
            stationFrom: 'Saída',
            updatedAt: '2019-01-31T12:36:29.463Z',
            wagon: '123'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data } = await trainApi.delAPI('5c52ebcd5fc7c9b1433ab704')
        expect(data).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = train
        const expectedResponse = new TrainServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            companyName: 'Minha empresa',
            createdAt: '2019-01-31T12:36:29.463Z',
            dateFrom: '2019-01-30T12:10:10.000Z',
            hourEstimatedArrival: '2019-01-30T13:00:00.000Z',
            hourFrom: '2019-01-30T18:00:00.000Z',
            luggage: 10,
            platform: 'Minha plataforma',
            script: '123',
            seat: 'R20',
            stationDestiny: 'Chegada',
            stationFrom: 'Saída',
            updatedAt: '2019-01-31T12:36:29.463Z',
            wagon: '123'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await trainApi.saveAPI(train)
        expect(response).toEqual(expectedResponse)
    })
})
