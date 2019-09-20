import { actions } from '../constants'

describe('Tests for Tasks constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TASKS_DEL).toEqual('TASKS_DEL')
        expect(actions.TASKS_GET_ALL).toEqual('TASKS_GET_ALL')
        expect(actions.TASKS_REQUEST_DEL).toEqual('TASKS_REQUEST_DEL')
        expect(actions.TASKS_REQUEST_GET_ALL).toEqual('TASKS_REQUEST_GET_ALL')
        expect(actions.TASKS_REQUEST_SAVE_DATA).toEqual('TASKS_REQUEST_SAVE_DATA')
        expect(actions.TASKS_SAVE_DATA).toEqual('TASKS_SAVE_DATA')
    })
})
