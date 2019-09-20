import { inputTypes } from '@constants/inputTypes'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Field as FinalField } from 'react-final-form'

import { i18n } from '@i18n'

import { borders } from '@helpers/borders'

import FormCheck from '../check/FormCheck'
import FormCity from '../city/FormCity'
import FormClients from '../clients/FormClients'
import FormDate from '../date/FormDate'
import FormError from '../error/FormError'
import FormGroup from '../group/FormGroup'
import FormInput from '../input/FormInput'
import FormInputMask from '../mask/FormInputMask'
import FormLabel from '../label/FormLabel'
import FormOperationDays from '../operationDays/FormOperationDays'
import FormRadio from '../radio/FormRadio'
import FormRangeDate from '../date/FormRangeDate'
import FormRating from '../rating/FormRating'
import FormRequired from '../required/FormRequired'
import FormSelect from '../select/FormSelect'
import FormSuggest from '../suggest/FormSuggest'
import FormTag from '../tag/FormTag'
import FormTextArea from '../textArea/FormTextArea'
import FormTime from '../time/FormTime'
import FormTimeZone from '../timeZone/FormTimeZone'

import Empty from '@components/empty/Empty'
import If from '@components/if/If'

const Field = styled(FinalField)`
    border: none;
    border-bottom: ${borders.default};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: 300;
    padding: 5px;
    transition: all 0.15s linear;
    width: calc(100% - 0.625rem);

    &:focus {
        border-bottom-color: ${({ theme }) => theme.text};
        outline: none;
    }
`

const FormField = props => {
    const {
        disabled,
        label,
        labelCount,
        min,
        name,
        mask,
        required,
        type,
        padding,
        options,
        form,
        maxLength,
        patternExample,
        placeholder,
        rangeDates,
        readOnly,
        resetSuggestions,
        value
    } = props

    /* eslint-disable complexity */
    const renderInput = ({ className, dataCy, id, input, meta }) => {
        const { invalid, submitFailed } = meta
        const isInvalid = invalid && submitFailed
        switch (type) {
            case inputTypes.CHECK:
                return (
                    <FormCheck
                        {...input}
                        disabled={disabled}
                        form={form}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        options={options}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.CITY:
                return (
                    <FormCity
                        {...input}
                        {...props}
                        disabled={disabled}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        value={value}
                    />
                )
            case inputTypes.CLIENTS:
                return <FormClients {...input} {...props} initialValue={input.value || []} isInvalid={isInvalid} readOnly={readOnly} />
            case inputTypes.DATE:
                return (
                    <FormDate
                        disabled={disabled}
                        form={form}
                        initialValue={input.value || null}
                        isInvalid={isInvalid}
                        name={name}
                        rangeDates={rangeDates}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.OPERATION_DAYS:
                return (
                    <FormOperationDays
                        {...input}
                        disabled={disabled}
                        form={form}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.RADIO:
                return (
                    <FormRadio
                        {...input}
                        disabled={disabled}
                        form={form}
                        initialValue={input.value || null}
                        isInvalid={isInvalid}
                        options={options}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.RANGE_DATE:
                return (
                    <FormRangeDate
                        disabled={disabled}
                        form={form}
                        {...props}
                        initialValue={input.value || null}
                        isInvalid={isInvalid}
                        name={name}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.RATING:
                return (
                    <FormRating
                        {...input}
                        {...props}
                        disabled={disabled}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.SELECT:
                return (
                    <FormSelect
                        {...input}
                        {...props}
                        disabled={disabled}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.SUGGEST:
                return (
                    <FormSuggest
                        {...input}
                        {...props}
                        disabled={disabled}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        readOnly={readOnly}
                        resetSuggestions={resetSuggestions}
                    />
                )
            case inputTypes.TAG:
                return (
                    <FormTag
                        {...input}
                        {...props}
                        disabled={disabled}
                        form={form}
                        id={id}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        readOnly={readOnly}
                        required={required}
                        resetSuggestions={resetSuggestions}
                        type={type}
                    />
                )
            case inputTypes.TEXTAREA:
                return (
                    <FormTextArea
                        {...input}
                        className={className}
                        data-cy={dataCy}
                        disabled={disabled}
                        id={id}
                        isInvalid={isInvalid}
                        min={min}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        required={required}
                        type={type}
                        value={props.value || input.value}
                    />
                )
            case inputTypes.TIME:
                return (
                    <FormTime
                        disabled={disabled}
                        form={form}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        name={name}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.TIME_ZONE:
                return (
                    <FormTimeZone
                        disabled={disabled}
                        form={form}
                        initialValue={input.value}
                        isInvalid={isInvalid}
                        name={name}
                        readOnly={readOnly}
                    />
                )
            case inputTypes.MASK:
                return (
                    <FormInputMask
                        {...input}
                        className={className}
                        data-cy={dataCy}
                        disabled={disabled}
                        id={id}
                        isInvalid={isInvalid}
                        options={mask}
                        readOnly={readOnly}
                        required={required}
                        type={type}
                    />
                )
            default:
                return (
                    <FormInput
                        {...input}
                        className={className}
                        data-cy={dataCy}
                        disabled={disabled}
                        id={id}
                        isInvalid={isInvalid}
                        maxLength={maxLength}
                        min={min}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        required={required}
                        type={type}
                        value={props.value || input.value}
                    />
                )
        }
        /* eslint-enable complexity */
    }

    return (
        <FormGroup padding={padding}>
            <If condition={type !== inputTypes.HIDDEN && !!label} el={<Empty />}>
                <FormLabel htmlFor={name}>
                    {i18n.t(`labels.${label}`)}
                    {labelCount && ` ${labelCount}`}
                    {required && <FormRequired />}
                </FormLabel>
            </If>
            <Field {...props} data-cy={`input-${name}`} type="">
                {({ className, 'data-cy': dataCy, id, input, meta }) => {
                    const { invalid, submitFailed } = meta
                    return (
                        <>
                            {renderInput({ className, dataCy, id, input, meta, required })}
                            <If condition={invalid && submitFailed} el={<Empty />}>
                                <FormError>
                                    {i18n.t(meta.error)}
                                    {meta && meta.error && meta.error.includes('invalidPattern') ? ` ${patternExample}` : null}
                                </FormError>
                            </If>
                        </>
                    )
                }}
            </Field>
        </FormGroup>
    )
}

FormField.defaultProps = {
    disabled: false,
    label: '',
    labelCount: '',
    maxLength: 255,
    options: [],
    padding: false,
    pattern: null,
    patternExample: '',
    placeholder: '',
    rangeDates: {},
    readOnly: false,
    value: ''
}

FormField.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.number,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    options: PropTypes.array,
    padding: PropTypes.bool,
    pattern: PropTypes.object,
    patternExample: PropTypes.string,
    placeholder: PropTypes.string,
    rangeDates: PropTypes.object,
    readOnly: PropTypes.bool,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default FormField
