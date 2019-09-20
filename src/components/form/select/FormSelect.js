import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import If from '@components/if/If'

import { colors } from '@helpers/colors'

const StyledFormSelect = styled.select`
    background-color: white;
    border: unset;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.11);
    color: ${colors.textLight};
    cursor: pointer;
    height: 2rem;
    padding: 0;
    width: 100%;
    :focus {
        outline: unset;
    }
`

const FormSelect = ({ form, initialValue, name, options, placeholder }) => {
    const [selected, updateSelected] = useState('')

    useEffect(() => {
        updateSelected(initialValue)
    }, [initialValue])

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateSelected(''))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    const handleOnChange = ({ target }) => {
        updateSelected(target.value)
        form.current.form.change(name, target.value)
    }
    return (
        <StyledFormSelect onChange={handleOnChange} value={selected}>
            <If condition={!!placeholder}>
                <option disabled hidden value="">
                    {i18n.t(`placeholders.${placeholder}`)}
                </option>
            </If>
            {options.map((opt, index) => (
                <option key={index} value={opt.value || opt}>
                    {opt.text || opt}
                </option>
            ))}
        </StyledFormSelect>
    )
}

FormSelect.defaultProps = {
    initialValue: '',
    options: [],
    placeholder: ''
}

FormSelect.propTypes = {
    form: PropTypes.object.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
    placeholder: PropTypes.string
}

export default FormSelect
