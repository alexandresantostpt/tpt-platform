import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { fieldInvalid } from '@helpers/mixins'

const StyledLabel = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: 300;
    padding: 0.4rem;
`

const StyledOption = styled.div`
    margin-top: 0.4rem;
    ${fieldInvalid};
`

const FormCheck = ({ options, name, form, initialValue, isInvalid }) => {
    const [selected, updateSelected] = useState({})
    useEffect(() => {
        updateSelected(initialValue)
    }, [initialValue])

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateSelected({}))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    const handleOnChange = ({ target: { value } }) => {
        const option = value
        if (selected[option]) {
            const newSelected = { ...selected, [option]: false }
            updateSelected(newSelected)
            form.current.form.change(name, newSelected)
        } else {
            const newSelected = { ...selected, [option]: true }
            updateSelected(newSelected)
            form.current.form.change(name, newSelected)
        }
    }
    return options.map(option => (
        <StyledOption isInvalid={isInvalid} key={option}>
            <input
                checked={selected[option] || false}
                id={option}
                name={option}
                onChange={handleOnChange}
                type="checkbox"
                value={option}
            />
            <StyledLabel>{i18n.t(`labels.${option}`)}</StyledLabel>
        </StyledOption>
    ))
}

FormCheck.defaultProps = {
    initialValue: {},
    options: []
}

FormCheck.propTypes = {
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array
}

export default FormCheck
