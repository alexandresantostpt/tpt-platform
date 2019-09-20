import { actions } from '../constants'

import * as toastActions from '../actions'

import { getAction } from '@utils/actions'

describe('Tests for Toast actions', () => {
    it('Dispatches addToastAction with the correct action and payload', () => {
        const type = getAction(actions.TOAST_ADD)
        expect(toastActions.addToastAction()).toEqual({ type })
    })

    it('Dispatches removeToastAction with the correct action and payload', () => {
        const type = getAction(actions.TOAST_REMOVE)
        expect(toastActions.removeToastAction()).toEqual({ type })
    })

    it('Dispatches requestAddToastAction with the correct action and payload', () => {
        const type = getAction(actions.TOAST_REQUEST_ADD)
        expect(toastActions.requestAddToastAction()).toEqual({ type })
    })

    it('Dispatches requestRemoveToastAction with the correct action and payload', () => {
        const type = getAction(actions.TOAST_REQUEST_REMOVE)
        expect(toastActions.requestRemoveToastAction()).toEqual({ type })
    })
})
