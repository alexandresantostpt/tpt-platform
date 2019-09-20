import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'
import styled from 'styled-components'

import { not } from '@utils/functions'

import { events } from '@constants/events'
import { formats } from '@constants/dateFormats'

import { fieldInvalid } from '@helpers/mixins'
import Icon from '@/components/icon/Icon'
import { i18n } from '@i18n'
import Input from './components/Input'
import StyledIcon from './components/StyledIcon'

import If from '@components/if/If'

const StyledFormRangeDate = styled.div`
    ${fieldInvalid};
`

const FormRangeDate = ({ disabled, form, name, initialValue, isInvalid }) => {
    const [endDate, updateEndDate] = useState(null)
    const [startDate, updateStartDate] = useState(null)
    const [focused, updateFocused] = useState(null)

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, resetDates)
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    useEffect(() => {
        if (initialValue) {
            const { endDate: initialEndDate, startDate: initialStartDate } = initialValue
            updateEndDate(initialEndDate && moment(initialEndDate).utc(false))
            updateStartDate(initialStartDate && moment(initialStartDate).utc(false))
        }
    }, [initialValue])

    const resetDates = () => {
        updateStartDate(null)
        updateEndDate(null)
    }

    const handleDateChange = ({ endDate: newEndDate, startDate: newStartDate }) => {
        updateEndDate(newEndDate)
        updateStartDate(newStartDate)

        form.current.form.change(name, {
            endDate: newEndDate && newEndDate.format(formats.db),
            startDate: newStartDate && newStartDate.format(formats.db)
        })
    }

    const fieldValue = () =>
        startDate && endDate
            ? `${startDate.format(formats.shortestWithText)} ${i18n.t('labels.to')} ${endDate.format(formats.shortestWithText)}`
            : ''

    return (
        <StyledFormRangeDate isInvalid={isInvalid}>
            <DateRangePicker
                displayFormat={formats.short}
                enableOutsideDays={false}
                endDate={endDate}
                endDateId="dateRangeEnd"
                focusedInput={focused}
                isDayHighlighted={() => false}
                minimumNights={0}
                monthFormat="MMM, YYYY"
                numberOfMonths={1}
                onDatesChange={handleDateChange}
                onFocusChange={updateFocused}
                startDate={startDate}
                startDateId="dateRangeStart"
                startDatePlaceholderText=""
                weekDayFormat="ddd"
            />
            <Input disabled={disabled} onClick={() => updateFocused('startDate')} value={fieldValue()} />
            <If condition={not(disabled)}>
                <StyledIcon disabled={disabled} onClick={disabled ? null : () => updateFocused('startDate')}>
                    <Icon fontSize="1.5em" icon="calendar" />
                </StyledIcon>
            </If>
        </StyledFormRangeDate>
    )
}

FormRangeDate.defaultProps = {
    disabled: false,
    initialValue: null
}

FormRangeDate.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default FormRangeDate
