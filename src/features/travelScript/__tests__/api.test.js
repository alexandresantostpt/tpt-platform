import moment from 'moment'

import moxios from 'moxios'

import { http } from '@http'

import * as travelScriptApi from '../api'

import TravelScriptModel from '../models/TravelScriptModel'

describe('Tests for TravelScript API', () => {
    const travel = {
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        citiesDestiny: ['Campinas', 'São Paulo'],
        clientCpf: '123.123.123-12',
        clientEmail: 'email@gmail.com',
        clientName: 'TPT EDIT',
        clients: [
            {
                __v: 0,
                cpf: '123.123.123-12',
                createdAt: '2019-03-01T12:35:34.965Z',
                email: 'email@gmail.com',
                id: '5c792716e6e6030f80b85732',
                name: 'TPT EDIT',
                updatedAt: '2019-03-01T12:35:34.965Z'
            }
        ],
        createdAt: '2019-01-31T12:36:29.463Z',
        travelEndDate: '2019-01-30T12:10:10.000Z',
        travelStartDate: '2019-02-05T17:10:10.000Z',
        updatedAt: '2019-01-31T12:36:29.463Z'
    }

    const service = {
        __v: 0,
        address: 'Teste DOIS',
        clients: ['5c792716e6e6030f80b85732'],
        confirmedBy: 'Teste',
        createdAt: '2019-03-07T21:52:59.347Z',
        dressCode: 'Casual',
        id: '5c52ebcd5fc7c9b1433ab705',
        peopleCount: 1,
        reserveDate: '2019-02-01T00:00:00.000Z',
        reserveHour: '2019-02-01T02:30:00.000Z',
        reserveNumber: 123,
        script: '5c819219650a3965a5d49243',
        scriptDate: '2019-02-01T00:00:00.000Z',
        type: 'RESTAURANT',
        updatedAt: '2019-03-08T12:38:21.680Z'
    }

    const date = {
        city: 'Campinas',
        date: moment('15-02-2019', 'DD-MM-YYYY').utc(false),
        services: [service]
    }

    const travelScript = new TravelScriptModel({
        __v: 0,
        _id: '1',
        createdAt: '2019-02-21T03:00:00.000Z',
        dates: [date],
        travel,
        updatedAt: '2019-02-21T03:00:00.000Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it.skip('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = travelScript
        const expectedResponse = new TravelScriptModel({
            __v: 0,
            _id: '1',
            createdAt: '2019-02-21T03:00:00.000Z',
            dates: [date],
            travel,
            updatedAt: '2019-02-21T03:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await travelScriptApi.getSingleAPI('5c52ebcd5fc7c9b1433ab704')
        expect(response).toEqual(expectedResponse)
    })
})
