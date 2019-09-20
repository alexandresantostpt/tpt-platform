import { actions } from '../constants'

import * as consultantActions from '../actions'

import { getAction } from '@utils/actions'

import ConsultantModel from '../ConsultantModel'

describe('Tests for Consultant actions', () => {
    const consultant = new ConsultantModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        active: true,
        agency: '5c52ebcd5fc7c9b1433ab704',
        blocked: true,
        cellPhone: '019998523621',
        cpf: '123.123.123-23',
        createdAt: '2019-03-01T12:35:34.965Z',
        email: 'test@email.com',
        name: 'Name',
        phone: '1932465789',
        role: 'ADMIN',
        updatedAt: '2019-03-01T12:35:34.965Z'
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CONSULTANT_GET_SINGLE)

        expect(consultantActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getListAction with the correct action and payload', () => {
        const payload = [consultant]
        const type = getAction(actions.CONSULTANT_GET_LIST)

        expect(consultantActions.getListAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c52ebcd5fc7c949223ab705'
        const type = getAction(actions.CONSULTANT_REQUEST_GET_SINGLE)

        expect(consultantActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetListAction with the correct action and payload', () => {
        const type = getAction(actions.CONSULTANT_REQUEST_GET_LIST)

        expect(consultantActions.requestGetListAction()).toEqual({ type })
    })

    it('Dispatches requestResetAction with the correct action', () => {
        const type = getAction(actions.CONSULTANT_REQUEST_RESET)

        expect(consultantActions.requestResetAction()).toEqual({ type })
    })

    it('Dispatches requestSearchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.CONSULTANT_REQUEST_SEARCH)

        expect(consultantActions.requestSearchAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = consultant
        const type = getAction(actions.CONSULTANT_REQUEST_SAVE_DATA)

        expect(consultantActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches resetAction with the correct action', () => {
        const type = getAction(actions.CONSULTANT_RESET)

        expect(consultantActions.resetAction()).toEqual({ type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = consultant
        const type = getAction(actions.CONSULTANT_SAVE_DATA)

        expect(consultantActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches searchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.CONSULTANT_SEARCH)

        expect(consultantActions.searchAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
