import { events } from '@constants/events'

import Autosuggest from 'react-autosuggest'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { borders } from '@helpers/borders'
import { fieldInvalid } from '@helpers/mixins'

import { isObject } from '@utils/object'
import { not } from '@utils/functions'

import { saveGoogleCityInOurApiAPI } from '@features/travel/api'

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

const StyledSpan = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
`

const StyledText = styled.span`
    color: #3597ec;
    text-decoration: underline;
`

const CitiesSuggest = ({ addTag, disabled, getSuggestions, getSuggestions2, isInvalid, name, resetSuggestions, suggestions }) => {
    const [selectedSuggestion, updateSelectedSuggestion] = useState('')
    const [valueSearched, updateValueSearched] = useState('')
    const [searchOnGoogleApi, updateSearchOnGoogleApi] = useState(false)

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateSelectedSuggestion(''))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    const getSuggestionValue = suggestion => suggestion

    const onSuggestionSelected = (_, { suggestion }) => {
        if (suggestion.type === 'button') {
            updateSearchOnGoogleApi(true)
            updateSelectedSuggestion(valueSearched)
            onSuggestionsFetchRequested({ google: true, value: valueSearched })
        } else {
            if (searchOnGoogleApi) {
                saveGoogleCityInOurApiAPI(suggestion).then(city => addTag({ id: city._id, name: city.name, timezone: city.timezone }))
            } else {
                addTag({ id: suggestion._id, name: suggestion.name, timezone: suggestion.timezone })
            }
            updateSelectedSuggestion('')
            resetSuggestions && resetSuggestions()
        }
    }

    const onSuggestionsFetchRequested = ({ google, value }) => {
        if (google) {
            getSuggestions2(value)
        } else {
            getSuggestions(value)
            updateSearchOnGoogleApi(false)
            updateValueSearched(value)
        }
    }

    const onChange = (_, { newValue }) => {
        if (isObject(newValue)) {
            return
        }
        updateSelectedSuggestion(newValue)
    }

    const renderSuggestion = suggestion => {
        const suggest = []
        if (suggestion.type === 'button') {
            return (
                <StyledSpan>
                    <StyledText>{i18n.t('link.searchMoreDestinations')}</StyledText>
                </StyledSpan>
            )
        }
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

    const inputProps = {
        disabled: disabled,
        onChange: onChange,
        value: selectedSuggestion
    }

    not(searchOnGoogleApi) && (suggestions = [...suggestions, { name: valueSearched, type: 'button' }])

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

CitiesSuggest.defaultProps = {
    disabled: false,
    fieldsToChange: [],
    name: '',
    resetSuggestions: null,
    suggestions: []
}

CitiesSuggest.propTypes = {
    addTag: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    fieldsToChange: PropTypes.arrayOf(PropTypes.object),
    form: PropTypes.object.isRequired,
    getSuggestions: PropTypes.func.isRequired,
    getSuggestions2: PropTypes.func.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string,
    resetSuggestions: PropTypes.func,
    suggestions: PropTypes.array
}

export default CitiesSuggest
