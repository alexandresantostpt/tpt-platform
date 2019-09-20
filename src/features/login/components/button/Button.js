import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledButton = styled.button`
    background: linear-gradient(-225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%);
    border-radius: 30px;
    border-style: none;
    box-sizing: border-box;
    color: ${colors.white};
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
    margin-top: 2rem;
    padding: 0.8rem;
    text-transform: uppercase;
    width: 70%;

    &:focus {
        outline: none;
    }
`

const Button = ({ disabled, text, type }) => (
    <StyledButton disabled={disabled} type={type}>
        {text}
    </StyledButton>
)

Button.defaultProps = {
    disabled: false
}

Button.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Button
