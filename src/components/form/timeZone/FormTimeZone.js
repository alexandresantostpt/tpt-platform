import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css'

import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import TimezonePicker from 'react-bootstrap-timezone-picker'

import { colors } from '@helpers/colors'
import { fieldInvalid } from '@helpers/mixins'

const StyledTimezonePicker = styled(TimezonePicker)`
    border-radius: 8px;
    box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.11);
    margin: 0;
    ${fieldInvalid};
    padding: 0;
    width: 100%;

    & input {
        background-color: transparent !important;
        border: unset;
        color: ${colors.textLight};
    }
`

const FormTimezone = ({ disabled, form, initialValue, isInvalid, name }) => {
    const [value, updateValue] = useState('')
    const timezoneInputRef = useRef()

    const handleChange = val => {
        form.current.form.change(name, val)
        updateValue(val)
    }

    useEffect(() => {
        handleChange(initialValue)
    }, [initialValue])

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, reset)
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    const reset = () => {
        handleChange('')
        timezoneInputRef.current.prevValue = ''
    }

    return (
        <StyledTimezonePicker
            absolute
            className={name}
            disabled={disabled}
            isInvalid={isInvalid}
            onChange={handleChange}
            placeholder="Selecione um timezone..."
            ref={timezoneInputRef}
            value={value}
        />
    )
}

FormTimezone.defaultProps = {
    disabled: false,
    initialValue: ''
}

FormTimezone.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.string,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default FormTimezone
