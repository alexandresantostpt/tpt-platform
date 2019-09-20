import { store } from '../store'

describe('Tests for CarRental store', () => {
    it('Smoke tests', () => {
        const initialStore = store.toJS()
        expect(initialStore.obj).toEqual(null)
    })
})
