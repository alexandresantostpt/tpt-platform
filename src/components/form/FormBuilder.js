import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { forwardRef, useEffect } from 'react'
import styled from 'styled-components'

import { isEqual } from '@utils/functions'
import { validate } from '@utils/form'

import FormContainer from './container/FormContainer'
import FormField from './field/FormField'

import { Form as FinalForm } from 'react-final-form'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const FormBuilder = forwardRef(
    (
        {
            children,
            clients,
            disabled,
            fields,
            fieldChildren,
            fieldsToValidate,
            getSuggestions,
            getSuggestions2,
            initialValues,
            onSubmit,
            rangeDates,
            resetSuggestions,
            suggestions,
            updatePanelImage
        },
        ref
    ) => {
        useEffect(() => {
            PubSub.subscribe(events.FORM_RESET, () => ref.current && ref.current.form.reset())
        }, [])

        return (
            <FinalForm
                initialValues={initialValues}
                initialValuesEqual={(obj1, obj2) => isEqual(obj1, obj2)}
                onSubmit={onSubmit}
                ref={ref}
                render={({ handleSubmit }) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <FormContainer>
                            {children}
                            {fields.map(field => (
                                <FormField
                                    {...field}
                                    clients={clients}
                                    disabled={disabled}
                                    fieldChildren={fieldChildren}
                                    form={ref}
                                    getSuggestions={getSuggestions}
                                    getSuggestions2={getSuggestions2}
                                    key={field.name}
                                    rangeDates={rangeDates}
                                    resetSuggestions={resetSuggestions}
                                    suggestions={suggestions}
                                    updatePanelImage={updatePanelImage}
                                />
                            ))}
                        </FormContainer>
                    </StyledForm>
                )}
                validate={values => validate(values, fieldsToValidate || fields)}
            />
        )
    }
)

FormBuilder.defaultProps = {
    children: null,
    disabled: false,
    fieldChildren: null,
    fields: [],
    initialValues: {},
    rangeDates: {},
    suggestions: [],
    type: null
}

FormBuilder.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    disabled: PropTypes.bool,
    fieldChildren: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    fields: PropTypes.array,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    rangeDates: PropTypes.object,
    suggestions: PropTypes.array,
    type: PropTypes.string
}

export default FormBuilder
