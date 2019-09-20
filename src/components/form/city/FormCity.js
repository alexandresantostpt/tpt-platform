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

const FormCity = ({ disabled, form, getSuggestions, name, initialValue, suggestions, value }) => {
    const [selectedCity, updateSelectedCity] = useState('')

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateSelectedCity(''))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    useEffect(() => {
        if (initialValue && initialValue.name) {
            updateSelectedCity(initialValue.name)
            form.current.form.change(`_${name}`, JSON.stringify(initialValue))
        }
    }, [initialValue])

    const onChange = (_, { newValue }) => {
        if (isObject(newValue)) {
            return
        }

        updateSelectedCity(newValue)
        if (value) {
            if (value === 'object') {
                const city = suggestions.find(suggest => suggest.name === newValue)
                if (city) {
                    form.current.form.change(name, city.name)
                    form.current.form.change(`_${name}`, JSON.stringify(city))
                    return
                }
            }
        }
        form.current.form.change(name, newValue)
    }

    const onSuggestionsFetchRequested = ({ value: newValue }) => getSuggestions(newValue)

    const renderSuggestion = suggestion => {
        const suggest = []
        if (suggestion.name) {
            suggest.push(suggestion.name)
        }
        if (suggestion.state) {
            suggest.push(suggestion.state)
        }
        if (suggestion.country) {
            suggest.push(suggestion.country)
        }
        return <span>{suggest.join(', ')}</span>
    }

    return (
        <StyledAutosuggest>
            <Autosuggest
                getSuggestionValue={city => city.name}
                inputProps={{ disabled, onChange, value: selectedCity }}
                onSuggestionsClearRequested={() => ''}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                renderSuggestion={renderSuggestion}
                suggestions={suggestions}
            />
        </StyledAutosuggest>
    )
}

FormCity.defaultProps = {
    disabled: false,
    initialValue: null,
    suggestions: [],
    value: null
}

FormCity.propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.object.isRequired,
    getSuggestions: PropTypes.func.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    suggestions: PropTypes.array,
    value: PropTypes.string
}

export default FormCity
