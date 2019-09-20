import { CODES } from '@constants/HTTP'

import { handleError, handleSuccess, responseWasOK } from '../http'

describe('Tests for http utils', () => {
    it('Should log error when handleError has been called', () => {
        const error = 'An error was raised'
        global.console = {
            error: jest.fn()
        }
        handleError(error)
        expect(console.error).toHaveBeenCalledTimes(1)
        expect(console.error).toHaveBeenCalledWith(error)
    })

    it('Should return just data attribute when handleError has been called', () => {
        const dataMock = { message: 'Testing...' }
        const response = {
            data: dataMock
        }
        expect(handleSuccess(response)).toEqual(dataMock)
    })

    it('Should return true when response has 200 code', () => {
        expect(responseWasOK(CODES.OK)).toBeTruthy()
    })

    it('Should return false when response has 400 code', () => {
        expect(responseWasOK(CODES.BAD_REQUEST)).toBeFalsy()
    })
})
