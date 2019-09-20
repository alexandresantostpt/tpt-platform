import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: red;
    font-size: 0.9rem;
    width: 100%;
`

const ErrorMessage = ({ children }) => <StyledDiv>{children}</StyledDiv>

ErrorMessage.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default ErrorMessage
