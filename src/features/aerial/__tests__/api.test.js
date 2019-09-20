import moxios from 'moxios'

import { http } from '@http'

import * as aerialApi from '../api'

import AerialServiceModel from '../models/AerialServiceModel'
import JourneyModel from '../models/JourneyModel'

describe('Tests for Aerial API', () => {
    const journey = new JourneyModel({
        airportDestiny: 'teste1',
        airportExit: 'teste1',
        cityDestiny: 'teste1',
        cityExit: 'teste1',
        companyName: 'teste',
        dateExit: '2019-03-22T15:07:17.399Z',
        flightNumber: 123,
        from: { airport: 'teste', city: 'teste', date: '2019-03-22T15:07:17.399Z', hour: '2019-03-22T15:07:17.399Z' },
        hourArrival: '2019-03-22T15:07:17.399Z',
        hourExit: '2019-03-22T15:07:17.399Z',
        passengers: [{ _id: '5c8a82a201ef650d68c4a6db', client: '5c7a69db283f8a18ed32a7fd' }],
        to: { airport: 'teste', city: 'teste', hour: '2019-03-14T20:00:00.361Z' }
    })

    const aerial = new AerialServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        createdAt: '2019-03-14T16:34:42.827Z',
        journeys: [journey],
        script: '5c8a547c01ef65c1e2c4a67b',
        scriptDate: '2019-03-14T00:00:00.000Z',
        updatedAt: '2019-03-14T16:34:42.827Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it.skip('Should call delete when delAPI has been called', async () => {
        const responseMocked = aerial
        const expectedResponse = new AerialServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-03-14T16:34:42.827Z',
            journeys: [journey],
            script: '5c8a547c01ef65c1e2c4a67b',
            scriptDate: '2019-03-14T00:00:00.000Z',
            updatedAt: '2019-03-14T16:34:42.827Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data, request } = await aerialApi.delAPI('5c52ebcd5fc7c9b1433ab704')
        expect(data).toEqual(expectedResponse)
        expect(request.url).toContain('5c52ebcd5fc7c9b1433ab704')
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = aerial
        const expectedResponse = new AerialServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-03-14T16:34:42.827Z',
            journeys: [journey],
            script: '5c8a547c01ef65c1e2c4a67b',
            scriptDate: '2019-03-14T00:00:00.000Z',
            type: 'AERIAL',
            updatedAt: '2019-03-14T16:34:42.827Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await aerialApi.saveAPI(aerial)
        expect(response).toEqual(expectedResponse)
    })
})
