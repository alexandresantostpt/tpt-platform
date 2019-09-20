import { events } from '@constants/events'
import { formats } from '@constants/dateFormats'
import { masks } from '@constants/masks'

import moment from 'moment'
import Cleave from 'cleave.js/react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { borders } from '@helpers/borders'
import { fieldInvalid } from '@helpers/mixins'

import { newDateFromHour } from '@utils/date'

import 'react-datepicker/dist/react-datepicker.css'

const StyledDatePicker = styled(Cleave)`
    background: transparent;
    border: none;
    border-bottom: ${borders.default};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: 300;
    padding: 0.4rem;
    transition: all 0.15s linear;
    width: 100%;

    &:focus {
        border-bottom-color: ${({ theme }) => theme.text};
        outline: none;
    }
`

const StyledFormTime = styled.div`
    ${fieldInvalid};
`

const FormTime = ({ disabled, form, name, initialValue, isInvalid }) => {
    const cleave = useRef()
    const [time, updateTime] = useState('')

    const handleChange = event => {
        const newValue = event.target.value
        const timeRegex = /(([\d]{2})([:])([\d]{2}))/
        if (timeRegex.test(newValue)) {
            const newTime = newDateFromHour(newValue)
            updateTime(newTime)
            form.current.form.change(name, newTime)
        }
    }

    useEffect(() => {
        if (initialValue) {
            if (initialValue.isValid && initialValue.isValid()) {
                updateTime(initialValue.format(formats.time))
            } else {
                updateTime(moment(initialValue).format(formats.time))
            }
        } else {
            updateTime('')
        }
    }, [initialValue])

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => resetValue())
        return () => {
            PubSub.unsubscribe(events.FORM_RESET)
        }
    }, [])

    const resetValue = () => {
        const { current } = cleave
        if (current) {
            current.setRawValue('')
        }
    }

    return (
        <StyledFormTime isInvalid={isInvalid}>
            <StyledDatePicker
                disabled={disabled}
                onChange={handleChange}
                options={masks.time}
                placeholderText={i18n.t('placeholders.time')}
                ref={cleave}
                value={time}
            />
        </StyledFormTime>
    )
}

FormTime.defaultProps = {
    disabled: false,
    initialValue: null
}

FormTime.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}
export default FormTime
