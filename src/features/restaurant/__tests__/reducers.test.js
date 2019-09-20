import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as restaurantActions from '../actions'
import { logoutAction } from '@features/login/actions'

import RestaurantServiceModel from '../models/RestaurantServiceModel'

describe('Tests for Restaurant reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        item = new RestaurantServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            clients: ['123', '123'],
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

    it('Should delete a restaurant object when delAction have been called', () => {
        const reducerStore = reducers(store, restaurantActions.delAction('5c6c16bc793e3b4f622f7a9e')).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a restaurant object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, restaurantActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new restaurant item when saveDataAction have been called', () => {
        const newItem = new RestaurantServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            clients: ['123', '123'],
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
        const reducerStore = reducers(store, restaurantActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists restaurant item when saveDataAction have been called', () => {
        const newItem = new RestaurantServiceModel({
            __v: 1,
            _id: '5c6c16bc793e3b4f622f7a9e',
            address: 'Rua endereço',
            clients: ['123', '123'],
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
        const reducerStore = reducers(store, restaurantActions.saveDataAction(newItem)).toJS()
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
