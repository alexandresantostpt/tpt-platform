import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledInput = styled.input`
    background: ${colors.white};
    border: solid 0.5px ${colors.suvaGray};
    border-radius: 6px;
    box-sizing: border-box;
    color: ${colors.text};
    font-size: 15px;
    max-width: 350px;
    min-width: 236px;
    padding: 6px 19px;
    width: 40%;
    &:focus {
        outline: none;
    }

    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &:-moz-placeholder {
        color: ${colors.zambezi};
    }
`

const Input = ({ onChange, placeholder, ...props }) => (
    <StyledInput onChange={onChange} placeholder={placeholder} type="text" {...props} />
)

Input.defaultProps = {
    placeholder: '',
    value: ''
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
}

export default Input
