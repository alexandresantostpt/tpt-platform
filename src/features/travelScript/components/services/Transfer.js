import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import { formats } from '@constants/dateFormats'

import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'
import ServiceInfo from './styledComponents/ServiceInfo'

/* eslint-disable sort-keys */
const Transfer = ({ assistance, car, driver, hour, library, meetPoint, transferType, type }) => (
    <ServiceContainer>
        <ServiceHeader type={type}>{library.name}</ServiceHeader>
        <ServiceInfo
            obj={{
                localOperator: library.localOperator,
                transferHour: moment(hour).format(formats.time),
                meetPoint,
                carModel: car.model,
                driverName: driver.name,
                transferType,
                assistance
            }}
        />
    </ServiceContainer>
)

/* eslint-enable sort-keys */

Transfer.defaultProps = {
    assistance: '',
    car: {},
    driver: {},
    hour: '',
    library: '',
    meetPoint: '',
    transferType: ''
}

Transfer.propTypes = {
    assistance: PropTypes.string,
    car: PropTypes.object,
    driver: PropTypes.object,
    hour: PropTypes.string,
    library: PropTypes.shape({
        localOperator: PropTypes.string,
        name: PropTypes.string
    }),
    meetPoint: PropTypes.string,
    transferType: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default Transfer
