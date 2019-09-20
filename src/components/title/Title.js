import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
    color: #000000;
    font-size: 1.875rem;
    font-weight: 300;
    margin-bottom: 1.0675rem;
    opacity: 0.67;
    text-transform: uppercase;
`

const Title = props => <StyledTitle {...props} />

Title.propTypes = {
    children: PropTypes.string.isRequired
}

export default Title
