import { formatOptions } from '../select'

describe('Tests for select utils', () => {
    it('Should return formatted options for object array', () => {
        const data = [{ id: 0, name: 'Name' }, { id: 1, name: 'Name1' }]
        const expectedOptions = [
            { obj: { id: 0, name: 'Name' }, text: 'Name', value: 0 },
            { obj: { id: 1, name: 'Name1' }, text: 'Name1', value: 1 }
        ]

        expect(formatOptions(data, 'name', 'id')).toEqual(expectedOptions)
    })

    it('Should return formatted options for string array', () => {
        const data = ['Name', 'Name1']
        const expectedOptions = [{ obj: {}, text: 'Name', value: 'Name' }, { obj: {}, text: 'Name1', value: 'Name1' }]

        expect(formatOptions(data)).toEqual(expectedOptions)
    })
})
