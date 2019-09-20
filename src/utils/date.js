import { formats } from '@constants/dateFormats'

import moment from 'moment'

const checkIntervalMinute = (start, end) => {
    const initialDate = moment(start)
    const finalDate = moment(end)
    return finalDate.isSameOrAfter(initialDate, 'minute')
}

const isEquals = (date1, date2) => date1.format(formats.american) === date2.format(formats.american)

const isSameDay = (date1, date2) => date1.isSame(date2, 'day')

const joinHour = (date, hour) => {
    const dateMoment = moment(date).utc(false)
    const hourMoment = moment(hour).utc(false)
    return dateMoment
        .hour(hourMoment.hour())
        .minute(hourMoment.minute())
        .second(hourMoment.second())
}

const newDateFromHour = hour => {
    const [hours, minutes] = hour.split(':')
    return moment()
        .hours(hours)
        .minutes(minutes)
        .toDate()
}

const normalizeTimezone = time => {
    const hour = moment(time)
    const hourOffset = hour.utcOffset()
    return moment(hour)
        .utc(false)
        .subtract(Math.abs(hourOffset), 'm')
        .format()
}

export { checkIntervalMinute, isEquals, isSameDay, joinHour, newDateFromHour, normalizeTimezone }
