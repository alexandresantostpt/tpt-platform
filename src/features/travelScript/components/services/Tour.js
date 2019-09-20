import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import { formats } from '@constants/dateFormats'

import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'
import ServiceInfo from './styledComponents/ServiceInfo'

/* eslint-disable sort-keys */
const Tour = ({
    guideOrDriver,
    includedMeals,
    language,
    outHour,
    peopleCount,
    library,
    localOperator,
    tourType,
    transferType,
    type
}) => (
    <ServiceContainer>
        <ServiceHeader type={type}>{library.name}</ServiceHeader>
        <ServiceInfo
            obj={{
                describe: library.describe,
                outHour: moment(outHour).format(formats.time),
                duration: library.duration,
                peopleCount,
                localOperator,
                transferType,
                language,
                tourType,
                guideOrDriver,
                includedMeals
            }}
        />
    </ServiceContainer>
)

/* eslint-enable sort-keys */

Tour.defaultProps = {
    guideOrDriver: '',
    includedMeals: {},
    language: '',
    library: {},
    localOperator: '',
    outHour: '',
    passenger: [],
    peopleCount: '',
    tourType: '',
    transferType: ''
}

Tour.propTypes = {
    guideOrDriver: PropTypes.string,
    includedMeals: PropTypes.object,
    language: PropTypes.object,
    library: PropTypes.shape({
        describe: PropTypes.string,
        duration: PropTypes.string,
        name: PropTypes.string
    }),
    localOperator: PropTypes.string,
    outHour: PropTypes.string,
    passenger: PropTypes.array,
    peopleCount: PropTypes.number,
    tourType: PropTypes.string,
    transferType: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default Tour
