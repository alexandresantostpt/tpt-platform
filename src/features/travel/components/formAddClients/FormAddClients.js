import PropTypes from 'prop-types'
import React from 'react'

import Collapse from '@components/collapse/Collapse'
import FormField from '@components/form/field/FormField'

const FormAddClients = props => {
    const { disabled, fields, form, getSuggestions, resetSuggestions, suggestions } = props
    return fields.map((field, index) => (
        <span key={index}>
            <FormField
                disabled={disabled}
                form={form}
                getSuggestions={getSuggestions}
                resetSuggestions={resetSuggestions}
                suggestions={suggestions}
                {...field[0]}
            />
            <Collapse>
                <FormField disabled={disabled} form={form} {...field[1]} />
                <FormField disabled={disabled} form={form} {...field[2]} />
            </Collapse>
        </span>
    ))
}

FormAddClients.defaultProps = {
    disabled: false,
    fields: []
}

FormAddClients.propTypes = {
    disabled: PropTypes.bool,
    fields: PropTypes.array,
    form: PropTypes.object
}
export default FormAddClients
