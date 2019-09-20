import { events } from '@constants/events'

import Autosuggest from 'react-autosuggest'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { fieldInvalid } from '@helpers/mixins'

import { isObject } from '@utils/functions'

const StyledAutosuggest = styled.div`
    & .react-autosuggest__input {
        border: none;
        border-bottom: ${borders.default};
        color: ${({ theme }) => theme.text};
        font-size: 1rem;
        font-weight: 300;
        ${fieldInvalid};
        padding: 5px;
        transition: all 0.15s linear;
        width: calc(100% - 0.625rem);
        &:focus {
            border-bottom-color: ${({ theme }) => theme.text};
            outline: none;
        }
    }
`

const FormSuggest = ({
    disabled,
    form,
    getSuggestions,
    initialValue,
    fieldsToChange,
    isInvalid,
    name,
    resetSuggestions,
    suggestions,
    updatePanelImage
}) => {
    const [selectedSuggestion, updateSelectedSuggestion] = useState('')

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateSelectedSuggestion(''))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    useEffect(() => {
        updateSelectedSuggestion(initialValue)
    }, [initialValue])

    const getSuggestionValue = suggestion => suggestion.name

    const onSuggestionSelected = (_, { suggestion }) => {
        fieldsToChange.map(item => form.current.form.change(item.field, suggestion[item.name]))
        updatePanelImage && suggestion.image && PubSub.publish(events.UPDATE_IMAGE, suggestion.image)
        resetSuggestions()
    }

    const onSuggestionsFetchRequested = ({ value }) => getSuggestions(value)

    const onChange = (_, { newValue }) => {
        if (isObject(newValue)) {
            return
        }
        updateSelectedSuggestion(newValue)
        form.current.form.change(name, newValue)
    }

    const renderSuggestion = suggestion => <span>{suggestion.name}</span>

    const inputProps = {
        disabled: disabled,
        onChange: onChange,
        value: selectedSuggestion
    }

    return (
        <StyledAutosuggest isInvalid={isInvalid}>
            <Autosuggest
                getSuggestionValue={getSuggestionValue}
                id={name}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
                onSuggestionsClearRequested={() => ''}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                renderSuggestion={renderSuggestion}
                suggestions={suggestions}
            />
        </StyledAutosuggest>
    )
}

FormSuggest.defaultProps = {
    disabled: false,
    fieldsToChange: [],
    initialValue: null,
    name: '',
    suggestions: [],
    updatePanelImage: false
}

FormSuggest.propTypes = {
    disabled: PropTypes.bool,
    fieldsToChange: PropTypes.arrayOf(PropTypes.object),
    form: PropTypes.object.isRequired,
    getSuggestions: PropTypes.func.isRequired,
    initialValue: PropTypes.string,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string,
    resetSuggestions: PropTypes.func.isRequired,
    suggestions: PropTypes.array,
    updatePanelImage: PropTypes.bool
}

export default FormSuggest
