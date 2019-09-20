import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import { formats } from '@constants/dateFormats'

import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'
import ServiceInfo from './styledComponents/ServiceInfo'

/* eslint-disable sort-keys */
const CarRental = ({ library, retire, type }) => (
    <ServiceContainer>
        <ServiceHeader type={type}>{library.name}</ServiceHeader>
        <ServiceInfo
            obj={{ addressRetire: retire.address, retireName: retire.name, hourRetire: moment(retire.hour).format(formats.time) }}
        />
    </ServiceContainer>
)

/* eslint-enable sort-keys */

CarRental.defaultProps = {
    library: {},
    retire: {}
}

CarRental.propTypes = {
    library: PropTypes.shape({
        name: PropTypes.string
    }),
    retire: PropTypes.object,
    type: PropTypes.string.isRequired
}

export default CarRental
