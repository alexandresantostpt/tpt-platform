import { actions } from '../constants'

import * as clientActions from '../actions'

import { getAction } from '@utils/actions'

import ClientModel from '../ClientModel'

describe('Tests for Client actions', () => {
    const client = new ClientModel({
        __v: 0,
        _id: '5caf68a3267eb5d14c0734dc',
        active: true,
        blocked: false,
        cpf: '211.658.050-14',
        createdAt: '2019-04-11T16:17:39.018Z',
        deleted: false,
        email: 'test@email.com',
        name: 'Name',
        updatedAt: '2019-04-11T16:17:39.018Z'
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5caf68a3267eb5d14c0734dc'
        const type = getAction(actions.CLIENT_GET_SINGLE)

        expect(clientActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getListAction with the correct action and payload', () => {
        const payload = [client]
        const type = getAction(actions.CLIENT_GET_LIST)

        expect(clientActions.getListAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5caf68a3267eb5d14c0734dc'
        const type = getAction(actions.CLIENT_REQUEST_GET_SINGLE)

        expect(clientActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetListAction with the correct action and payload', () => {
        const type = getAction(actions.CLIENT_REQUEST_GET_LIST)

        expect(clientActions.requestGetListAction()).toEqual({ type })
    })

    it('Dispatches requestResetAction with the correct action', () => {
        const type = getAction(actions.CLIENT_REQUEST_RESET)

        expect(clientActions.requestResetAction()).toEqual({ type })
    })

    it('Dispatches requestSearchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.CLIENT_REQUEST_SEARCH)

        expect(clientActions.requestSearchAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = client
        const type = getAction(actions.CLIENT_REQUEST_SAVE_DATA)

        expect(clientActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches resetAction with the correct action', () => {
        const type = getAction(actions.CLIENT_RESET)

        expect(clientActions.resetAction()).toEqual({ type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = client
        const type = getAction(actions.CLIENT_SAVE_DATA)

        expect(clientActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches searchAction with the correct action and payload', () => {
        const mockValue = 'Testing'
        const type = getAction(actions.CLIENT_SEARCH)

        expect(clientActions.searchAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
