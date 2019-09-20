import { actions } from '../constants'

import * as travelActions from '../actions'

import { getAction } from '@utils/actions'

import TravelModel from '../TravelModel'

describe('Tests for Travel actions', () => {
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

    it('Dispatches delAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_DEL)

        expect(travelActions.delAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches editAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_EDIT)

        expect(travelActions.editAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getListAction with the correct action and payload', () => {
        const payload = [travel]
        const type = getAction(actions.TRAVEL_GET_LIST)

        expect(travelActions.getListAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_REQUEST_DEL)

        expect(travelActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestEditAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.TRAVEL_REQUEST_EDIT)

        expect(travelActions.requestEditAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetListAction with the correct action and payload', () => {
        const type = getAction(actions.TRAVEL_REQUEST_GET_LIST)

        expect(travelActions.requestGetListAction()).toEqual({ type })
    })

    it('Dispatches requestResetAction with the correct action', () => {
        const type = getAction(actions.TRAVEL_REQUEST_RESET)

        expect(travelActions.requestResetAction()).toEqual({ type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = travel
        const type = getAction(actions.TRAVEL_REQUEST_SAVE_DATA)

        expect(travelActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches requestSearchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.TRAVEL_REQUEST_SEARCH)

        expect(travelActions.requestSearchAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches requestSearchCityOurApiAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.TRAVEL_REQUEST_SEARCH_CITY_OUR_API)

        expect(travelActions.requestSearchCityOurApiAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches requestSearchClientsAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.TRAVEL_REQUEST_SEARCH_CLIENTS)

        expect(travelActions.requestSearchClientsAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches resetAction with the correct action', () => {
        const type = getAction(actions.TRAVEL_RESET)

        expect(travelActions.resetAction()).toEqual({ type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = travel
        const type = getAction(actions.TRAVEL_SAVE_DATA)

        expect(travelActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches searchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.TRAVEL_SEARCH)

        expect(travelActions.searchAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches searchCityOurApiAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.TRAVEL_SEARCH_CITY_OUR_API)

        expect(travelActions.searchCityOurApiAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches searchClientsAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.TRAVEL_SEARCH_CLIENTS)

        expect(travelActions.searchClientsAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
