import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { validate } from '@utils/form'

import { Form as FinalForm } from 'react-final-form'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Form = forwardRef(({ children, fields, initialValues, onSubmit }, ref) => (
    <FinalForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        ref={ref}
        render={({ handleSubmit }) => <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>}
        validate={values => validate(values, fields)}
    />
))

Form.defaultProps = {
    initialValues: {},
    ref: {}
}

Form.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]).isRequired,
    fields: PropTypes.object.isRequired,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
}

export default Form
