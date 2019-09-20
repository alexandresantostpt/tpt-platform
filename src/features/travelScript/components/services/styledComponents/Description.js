import React from 'react'
import styled from '@react-pdf/styled-components'

const StyledDescription = styled.Text`
    color: #9b9eb1;
    font-size: 11pt;
    font-weight: 100;
`

const Description = props => <StyledDescription {...props} />

export default Description
