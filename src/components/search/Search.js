import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Icon from '@components/icon/Icon'

const StyledSearch = styled.div`
    margin-right: 1rem;
    position: relative;
    width: 77%;

    .icon-search {
        color: #858899;
        position: absolute;
        right: 0.3rem;
        top: 0.7rem;
    }
`

const StyledSearchInput = styled.input`
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    height: 2.15rem;
    opacity: 0.45;
    padding: 0.6875rem 1rem;
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
`

const Search = ({ onType, placeholder }) => (
    <StyledSearch>
        <StyledSearchInput
            onChange={({ target }) => onType(target.value)}
            placeholder={placeholder || i18n.t('placeholders.search')}
        />
        <Icon fontSize="0.9rem" icon={'search'} />
    </StyledSearch>
)

Search.defaultProps = {
    placeholder: ''
}

Search.propTypes = {
    onType: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

export default Search
