import PropTypes from 'prop-types'
import React from 'react'
import { DayPickerRangeController } from 'react-dates'

const TravelCalendar = ({ travelScript }) =>
    travelScript ? (
        <DayPickerRangeController
            endDate={travelScript.travel.travelEndDate}
            focusedInput={travelScript.travel.travelEndDate.startDate}
            noBorder={true}
            startDate={travelScript.travel.travelStartDate}
            transitionDuration={0}
        />
    ) : null

TravelCalendar.defaultProps = {
    travelScript: null
}

TravelCalendar.propTypes = {
    travelScript: PropTypes.object
}

export default TravelCalendar
