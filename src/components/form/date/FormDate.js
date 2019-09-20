import { events } from '@constants/events'
import { formats } from '@constants/dateFormats'

import moment from 'moment'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import uuid from 'uuid'

import { SingleDatePicker } from 'react-dates'
import { i18n } from '@i18n'
import styled from 'styled-components'

import { isNotEmpty, isEmpty } from '@utils/functions'
import { fieldInvalid } from '@helpers/mixins'
import Icon from '@components/icon/Icon'

const StyledFormDate = styled.div`
    ${fieldInvalid};
`

const FormDate = ({ disabled, form, name, initialValue, isInvalid, rangeDates }) => {
    const [date, updateDate] = useState('')
    const [focused, updateFocused] = useState(false)

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateDate(null))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    useEffect(() => {
        updateDate(initialValue && moment(initialValue).utc(false))
    }, [initialValue])

    const handleDateChange = newDate => {
        updateDate(newDate)
        form.current.form.change(name, newDate.format(formats.db))
    }

    const handleDateFocus = ({ focused: newFocused }) => updateFocused(newFocused)

    /* eslint-disable indent */
    return (
        <StyledFormDate isInvalid={isInvalid}>
            <SingleDatePicker
                customInputIcon={<Icon icon="calendar" />}
                date={isNotEmpty(date) ? date : null}
                disabled={disabled}
                displayFormat={formats.short}
                enableOutsideDays={true}
                focused={focused}
                id={uuid()}
                inputIconPosition="after"
                isDayBlocked={day =>
                    isEmpty(rangeDates)
                        ? moment()
                              .utc(false)
                              .isAfter(day, 'day')
                        : moment(day)
                              .utc(false)
                              .isBefore(rangeDates.startDate, 'day') ||
                          moment(day)
                              .utc(false)
                              .isAfter(rangeDates.endDate, 'day')
                }
                isDayHighlighted={() => false}
                isOutsideRange={() => false}
                monthFormat="MMM, YYYY"
                navNext={null}
                navPrev={null}
                noBorder
                numberOfMonths={1}
                onDateChange={handleDateChange}
                onFocusChange={handleDateFocus}
                placeholder={i18n.t('placeholders.date')}
                readOnly
                showDefaultInputIcon={false}
                weekDayFormat="ddd"
            />
        </StyledFormDate>
    )
}

FormDate.defaultProps = {
    disabled: false,
    initialValue: null,
    rangeDates: {}
}

FormDate.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    rangeDates: PropTypes.object
}

export default FormDate
