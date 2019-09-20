import React from 'react'
import styled from '@react-pdf/styled-components'

const StyledLabel = styled.Text`
    color: '#3d3e46';
    font-size: 14pt;
`

const Label = props => <StyledLabel {...props} />

export default Label
