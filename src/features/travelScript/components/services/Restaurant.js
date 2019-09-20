import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import { formats } from '@constants/dateFormats'

import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'
import ServiceInfo from './styledComponents/ServiceInfo'

/* eslint-disable sort-keys */
const Restaurant = ({ confirmedBy, library, peopleCount, reserveHour, reserveNumber, type }) => (
    <ServiceContainer>
        <ServiceHeader type={type}>{library.name}</ServiceHeader>
        <ServiceInfo
            obj={{
                address: library.address,
                reservationTime: moment(reserveHour).format(formats.time),
                peopleCount,
                reserveNumber,
                reservationConfirmedBy: confirmedBy
            }}
        />
    </ServiceContainer>
)
/* eslint-enable sort-keys */

Restaurant.defaultProps = {
    clients: [],
    confirmedBy: '',
    library: {},
    peopleCount: '',
    reserveHour: '',
    reserveNumber: ''
}

Restaurant.propTypes = {
    clients: PropTypes.array,
    confirmedBy: PropTypes.string,
    library: PropTypes.shape({
        address: PropTypes.string,
        name: PropTypes.string
    }),
    peopleCount: PropTypes.number,
    reserveHour: PropTypes.string,
    reserveNumber: PropTypes.number,
    type: PropTypes.string.isRequired
}

export default Restaurant
