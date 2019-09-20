import { history } from '@cfg/history'

import { navigateTo } from '../browser'

describe('Tests for browser utils', () => {
    it('Should navigate to home when navigateTo has been called', () => {
        const route = '/'
        history.push = jest.fn()
        navigateTo(route)
        expect(history.push).toHaveBeenCalledTimes(1)
        expect(history.push).toHaveBeenCalledWith(route)
    })
})
