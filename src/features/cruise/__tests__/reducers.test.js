import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as cruiseActions from '../actions'
import { logoutAction } from '@features/login/actions'

import CruiseServiceModel from '../models/CruiseServiceModel'

describe('Tests for Cruise reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        item = new CruiseServiceModel({
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

    it('Should delete a cruise object when delAction have been called', () => {
        const reducerStore = reducers(store, cruiseActions.delAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a cruise object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, cruiseActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new cruise item when saveDataAction have been called', () => {
        const reducerStore = reducers(store, cruiseActions.saveDataAction()).toJS()
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
