import moxios from 'moxios'

import { http } from '@http'
import { List } from 'immutable'

import * as travelApi from '../api'

import TravelModel from '../TravelModel'

describe('Tests for Travel API', () => {
    const travel = new TravelModel({
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
        status: null,
        travelEndDate: '2019-01-30T12:10:10.000Z',
        travelStartDate: '2019-02-05T17:10:10.000Z',
        updatedAt: '2019-01-31T12:36:29.463Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = travel
        const expectedResponse = new TravelModel({
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
            status: null,
            travelEndDate: '2019-01-30T12:10:10.000Z',
            travelStartDate: '2019-02-05T17:10:10.000Z',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data, request } = await travelApi.delAPI('5c52ebcd5fc7c9b1433ab704')
        expect(data).toEqual(expectedResponse)
        expect(request.url).toContain('5c52ebcd5fc7c9b1433ab704')
    })

    it('Should call get when editAPI has been called', async () => {
        const responseMocked = travel
        const expectedResponse = new TravelModel({
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
            status: null,
            travelEndDate: '2019-01-30T12:10:10.000Z',
            travelStartDate: '2019-02-05T17:10:10.000Z',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await travelApi.editAPI('5c52ebcd5fc7c9b1433ab704')
        expect(response).toEqual(expectedResponse)
    })

    it('Should call get when getAllAPI has been called', async () => {
        const responseMocked = [travel]
        const expectedResponse = List.of(
            new TravelModel({
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
                status: null,
                travelEndDate: '2019-01-30T12:10:10.000Z',
                travelStartDate: '2019-02-05T17:10:10.000Z',
                updatedAt: '2019-01-31T12:36:29.463Z'
            })
        )

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await travelApi.getAllAPI()
        expect(response).toEqual(expectedResponse)
    })

    it('Should call post when saveAPI has been called', async () => {
        const responseMocked = travel
        const expectedResponse = new TravelModel({
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
            status: null,
            travelEndDate: '2019-01-30T12:10:10.000Z',
            travelStartDate: '2019-02-05T17:10:10.000Z',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await travelApi.saveAPI(travel)
        expect(response).toEqual(expectedResponse)
    })
})
