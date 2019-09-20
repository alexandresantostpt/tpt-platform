import { times } from '@constants/times'

import { debounce, isEmpty, isNotEmpty, isNotNull, isUndefinedObj, isNotUndefined, not } from '../functions'

describe('Tests for functions utils', () => {
    it('Should debounce a function when debounce has been called', () => {
        global.clearTimeout = jest.fn()
        global.setTimeout = jest.fn()
        const mockFunction = () => console.log('Testing...')
        debounce(mockFunction, times.ONE_SECOND)
        expect(clearTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenCalledTimes(1)
    })

    it("Should isEmpty return false when array isn't empty", () => {
        const array = [1, 2, 3]
        expect(isEmpty(array)).toBeFalsy()
    })

    it("Should isEmpty return true when array it's empty", () => {
        const array = []
        expect(isEmpty(array)).toBeTruthy()
    })

    it("Should isNotEmpty return true when array isn't empty", () => {
        const array = [1, 2, 3]
        expect(isNotEmpty(array)).toBeTruthy()
    })

    it("Should isNotEmpty return false when array it's empty", () => {
        const array = []
        expect(isNotEmpty(array)).toBeFalsy()
    })

    it("Should isEmpty return false when obj isn't empty", () => {
        const obj = {
            id: 1,
            message: 'Testing'
        }
        expect(isEmpty(obj)).toBeFalsy()
    })

    it("Should isEmpty return true when obj it's empty", () => {
        const obj = {}
        expect(isEmpty(obj)).toBeTruthy()
    })

    it("Should isNotEmpty return true when obj isn't empty", () => {
        const obj = {
            id: 1,
            message: 'Testing'
        }
        expect(isNotEmpty(obj)).toBeTruthy()
    })

    it("Should isNotEmpty return false when obj it's empty", () => {
        const obj = {}
        expect(isNotEmpty(obj)).toBeFalsy()
    })

    it("Should isNotNull return true when obj it's null", () => {
        const obj = {}
        expect(isNotNull(obj)).toBeTruthy()
    })

    it("Should isNotNull return false when obj isn't null", () => {
        const obj = null
        expect(isNotNull(obj)).toBeFalsy()
    })

    it("Should isUndefined return true when obj it's undefined", () => {
        const obj = undefined
        expect(isUndefinedObj(obj)).toBeTruthy()
    })

    it("Should isUndefined return false when obj isn't undefined", () => {
        const obj = {}
        expect(isUndefinedObj(obj)).toBeFalsy()
    })

    it("Should isNotUndefined return true when obj it's undefined", () => {
        const obj = {}
        expect(isNotUndefined(obj)).toBeTruthy()
    })

    it("Should isNotUndefined return false when obj isn't undefined", () => {
        const obj = undefined
        expect(isNotUndefined(obj)).toBeFalsy()
    })

    it("Should not return true when expression it's false", () => {
        expect(not(false)).toBeTruthy()
    })

    it("Should not return false when expression it's true", () => {
        expect(not(true)).toBeFalsy()
    })
})
