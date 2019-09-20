import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as carRentalActions from '../actions'
import { logoutAction } from '@features/login/actions'

import CarRentalServiceModel from '../models/CarRentalServiceModel'

describe('Tests for CarRental reducers', () => {
    let item = null
    let store = {}

    beforeEach(() => {
        item = new CarRentalServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            addressDevolution: 'teste',
            addressRetire: 'teste',
            agency: 'teste',
            createdAt: '2019-01-31T12:36:29.463Z',
            devolutionDate: '2019-01-31T12:36:29.463Z',
            devolutionName: 'teste',
            documents: 'teste',
            hourDevolution: '12:30',
            hourRetire: '10:00',
            isIncluded: 'teste',
            isNotIncluded: 'teste',
            model: 'teste',
            operationHourEnd: '8:00',
            operationHourStart: '22:00',
            phoneNumberDevolution: '11 1234-5678',
            phoneNumberRetire: '11 1234-5678',
            retireDate: '2019-01-31T12:36:29.463Z',
            retireName: 'teste',
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

    it('Should delete a carRental object when delAction have been called', () => {
        const reducerStore = reducers(store, carRentalActions.delAction()).toJS()
        const expectedStore = {
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a carRental object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, carRentalActions.getSingleAction(item)).toJS()
        const expectedStore = {
            obj: item
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new carRental item when saveDataAction have been called', () => {
        const reducerStore = reducers(store, carRentalActions.saveDataAction()).toJS()
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
