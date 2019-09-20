import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { fieldInvalid } from '@helpers/mixins'
import { zIndexes } from '@helpers/zIndexes'

const StyledLabel = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    padding: 0.4rem;
`

const StyledOption = styled.div`
    font-weight: 300;
    margin-top: 0.4rem;
    ${fieldInvalid};
    input[type='radio'] {
        position: relative;
        z-index: ${zIndexes.inputRadio};
    }
`

const FormRadio = ({ disabled, options, name, form, initialValue, isInvalid }) => {
    const [selected, updateSelected] = useState('')

    useEffect(() => {
        updateSelected(initialValue)
    }, [initialValue])

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateSelected(''))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    const isChecked = option => selected === option

    const handleOnChange = evt => {
        const option = evt.target.value
        if (isChecked(option)) {
            updateSelected('')
            form.current.form.change(name, '')
        } else {
            updateSelected(option)
            form.current.form.change(name, option)
        }
    }
    return options.map(option => (
        <StyledOption isInvalid={isInvalid} key={`${name}-${option}`}>
            <input
                checked={isChecked(option)}
                disabled={disabled}
                id={`${name}-${option}`}
                name={`${name}-${option}`}
                onChange={handleOnChange}
                type="radio"
                value={option}
            />
            <StyledLabel>{i18n.t(`labels.${option}`)}</StyledLabel>
        </StyledOption>
    ))
}

FormRadio.defaultProps = {
    disalbed: false,
    initialValue: '',
    options: []
}

FormRadio.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.string,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array
}

export default FormRadio
