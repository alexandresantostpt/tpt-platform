import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFormLabel = styled.label`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
`

const FormLabel = ({ children }) => <StyledFormLabel>{children}</StyledFormLabel>

FormLabel.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default FormLabel
