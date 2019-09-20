import moment from 'moment'

import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as travelScriptActions from '../actions'
import { logoutAction } from '@features/login/actions'

import TravelModel from '@features/travel/TravelModel'
import TravelScriptModel from '../models/TravelScriptModel'

describe('Tests for Travel reducers', () => {
    let item = null
    let date = null
    let service = null
    let store = {}

    beforeEach(() => {
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
            travelEndDate: '2019-01-30T12:10:10.000Z',
            travelStartDate: '2019-02-05T17:10:10.000Z',
            updatedAt: '2019-01-31T12:36:29.463Z'
        })

        service = {
            __v: 1,
            address: 'Teste DOIS',
            clients: ['5c792716e6e6030f80b85732'],
            confirmedBy: 'Teste',
            createdAt: '2019-03-07T21:52:59.347Z',
            dressCode: 'Casual',
            id: '5c8192bb650a39eb9dd49249',
            peopleCount: 1,
            reserveDate: '2019-02-01T00:00:00.000Z',
            reserveHour: '2019-02-01T02:30:00.000Z',
            reserveNumber: 123,
            script: '5c819219650a3965a5d49243',
            scriptDate: '2019-02-01T00:00:00.000Z',
            type: 'RESTAURANT',
            updatedAt: '2019-03-08T12:38:21.680Z'
        }

        date = {
            city: 'Campinas',
            date: moment('15-02-2019', 'DD-MM-YYYY').utc(false),
            services: [service]
        }

        item = new TravelScriptModel({
            __v: '1.0',
            _id: '1',
            createdAt: '2019-02-21',
            dates: [date],
            travel,
            updatedAt: '2019-02-21'
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

    it('Should get a travelScript object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, travelScriptActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
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
