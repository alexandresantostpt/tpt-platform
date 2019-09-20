import { actions } from '../constants'

describe('Tests for Transfer constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TRANSFER_DEL).toEqual('TRANSFER_DEL')
        expect(actions.TRANSFER_EDIT).toEqual('TRANSFER_EDIT')
        expect(actions.TRANSFER_REQUEST_DEL).toEqual('TRANSFER_REQUEST_DEL')
        expect(actions.TRANSFER_REQUEST_SAVE_DATA).toEqual('TRANSFER_REQUEST_SAVE_DATA')
        expect(actions.TRANSFER_SAVE_DATA).toEqual('TRANSFER_SAVE_DATA')
    })
})
