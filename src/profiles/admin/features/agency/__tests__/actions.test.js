import { actions } from '../constants'

import * as agencyActions from '../actions'

import { getAction } from '@utils/actions'

import AgencyModel from '../AgencyModel'

describe('Tests for Agency actions', () => {
    const agency = new AgencyModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        appTheme: '#FFFFFF',
        cnpj: '12345678909876',
        createdAt: '2019-03-01T12:35:34.965Z',
        logoTipo: 'logoTipo.png',
        phoneContact: '191234566',
        phoneEmergency: '1932465789',
        socialName: 'Test',
        updatedAt: '2019-03-01T12:35:34.965Z'
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.AGENCY_GET_SINGLE)

        expect(agencyActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getListAction with the correct action and payload', () => {
        const payload = [agency]
        const type = getAction(actions.AGENCY_GET_LIST)

        expect(agencyActions.getListAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.AGENCY_REQUEST_GET_SINGLE)

        expect(agencyActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetListAction with the correct action and payload', () => {
        const type = getAction(actions.AGENCY_REQUEST_GET_LIST)

        expect(agencyActions.requestGetListAction()).toEqual({ type })
    })

    it('Dispatches requestResetAction with the correct action', () => {
        const type = getAction(actions.AGENCY_REQUEST_RESET)

        expect(agencyActions.requestResetAction()).toEqual({ type })
    })

    it('Dispatches requestSearchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.AGENCY_REQUEST_SEARCH)

        expect(agencyActions.requestSearchAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = agency
        const type = getAction(actions.AGENCY_REQUEST_SAVE_DATA)

        expect(agencyActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches resetAction with the correct action', () => {
        const type = getAction(actions.AGENCY_RESET)

        expect(agencyActions.resetAction()).toEqual({ type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = agency
        const type = getAction(actions.AGENCY_SAVE_DATA)

        expect(agencyActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches searchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.AGENCY_SEARCH)

        expect(agencyActions.searchAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
