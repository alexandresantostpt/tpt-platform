import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { not } from '@utils/functions'

import Icon, { StyledIcon } from '@components/icon/Icon'

import SelectList from '../select/list/SelectList'

const ListWrapper = styled.div`
    margin-top: 0.2rem;
    position: relative;
    width: calc(100% - 0.8rem);
`

const StyledSearchBar = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    padding: 0.5rem;

    ${StyledIcon} {
        cursor: pointer;
    }

    input {
        border: 0;
        flex: 1;

        :focus {
            outline: unset;
        }
    }
`

const SearchBar = ({ categories, onFilter }) => {
    const [filter, updateFilter] = useState('')
    const [expanded, updateExpanded] = useState(false)
    const [selectedItems, updateSelectedItems] = useState([])

    const container = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', outsideClick)
        return () => document.removeEventListener('mousedown', outsideClick)
    })

    const emitFilterChange = (newFilter, newCategories) => onFilter({ categories: newCategories, filter: newFilter })

    const handleFilterClick = () => updateExpanded(not(expanded))

    const handleFilterChange = event => {
        const newFilter = event.target.value
        updateFilter(newFilter)
        emitFilterChange(newFilter, selectedItems)
    }

    const handleSelectClick = (_, subCategory) => {
        let newSelectedItems = [...selectedItems]
        if (newSelectedItems.find(item => item === subCategory.describe)) {
            newSelectedItems = newSelectedItems.filter(item => item !== subCategory.describe)
        } else {
            newSelectedItems.push(subCategory.describe)
        }
        updateSelectedItems(newSelectedItems)
        emitFilterChange(filter, newSelectedItems)
    }

    const outsideClick = ({ target }) => {
        if (container.current && !container.current.contains(target)) {
            updateExpanded(false)
        }
    }

    return (
        <>
            <StyledSearchBar>
                <Icon fontSize="1.2rem" icon="search" />
                <input onChange={handleFilterChange} placeholder={i18n.t('placeholders.searchTip')} type="text" value={filter} />
                <Icon fontSize="1.3rem" icon="outline-filter" onClick={handleFilterClick} />
            </StyledSearchBar>
            <ListWrapper ref={process.env.__TEST__ ? null : container}>
                <SelectList categories={categories} expanded={expanded} onSelect={handleSelectClick} selectedItems={selectedItems} />
            </ListWrapper>
        </>
    )
}
SearchBar.defaultProps = {
    categories: []
}

SearchBar.propTypes = {
    categories: PropTypes.array,
    onFilter: PropTypes.func.isRequired
}

export default SearchBar
