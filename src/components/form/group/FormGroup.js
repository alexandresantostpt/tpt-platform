import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFormGroup = styled.div`
    margin-bottom: ${({ padding }) => (padding ? '4rem' : '.9375rem')};
    position: relative;
`

const FormGroup = ({ children, padding }) => <StyledFormGroup padding={padding}>{children}</StyledFormGroup>

FormGroup.defaultProps = {
    padding: false
}

FormGroup.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]).isRequired,
    padding: PropTypes.bool
}

export default FormGroup
