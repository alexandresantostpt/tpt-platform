import { store } from '../store'

describe('Tests for Travel store', () => {
    it('Smoke tests', () => {
        const initialStore = store.toJS()
        expect(initialStore._listFilter).toEqual([])
        expect(initialStore.archiveds).toEqual([])
        expect(initialStore.list).toEqual([])
        expect(initialStore.obj).toEqual(null)
        expect(initialStore.suggestions).toEqual([])
    })
})
