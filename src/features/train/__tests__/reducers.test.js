import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as trainActions from '../actions'
import { logoutAction } from '@features/login/actions'

import TrainServiceModel from '../models/TrainServiceModel'

describe('Tests for Travel reducers', () => {
    let item = null
    let items = []
    let store = {}

    beforeEach(() => {
        item = new TrainServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            company: 'Minha empresa',
            date: '2019-01-30T12:10:10.000Z',
            hourArrival: '2019-01-30T13:00:00.000Z',
            hourExit: '2019-01-30T18:00:00.000Z',
            luggage: 10,
            platform: 'Minha plataforma',
            seat: 'R20',
            stationArrival: 'Chegada',
            stationExit: 'Saída'
        })
        items = List.of(item)

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

    it('Should delete a travel object when delAction have been called', () => {
        const reducerStore = reducers(store, trainActions.delAction('5c52ebcd5fc7c9b1433ab704')).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a travel object when editAction have been called', () => {
        const reducerStore = reducers(store, trainActions.editAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill list and _listFilter when getListAction have been called', () => {
        const reducerStore = reducers(store, trainActions.getListAction(items)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new travel item when saveDataAction have been called', () => {
        const newItem = new TrainServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            company: 'Minha empresa',
            date: '2019-01-30T12:10:10.000Z',
            hourArrival: '2019-01-30T13:00:00.000Z',
            hourExit: '2019-01-30T18:00:00.000Z',
            luggage: 10,
            platform: 'Minha plataforma',
            seat: 'R20',
            stationArrival: 'Chegada',
            stationExit: 'Saída'
        })
        const reducerStore = reducers(store, trainActions.saveDataAction(newItem)).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists travel item when saveDataAction have been called', () => {
        const newItem = new TrainServiceModel({
            __v: 1,
            _id: '5c52ebcd5fc7c9b1433ab704',
            company: 'Minha empresa',
            date: '2019-01-30T12:10:10.000Z',
            hourArrival: '2019-01-30T13:00:00.000Z',
            hourExit: '2019-01-30T18:00:00.000Z',
            luggage: 10,
            platform: 'Minha plataforma',
            seat: 'R20',
            stationArrival: 'Chegada',
            stationExit: 'Saída'
        })
        const reducerStore = reducers(store, trainActions.saveDataAction(newItem)).toJS()
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
