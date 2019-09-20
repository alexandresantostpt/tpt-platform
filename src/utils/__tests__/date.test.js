import moment from 'moment'

import { isEquals, isSameDay } from '../date'

describe('Tests for date utils', () => {
    it('Should return true when dates are equals', () => {
        const today1 = moment()
        const today2 = today1.clone()
        expect(isEquals(today1, today2)).toBeTruthy()
    })

    it('Should return false when dates are not equals', () => {
        const date = moment('2019-01-01').utc(false)
        const anotherDate = moment('2019-02-02').utc(false)
        expect(isEquals(date, anotherDate)).toBeFalsy()
    })

    it('Should return true when a day of the is equals', () => {
        const today1 = moment()
        const today2 = today1.clone()
        expect(isSameDay(today1, today2)).toBeTruthy()
    })

    it('Should return false when a day of the is not equals', () => {
        const date = moment('2019-01-01').utc(false)
        const anotherDate = moment('2019-01-02').utc(false)
        expect(isEquals(date, anotherDate)).toBeFalsy()
    })
})
