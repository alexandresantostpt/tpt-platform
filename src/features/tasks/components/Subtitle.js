import React from 'react'
import styled from 'styled-components'

const StyledSubtitle = styled.div`
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 300;
    height: 25px;
    letter-spacing: 0.3px;
    line-height: 1.19;
    padding-left: 1rem;
    text-align: left;
    width: 243px;
`

const Subtitle = props => <StyledSubtitle {...props} />

export default Subtitle
