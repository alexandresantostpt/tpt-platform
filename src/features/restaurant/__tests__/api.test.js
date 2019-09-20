import moxios from 'moxios'

import { http } from '@http'

import * as restaurantApi from '../api'

import RestaurantServiceModel from '../models/RestaurantServiceModel'

describe('Tests for Restaurant API', () => {
    const restaurant = new RestaurantServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        address: 'Rua endereço',
        clients: ['123', '132'],
        confirmedBy: 'Alguém',
        createdAt: '2019-02-21T00:00:00.000Z',
        dressCode: 'ABC-D',
        name: 'Nome do restaurante',
        peopleCount: '4',
        phoneNumber: '(99)99999-9999',
        reserveDate: '2019-03-01T00:00:00.000Z',
        reserveHour: '2019-03-01T18:00:00.000Z',
        reserveNumber: '123',
        script: '123',
        scriptDate: '2019-03-01T00:00:00.000Z',
        site: 'restaurante.com.br',
        type: 'RESTAURANT',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = restaurant
        const expectedResponse = new RestaurantServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            clients: ['123', '132'],
            confirmedBy: 'Alguém',
            createdAt: '2019-02-21T00:00:00.000Z',
            dressCode: 'ABC-D',
            name: 'Nome do restaurante',
            peopleCount: '4',
            phoneNumber: '(99)99999-9999',
            reserveDate: '2019-03-01T00:00:00.000Z',
            reserveHour: '2019-03-01T18:00:00.000Z',
            reserveNumber: '123',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            site: 'restaurante.com.br',
            type: 'RESTAURANT',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data } = await restaurantApi.delAPI('5c6c16bc793e3b4f622f7a9e')
        expect(data).toEqual(expectedResponse)
    })

    it('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = restaurant
        const expectedResponse = new RestaurantServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            clients: ['123', '132'],
            confirmedBy: 'Alguém',
            createdAt: '2019-02-21T00:00:00.000Z',
            dressCode: 'ABC-D',
            name: 'Nome do restaurante',
            peopleCount: '4',
            reserveDate: '2019-03-01T00:00:00.000Z',
            reserveHour: '2019-03-01T18:00:00.000Z',
            reserveNumber: '123',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            site: 'restaurante.com.br',
            type: 'RESTAURANT',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await restaurantApi.getSingleAPI('5c6c16bc793e3b4f622f7a9e')
        expect(response).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = restaurant
        const expectedResponse = new RestaurantServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            clients: ['123', '132'],
            confirmedBy: 'Alguém',
            createdAt: '2019-02-21T00:00:00.000Z',
            dressCode: 'ABC-D',
            name: 'Nome do restaurante',
            peopleCount: '4',
            phoneNumber: '(99)99999-9999',
            reserveDate: '2019-03-01T00:00:00.000Z',
            reserveHour: '2019-03-01T18:00:00.000Z',
            reserveNumber: '123',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            site: 'restaurante.com.br',
            type: 'RESTAURANT',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await restaurantApi.saveAPI(restaurant)
        expect(response).toEqual(expectedResponse)
    })
})
