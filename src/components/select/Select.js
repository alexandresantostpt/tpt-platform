import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { isNotEmpty, not } from '@utils/functions'

import { i18n } from '@i18n'

import SelectContainer from './container/SelectContainer'
import SelectList from './list/SelectList'

import { SelectText } from './text/SelectText'

const StyledSelect = styled.div`
    display: inline-block;
    padding: 0.56rem 1rem;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    ${SelectText} {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const Select = ({ hasDefault, icon, options: currentOptions, onSelect, placeholder, value }) => {
    const [expanded, updateExpanded] = useState(false)
    const [optionSelected, updateOptionSelected] = useState({})
    const [options, updateOptions] = useState([])
    const DEFAULT_OPTION = { text: placeholder || i18n.t('placeholders.select'), value: undefined }

    const container = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', outsideClick)
        return () => document.removeEventListener('mousedown', outsideClick)
    })

    useEffect(() => {
        if (isNotEmpty(value)) {
            updateOptionSelected(currentOptions.find(item => item.value === value))
        } else {
            updateOptionSelected({})
        }
    }, [value])

    useEffect(() => {
        const newOptions = [...currentOptions]
        if (hasDefault) {
            newOptions.splice(0, 0, DEFAULT_OPTION)
        }
        updateOptions(newOptions)
    }, [currentOptions])

    const handleDropdownClick = () => updateExpanded(not(expanded))

    const handleSelectClick = option => {
        updateExpanded(not(expanded))
        updateOptionSelected(option)
        onSelect(option)
    }

    const outsideClick = ({ target }) => {
        if (container.current && !container.current.contains(target)) {
            updateExpanded(false)
        }
    }

    return (
        <StyledSelect ref={process.env.__TEST__ ? null : container}>
            <SelectContainer expanded={expanded} icon={icon} onClick={handleDropdownClick} optionSelected={optionSelected} />
            <SelectList expanded={expanded} onSelect={handleSelectClick} options={options} />
        </StyledSelect>
    )
}

Select.defaultProps = {
    hasDefault: true,
    icon: '',
    placeholder: '',
    value: ''
}

Select.propTypes = {
    hasDefault: PropTypes.bool,
    icon: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Select
