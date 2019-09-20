import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    color: ${colors.text};
    font-size: 1rem;
    font-weight: 300;
    padding: 5px;
    transition: all 0.15s linear;
    width: calc(100% - 0.625rem);

    &:focus {
        outline: none;
    }
`

const Input = props => <StyledInput readOnly type="text" {...props} />

export default Input
