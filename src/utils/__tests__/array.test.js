import { lastPosition } from '../array'

describe('Tests for array utils', () => {
    it('Should get the last item inside array', () => {
        const myArray = [1, 2, 3, 4, 5]
        expect(lastPosition(myArray)).toEqual(5)
    })
})
