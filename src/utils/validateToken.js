import moment from 'moment'

import { decoded } from './jwt'

const isValid = token => {
    if (token) {
        const { expires } = decoded(token)
        const expirationDate = moment(expires).format('YYYY-MM-DD HH:mm:ss')
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')
        return moment(expirationDate).isAfter(currentDate)
    }
    return false
}

export { isValid }
