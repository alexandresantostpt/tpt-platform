import { actions } from '../constants'

describe('Tests for Tip constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.TIP_DEL).toEqual('TIP_DEL')
        expect(actions.TIP_GET_SINGLE).toEqual('TIP_GET_SINGLE')
        expect(actions.TIP_REQUEST_DEL).toEqual('TIP_REQUEST_DEL')
        expect(actions.TIP_REQUEST_GET_SINGLE).toEqual('TIP_REQUEST_GET_SINGLE')
        expect(actions.TIP_REQUEST_SAVE_DATA).toEqual('TIP_REQUEST_SAVE_DATA')
        expect(actions.TIP_SAVE_DATA).toEqual('TIP_SAVE_DATA')
    })
})
