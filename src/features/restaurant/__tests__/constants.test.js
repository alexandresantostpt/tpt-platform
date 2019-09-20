import { actions } from '../constants'

describe('Tests for Restaurant constants', () => {
    it('Should return true when each action type match with your respective value', () => {
        expect(actions.RESTAURANT_DEL).toEqual('RESTAURANT_DEL')
        expect(actions.RESTAURANT_GET_SINGLE).toEqual('RESTAURANT_GET_SINGLE')
        expect(actions.RESTAURANT_REQUEST_DEL).toEqual('RESTAURANT_REQUEST_DEL')
        expect(actions.RESTAURANT_REQUEST_GET_SINGLE).toEqual('RESTAURANT_REQUEST_GET_SINGLE')
        expect(actions.RESTAURANT_REQUEST_SAVE_DATA).toEqual('RESTAURANT_REQUEST_SAVE_DATA')
        expect(actions.RESTAURANT_SAVE_DATA).toEqual('RESTAURANT_SAVE_DATA')
    })
})
