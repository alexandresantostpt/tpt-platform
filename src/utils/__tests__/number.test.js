import { toInt } from '../number'

describe('Tests for number utils', () => {
    it('Should convert string to number', () => {
        expect(toInt('1')).toEqual(1)
    })
})
