import React from 'react'
import styled from 'styled-components'

const StyledNumberField = styled.input`
    &:disabled {
        background-color: #fbfbfb;
        border: none;
        color: ${({ theme }) => theme.text};
        font-weight: 300;
    }
`

const NumberField = props => <StyledNumberField disabled {...props} />

export default NumberField
