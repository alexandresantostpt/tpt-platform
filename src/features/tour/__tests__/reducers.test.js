import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as tourActions from '../actions'
import { logoutAction } from '@features/login/actions'

import TourServiceModel from '../models/TourServiceModel'

describe('Tests for TourModel reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        item = new TourServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            createdAt: '2019-01-31T12:36:29.463Z',
            departureTime: '18:00',
            guideOrDriver: 'Guide',
            includedMeals: ['Café da manhã', 'Almoço'],
            language: 'Português',
            localOperator: 'Seu João',
            meanOfTransportation: 'Carro',
            peopleQuantity: '2',
            title: 'Título do passeio',
            tourDate: '2019-01-31T12:36:29.463Z',
            tourDescription: 'Descrição do passeio',
            tourDuration: '2 horas',
            tourType: 'Privativo',
            updatedAt: '2019-01-31T12:36:29.463Z'
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

    it('Should delete a tour object when delAction have been called', () => {
        const reducerStore = reducers(store, tourActions.delAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a tour object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, tourActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new tour item when saveDataAction have been called', () => {
        const reducerStore = reducers(store, tourActions.saveDataAction()).toJS()
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
