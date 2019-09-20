import { actions } from '../constants'

describe('Tests for Train constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TRAIN_DEL).toEqual('TRAIN_DEL')
        expect(actions.TRAIN_EDIT).toEqual('TRAIN_EDIT')
        expect(actions.TRAIN_GET_LIST).toEqual('TRAIN_GET_LIST')
        expect(actions.TRAIN_REQUEST_DEL).toEqual('TRAIN_REQUEST_DEL')
        expect(actions.TRAIN_REQUEST_SAVE_DATA).toEqual('TRAIN_REQUEST_SAVE_DATA')
        expect(actions.TRAIN_REQUEST_SEARCH).toEqual('TRAIN_REQUEST_SEARCH')
        expect(actions.TRAIN_SAVE_DATA).toEqual('TRAIN_SAVE_DATA')
        expect(actions.TRAIN_SEARCH).toEqual('TRAIN_SEARCH')
    })
})
