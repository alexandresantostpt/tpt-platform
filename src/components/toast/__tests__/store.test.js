import { store } from '../store'

describe('Tests for Toast store', () => {
    it('Smoke tests', () => {
        const initialStore = store.toJS()
        expect(initialStore.list).toEqual([])
    })
})
