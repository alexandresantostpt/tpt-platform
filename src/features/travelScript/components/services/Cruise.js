import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'

import { formats } from '@constants/dateFormats'

import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'
import ServiceInfo from './styledComponents/ServiceInfo'

/* eslint-disable sort-keys */
const Cruise = ({ boarding, cabinType, library, shipName, type }) => (
    <ServiceContainer>
        <ServiceHeader type={type}>{library.name}</ServiceHeader>
        <ServiceInfo
            obj={{ shipName, cabinType, boardingPoint: boarding.point, boardingHour: moment(boarding.hour).format(formats.time) }}
        />
    </ServiceContainer>
)
/* eslint-enable sort-keys */

Cruise.defaultProps = {
    boarding: {},
    cabinType: '',
    library: {},
    shipName: ''
}

Cruise.propTypes = {
    boarding: PropTypes.object,
    cabinType: PropTypes.string,
    library: PropTypes.shape({
        name: PropTypes.string
    }),
    shipName: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default Cruise
