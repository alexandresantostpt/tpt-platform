import moxios from 'moxios'

import { http } from '@http'

import * as hotelApi from '../api'

import HotelServiceModel from '../models/HotelServiceModel'

describe('Tests for Hotel API', () => {
    const hotel = new HotelServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        address: 'Rua endereço',
        checkInDate: '2019-03-01T00:00:00.000Z',
        checkInHour: '2019-03-01T19:00:00.000Z',
        checkOutDate: '2019-03-02T00:00:00.000Z',
        checkOutHour: '2019-03-02T19:00:00.000Z',
        createdAt: '2019-02-21T00:00:00.000Z',
        differences: 'Restarante Michelin no hotel',
        guestCount: '4',
        includedMeals: ['Café da manhã', 'Jantar'],
        name: 'Four seasons',
        roomType: 'Deluxe',
        script: '123',
        scriptDate: '2019-03-01T17:10:10.000Z',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = hotel
        const expectedResponse = new HotelServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            checkInDate: '2019-03-01T00:00:00.000Z',
            checkInHour: '2019-03-01T19:00:00.000Z',
            checkOutDate: '2019-03-02T00:00:00.000Z',
            checkOutHour: '2019-03-02T19:00:00.000Z',
            createdAt: '2019-02-21T00:00:00.000Z',
            differences: 'Restarante Michelin no hotel',
            guestCount: '4',
            includedMeals: ['Café da manhã', 'Jantar'],
            name: 'Four seasons',
            roomType: 'Deluxe',
            script: '123',
            scriptDate: '2019-03-01T17:10:10.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data } = await hotelApi.delAPI({ serviceId: '5c6c16bc793e3b4f622f7a9e' })
        expect(data).toEqual(expectedResponse)
    })

    it('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = hotel
        const expectedResponse = new HotelServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            checkInDate: '2019-03-01T00:00:00.000Z',
            checkInHour: '2019-03-01T19:00:00.000Z',
            checkOutDate: '2019-03-02T00:00:00.000Z',
            checkOutHour: '2019-03-02T19:00:00.000Z',
            createdAt: '2019-02-21T00:00:00.000Z',
            differences: 'Restarante Michelin no hotel',
            guestCount: '4',
            includedMeals: ['Café da manhã', 'Jantar'],
            name: 'Four seasons',
            roomType: 'Deluxe',
            script: '123',
            scriptDate: '2019-03-01T17:10:10.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await hotelApi.getSingleAPI('5c6c16bc793e3b4f622f7a9e')
        expect(response).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = hotel
        const expectedResponse = new HotelServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            checkInDate: '2019-03-01T00:00:00.000Z',
            checkInHour: '2019-03-01T19:00:00.000Z',
            checkOutDate: '2019-03-02T00:00:00.000Z',
            checkOutHour: '2019-03-02T19:00:00.000Z',
            createdAt: '2019-02-21T00:00:00.000Z',
            differences: 'Restarante Michelin no hotel',
            guestCount: '4',
            includedMeals: ['Café da manhã', 'Jantar'],
            name: 'Four seasons',
            roomType: 'Deluxe',
            script: '123',
            scriptDate: '2019-03-01T17:10:10.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await hotelApi.saveAPI({ service: hotel })
        expect(response).toEqual(expectedResponse)
    })
})
