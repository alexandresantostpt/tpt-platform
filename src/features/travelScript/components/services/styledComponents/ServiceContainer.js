import React from 'react'
import styled from '@react-pdf/styled-components'

const StyledServiceContainer = styled.View`
    padding: 5% 10%;
`

const ServiceContainer = props => <StyledServiceContainer {...props} />

export default ServiceContainer
