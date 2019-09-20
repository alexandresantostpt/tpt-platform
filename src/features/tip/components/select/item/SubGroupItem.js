import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import If from '@components/if/If'

import SelectItem from './SelectItem'

const StyledSubGroupItem = styled.li`
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: 400;
    list-style: none;
    padding: 0.2rem 0.5rem;
    white-space: nowrap;
`

const SubGroupItem = ({ data, onClick, selectedItems }) => {
    const { legend, subCategories } = data

    return (
        <span>
            <If condition={!!legend}>
                <StyledSubGroupItem>{legend}</StyledSubGroupItem>
            </If>
            {subCategories.map((category, index) => (
                <SelectItem
                    category={category}
                    data={data}
                    key={index}
                    onClick={onClick}
                    selected={!!selectedItems.find(item => item === category.describe)}
                />
            ))}
        </span>
    )
}

SubGroupItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    selectedItems: PropTypes.array.isRequired
}

export default SubGroupItem
