import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { colors } from '@helpers/colors'

import GroupItem from '../item/GroupItem'
import SubGroupItem from '../item/SubGroupItem'

import { categoriesTypes } from '../../../constants'

const StyledSelectList = styled.ul`
    background: ${colors.white};
    border-radius: 0.1rem;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.18);
    color: ${({ theme }) => theme.text};
    height: 20rem;
    left: 0;
    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
    overflow: auto;
    padding: 0.5rem;
    position: absolute;
    width: 100%;
    z-index: ${({ expanded }) => (expanded ? 1052 : -1)};
`

const SelectList = ({ categories, expanded, onSelect, selectedItems }) => (
    <StyledSelectList expanded={expanded}>
        {categoriesTypes.map((type, index) => (
            <span key={index}>
                <GroupItem value={i18n.t(`categories.${type}`)} />
                {categories
                    .filter(item => item.code === type)
                    .map(data => (
                        <SubGroupItem data={data} key={data._id} onClick={onSelect} selectedItems={selectedItems} />
                    ))}
            </span>
        ))}
    </StyledSelectList>
)

SelectList.defaultProps = {
    selectedItems: []
}

SelectList.propTypes = {
    categories: PropTypes.array.isRequired,
    expanded: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedItems: PropTypes.array
}

export default SelectList
