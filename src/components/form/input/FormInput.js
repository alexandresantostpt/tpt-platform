import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { fieldInvalid } from '@helpers/mixins'
import { inputTypes } from '@/constants/inputTypes'
import { keys } from '@/constants/keys'

const StyledFormInput = styled.input`
    ${fieldInvalid};
    pointer-events: ${({ readOnly }) => (readOnly ? 'none' : null)};
    text-overflow: ellipsis;
`

const FormInput = ({ type, ...props }) => {
    const onKeyDown = e => {
        if (type === inputTypes.NUMBER) {
            if (e.key === keys.SUB || e.key === keys.E || e.key === keys.PLUS) {
                e.preventDefault()
                return false
            }
        }
    }
    return <StyledFormInput {...props} numbersOnly={type === inputTypes.NUMBER} onKeyDown={onKeyDown} type={type} />
}

FormInput.propTypes = {
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    readOnly: PropTypes.bool.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default FormInput
