import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { not } from '@utils/functions'

import SelectContainer from './container/SelectContainer'
import SelectList from './list/SelectList'

const StyledSelect = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    display: inline-block;
    margin-bottom: 2rem;
    padding: 0.2rem 0.5rem;
    position: relative;
    width: calc(100% - 0.625rem);
`

const Select = ({ categories, onChange, value }) => {
    const [expanded, updateExpanded] = useState(false)
    const [optionSelected, updateOptionSelected] = useState('')
    const [optionsSelected, updateOptionsSelected] = useState([])
    const container = useRef()

    useEffect(() => {
        if (value) {
            const findCategory = categories.find(category =>
                category.subCategories.some(subCategory => subCategory.describe === value)
            )
            if (findCategory) {
                const findSubCategory = findCategory.subCategories.find(subCategory => subCategory.describe === value)
                if (findSubCategory) {
                    onChange(findCategory, findSubCategory)
                    updateOptionSelected(value)
                }
            }
        }
    }, [value])

    useEffect(() => {
        document.addEventListener('mousedown', outsideClick)
        return () => document.removeEventListener('mousedown', outsideClick)
    })

    const checkOptionsSelected = newOption => {
        const indexNewOption = optionsSelected.indexOf(newOption)
        if (indexNewOption >= 0) {
            const newOptionsSelected = [...optionsSelected]
            newOptionsSelected.splice(indexNewOption, 1)
            updateOptionsSelected(newOptionsSelected)
        } else {
            updateOptionsSelected([newOption])
        }
    }

    const handleDropdownClick = () => updateExpanded(not(expanded))

    const handleSelectClick = (category, subCategory) => {
        const { describe } = subCategory
        updateExpanded(not(expanded))
        updateOptionSelected(describe)
        checkOptionsSelected(describe)
        onChange(category, subCategory)
    }

    const outsideClick = ({ target }) => {
        if (container.current && !container.current.contains(target)) {
            updateExpanded(false)
        }
    }

    return (
        <StyledSelect onClick={handleDropdownClick} ref={process.env.__TEST__ ? null : container}>
            <SelectContainer expanded={expanded} onClick={handleDropdownClick} optionSelected={optionSelected} />
            <SelectList categories={categories} expanded={expanded} onSelect={handleSelectClick} selectedItems={optionsSelected} />
        </StyledSelect>
    )
}

Select.defaultProps = {
    categories: [],
    value: {}
}

Select.propTypes = {
    categories: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default Select
