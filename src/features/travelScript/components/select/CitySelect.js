import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { formatOptions } from '@utils/select'

import Select from '@components/select/Select'
import SelectContainer from '@components/select/container/SelectContainer'

const StyledDayNumber = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.primary};
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    margin-right: 1rem;
`

const StyledCitySelect = styled.div`
    align-items: center;
    display: flex;
    width: 100%;
`

const StyledLine = styled.div`
    background: ${({ theme }) => theme.primary};
    height: 1px;
    width: 100%;
`

const CitySelect = ({ cities, dayNumber, onSelect, selectedCity }) => (
    <StyledCitySelect>
        <StyledDayNumber>{dayNumber}</StyledDayNumber>
        {cities.length === 1 ? (
            <SelectContainer expanded={false} optionSelected={{ text: selectedCity.name, value: selectedCity }} />
        ) : (
            <Select
                onSelect={option => onSelect(option)}
                options={formatOptions(cities, 'name', 'name')}
                value={selectedCity ? selectedCity.name : ''}
            />
        )}
        <StyledLine />
    </StyledCitySelect>
)

CitySelect.defaultProps = {
    cities: [],
    selectedCity: ''
}

CitySelect.propTypes = {
    cities: PropTypes.array,
    dayNumber: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedCity: PropTypes.object
}

export default CitySelect
