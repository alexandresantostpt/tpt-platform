import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledGroupItem = styled.li`
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: bolder;
    list-style: none;
    padding: 0.8rem 0.5rem;
    white-space: nowrap;
`

const GroupItem = ({ value }) => <StyledGroupItem>{value}</StyledGroupItem>

GroupItem.propTypes = {
    value: PropTypes.string.isRequired
}

export default GroupItem
