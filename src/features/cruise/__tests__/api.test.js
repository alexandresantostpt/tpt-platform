import moxios from 'moxios'

import { http } from '@http'

import * as cruiseApi from '../api'

import CruiseServiceModel from '../models/CruiseServiceModel'

describe('Tests for Tour API', () => {
    const cruiseModel = new CruiseServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        boarding: {
            date: '2019-03-12T00:00:00.000Z',
            hour: '2019-03-12T20:00:00.458Z',
            point: 'Test'
        },
        cabinNumber: 123145,
        cabinType: 'Test',
        category: 'Test',
        createdAt: '2019-01-31T12:36:29.463Z',
        image: null,
        landing: {
            date: '2019-03-12T00:00:00.000Z',
            hour: '2019-03-12T20:00:00.458Z',
            point: 'Test'
        },
        observation: 'Observation',
        reserveNumber: 123456,
        script: '5c52ebcd5fc7c9b1433ab704',
        shipName: 'Princess Consuela',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = cruiseModel
        const expectedResponse = new CruiseServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            boarding: {
                date: '2019-03-12T00:00:00.000Z',
                hour: '2019-03-12T20:00:00.458Z',
                point: 'Test'
            },
            cabinNumber: 123145,
            cabinType: 'Test',
            category: 'Test',
            createdAt: '2019-01-31T12:36:29.463Z',
            image: null,
            landing: {
                date: '2019-03-12T00:00:00.000Z',
                hour: '2019-03-12T20:00:00.458Z',
                point: 'Test'
            },
            observation: 'Observation',
            reserveNumber: 123456,
            script: '5c52ebcd5fc7c9b1433ab704',
            shipName: 'Princess Consuela',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data } = await cruiseApi.delAPI('5c52ebcd5fc7c9b1433ab704')
        expect(data).toEqual(expectedResponse)
    })

    it('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = cruiseModel
        const expectedResponse = new CruiseServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            boarding: {
                date: '2019-03-12T00:00:00.000Z',
                hour: '2019-03-12T20:00:00.458Z',
                point: 'Test'
            },
            cabinNumber: 123145,
            cabinType: 'Test',
            category: 'Test',
            createdAt: '2019-01-31T12:36:29.463Z',
            image: null,
            landing: {
                date: '2019-03-12T00:00:00.000Z',
                hour: '2019-03-12T20:00:00.458Z',
                point: 'Test'
            },
            observation: 'Observation',
            reserveNumber: 123456,
            script: '5c52ebcd5fc7c9b1433ab704',
            shipName: 'Princess Consuela',
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

        const response = await cruiseApi.getSingleAPI('5c52ebcd5fc7c9b1433ab704')
        expect(response).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = cruiseModel
        const expectedResponse = new CruiseServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            boarding: {
                date: '2019-03-12T00:00:00.000Z',
                hour: '2019-03-12T20:00:00.458Z',
                point: 'Test'
            },
            cabinNumber: 123145,
            cabinType: 'Test',
            category: 'Test',
            cruiseName: 'Test',
            image: null,
            landing: {
                date: '2019-03-12T00:00:00.000Z',
                hour: '2019-03-12T20:00:00.458Z',
                point: 'Test'
            },
            observation: 'Observation',
            reserveNumber: 123456,
            script: '5c52ebcd5fc7c9b1433ab704',
            shipName: 'Princess Consuela'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await cruiseApi.saveAPI(cruiseModel)
        expect(response).toEqual(expectedResponse)
    })
})
