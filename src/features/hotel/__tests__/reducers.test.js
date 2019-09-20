import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as hotelActions from '../actions'
import { logoutAction } from '@features/login/actions'

import HotelServiceModel from '../models/HotelServiceModel'

describe('Tests for Hotel reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        item = new HotelServiceModel({
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

        store = Record({
            obj: null
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should delete a hotel object when delAction have been called', () => {
        const reducerStore = reducers(store, hotelActions.delAction('5c6c16bc793e3b4f622f7a9e')).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a hotel object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, hotelActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new hotel item when saveDataAction have been called', () => {
        const newItem = new HotelServiceModel({
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
        const reducerStore = reducers(store, hotelActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists hotel item when saveDataAction have been called', () => {
        const newItem = new HotelServiceModel({
            __v: 1,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço UPDATED',
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
        const reducerStore = reducers(store, hotelActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, logoutAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})
