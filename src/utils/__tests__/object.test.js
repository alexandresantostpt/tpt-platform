import { compare } from '../object'

describe('Tests for object utils', () => {
    it('Should return true when two object are equals', () => {
        const obj1 = { message: 'Testing' }
        const obj2 = { ...obj1 }
        expect(compare(obj1, obj2)).toBeTruthy()
    })

    it('Should return false when two object are not equals', () => {
        const obj1 = { message: 'Testing' }
        const obj2 = { ...obj1, id: 1 }
        expect(compare(obj1, obj2)).toBeFalsy()
    })
})
