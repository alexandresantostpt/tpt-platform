import { store } from '../store'

describe('Tests for Agency store', () => {
    it('Smoke tests', () => {
        const initialStore = store.toJS()
        expect(initialStore._listFilter).toEqual([])
        expect(initialStore.list).toEqual([])
        expect(initialStore.obj).toEqual(null)
    })
})
