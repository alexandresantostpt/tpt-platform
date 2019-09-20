import { actions } from '../constants'

import * as taskActions from '../actions'

import { getAction } from '@utils/actions'

describe('Tests for Tasks actions', () => {
    const task = {
        __v: 28,
        _id: '5c9e31f8c57b4917b426e334',
        createdAt: '2019-03-29T14:55:52.764Z',
        describe: 'teste 123',
        done: false,
        updatedAt: '2019-03-29T14:55:52.764Z',
        user: '5c9dfb65d1cf42bd5fa66b3d'
    }

    it('Dispatches delAction with the correct action and payload', () => {
        const payload = '5c9e31f8c57b4917b426e334'
        const type = getAction(actions.TASKS_DEL)

        expect(taskActions.delAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches getAllAction with the correct action and payload', () => {
        const payload = [task]
        const type = getAction(actions.TASKS_GET_ALL)

        expect(taskActions.getAllAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestDelAction with the correct action and payload', () => {
        const payload = '5c9e31f8c57b4917b426e334'
        const type = getAction(actions.TASKS_REQUEST_DEL)

        expect(taskActions.requestDelAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches requestGetAllAction with the correct action and payload', () => {
        const type = getAction(actions.TASKS_REQUEST_GET_ALL)

        expect(taskActions.requestGetAllAction()).toEqual({ type })
    })

    it('Dispatches requestSaveDataAction with the correct action and payload', () => {
        const mockValue = task
        const type = getAction(actions.TASKS_REQUEST_SAVE_DATA)

        expect(taskActions.requestSaveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })

    it('Dispatches saveDataAction with the correct action and payload', () => {
        const mockValue = task
        const type = getAction(actions.TASKS_SAVE_DATA)

        expect(taskActions.saveDataAction(mockValue)).toEqual({ payload: mockValue, type })
    })
})
