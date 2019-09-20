import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import { formats } from '@constants/dateFormats'

import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'
import ServiceInfo from './styledComponents/ServiceInfo'

/* eslint-disable sort-keys */
const Hotel = ({ address, checkInHour, guestCount, includedMeals, library, roomType, type }) => (
    <ServiceContainer>
        <ServiceHeader type={type}>{library.name}</ServiceHeader>
        <ServiceInfo
            obj={{
                checkInTime: moment(checkInHour).format(formats.time),
                address,
                amountOfGuests: guestCount,
                typeOfRoom: roomType,
                includedMeals
            }}
        />
    </ServiceContainer>
)

/* eslint-enable sort-keys */
Hotel.defaultProps = {
    address: '',
    checkInHour: '',
    guestCount: '',
    includedMeals: {},
    library: {},
    roomType: ''
}

Hotel.propTypes = {
    address: PropTypes.string,
    checkInHour: PropTypes.string,
    guestCount: PropTypes.number,
    includedMeals: PropTypes.object,
    library: PropTypes.shape({
        name: PropTypes.string
    }),
    roomType: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default Hotel
