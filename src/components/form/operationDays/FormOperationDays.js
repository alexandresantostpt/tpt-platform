import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { not } from '@utils/functions'

import DayItem from './DayItem'

const StyledOperationDays = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0.2rem;
    width: 100%;
`
const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const initialOperationDays = {
    friday: false,
    monday: false,
    saturday: false,
    sunday: false,
    thursday: false,
    tuesday: false,
    wednesday: false
}

const FormOperationDays = ({ disabled, form, name, initialValue, isInvalid }) => {
    const [operationDays, updateOperationDays] = useState(initialOperationDays)

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateOperationDays(initialOperationDays))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    useEffect(() => {
        updateOperationDays(initialValue)
    }, [initialValue])

    const onClickDay = day => {
        const newDaysValue = { ...operationDays, [day]: not(operationDays[day]) }
        updateOperationDays(newDaysValue)
        form.current.form.change(name, newDaysValue)
    }
    return (
        <StyledOperationDays>
            {weekDays.map((day, index) => (
                <DayItem active={operationDays[day]} day={day} key={index} onClick={onClickDay} />
            ))}
        </StyledOperationDays>
    )
}

FormOperationDays.defaultProps = {
    disabled: false,
    initialValue: null
}

FormOperationDays.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default FormOperationDays
