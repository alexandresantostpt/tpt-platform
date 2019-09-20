import PropTypes from 'prop-types'
import React from 'react'

const FormContainer = ({ children }) => <div className="form__container">{children}</div>

FormContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default FormContainer
