import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
`

const Form = ({ children, onSubmit }) => <StyledForm onSubmit={onSubmit}>{children}</StyledForm>

Form.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Form
