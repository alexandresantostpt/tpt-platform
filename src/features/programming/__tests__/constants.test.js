import { actions } from '../constants'

describe('Tests for Programming constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.PROGRAMMING_DEL).toEqual('PROGRAMMING_DEL')
        expect(actions.PROGRAMMING_GET_SINGLE).toEqual('PROGRAMMING_GET_SINGLE')
        expect(actions.PROGRAMMING_REQUEST_DEL).toEqual('PROGRAMMING_REQUEST_DEL')
        expect(actions.PROGRAMMING_REQUEST_GET_SINGLE).toEqual('PROGRAMMING_REQUEST_GET_SINGLE')
        expect(actions.PROGRAMMING_REQUEST_SAVE_DATA).toEqual('PROGRAMMING_REQUEST_SAVE_DATA')
        expect(actions.PROGRAMMING_SAVE_DATA).toEqual('PROGRAMMING_SAVE_DATA')
    })
})
