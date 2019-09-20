import { actions } from '../constants'

import * as programmingActions from '../actions'

import { getAction } from '@utils/actions'

import ProgrammingServiceModel from '../models/ProgrammingServiceModel'

describe('Tests for Programming actions', () => {
    const programming = new ProgrammingServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        createdAt: '2019-02-21T00:00:00.000Z',
        describe: 'teste',
        script: '123',
        scriptDate: '2019-03-01T00:00:00.000Z',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })

    it('Dispatches delAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.PROGRAMMING_DEL)

        expect(programmingActions.delAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getSingleAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.PROGRAMMING_GET_SINGLE)

        expect(programmingActions.getSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.PROGRAMMING_REQUEST_DEL)

        expect(programmingActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetSingleAction with the correct action and payload', () => {
        const payload = '5c6c16bc793e3b4f622f7a9e'
        const type = getAction(actions.PROGRAMMING_REQUEST_GET_SINGLE)

        expect(programmingActions.requestGetSingleAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = programming
        const type = getAction(actions.PROGRAMMING_REQUEST_SAVE_DATA)

        expect(programmingActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = programming
        const type = getAction(actions.PROGRAMMING_SAVE_DATA)

        expect(programmingActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
