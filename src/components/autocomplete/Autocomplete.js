import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { isObject } from '@utils/functions'

import Autosuggest from 'react-autosuggest'
import Icon from '@components/icon/Icon'

const StyledAutosuggest = styled.div`
    margin-right: 1rem;
    position: relative;
    width: 75%;

    & .icon {
        left: 0.5rem;
        position: absolute;
    }

    & .react-autosuggest__input {
        border: 1px solid #f2f2f2;
        border-radius: 10px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        box-sizing: border-box;
        color: ${({ theme }) => theme.text};
        font-size: 1rem;
        height: 2.15rem;
        opacity: 0.45;
        padding: 0.6875rem 1.625rem;
        width: 100%;

        &:-moz-placeholder {
            color: rgba(0, 0, 0, 0.45);
            text-align: center;
        }

        &:-ms-input-placeholder {
            color: rgba(0, 0, 0, 0.45);
            text-align: center;
        }

        &::-moz-placeholder {
            color: rgba(0, 0, 0, 0.45);
            text-align: center;
        }

        &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.45);
            text-align: center;
        }

        &:focus {
            outline: none;
        }
    }
`

const Autocomplete = ({ displayValue, icon, onChange, onClear, onSearch, onSelect, placeholder, suggestions, value }) => {
    const inputProps = {
        onChange: (_, { newValue }) => {
            if (isObject(newValue)) {
                return
            }
            onChange(newValue)
        },
        placeholder,
        value
    }

    const onSuggestionSelected = (_, args) => onSelect(args.suggestion)

    const onSuggestionsClearRequested = () => value === '' && onClear()

    const onSuggestionsFetchRequested = ({ value: fetchValue }) => onSearch(fetchValue)

    const renderSuggestion = suggestion => <div>{displayValue(suggestion)}</div>

    return (
        <StyledAutosuggest>
            <Icon icon={icon} />
            <Autosuggest
                getSuggestionValue={displayValue}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                renderSuggestion={renderSuggestion}
                suggestions={suggestions}
            />
        </StyledAutosuggest>
    )
}

Autocomplete.defaultProps = {}

Autocomplete.propTypes = {
    displayValue: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    suggestions: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired
}

export default Autocomplete
