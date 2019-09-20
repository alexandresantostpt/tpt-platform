import { store } from '../store'

describe('Tests for Login store', () => {
    it('Smoke tests', () => {
        const initialStore = store.toJS()
        expect(initialStore.user).toEqual(null)
        expect(initialStore.wrongCredentials).toEqual(false)
    })
})
