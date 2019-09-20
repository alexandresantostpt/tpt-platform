import PropTypes from 'prop-types'
import React from 'react'
import styled from '@react-pdf/styled-components'

import ServiceLogo from './ServiceLogo'

const StyledServiceHeader = styled.View`
    align-items: center;
    display: flex;
    flex-direction: row;
    left: -45pt;
`

const HeaderText = styled.Text`
    color: #696b79;
    font-size: 22pt;
    font-stretch: normal;
    font-style: normal;
`

const ServiceHeader = ({ children, type }) => (
    <StyledServiceHeader>
        <ServiceLogo type={type} />
        <HeaderText>{children}</HeaderText>
    </StyledServiceHeader>
)

ServiceHeader.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default ServiceHeader
