import { events } from '@constants/events'

import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import PubSub from 'pubsub-js'
import Icon, { StyledIcon } from '@components/icon/Icon'

import { i18n } from '@i18n'

const StyledTableHeaderColumn = styled.th`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: normal;
    padding: 0.5rem 1rem;
    text-align: left;

    ${StyledIcon} {
        font-size: 1rem;
        font-weight: 600;
    }
`

const TableHeaderColumn = ({ children, column }) => {
    const isActions = column === 'actions'
    const DOWN = 'down',
        UP = 'up'
    const [icon, setIcon] = useState(DOWN)

    const handleClick = () => {
        PubSub.publish(events.SORT_TABLE, column)
        icon === DOWN ? setIcon(UP) : setIcon(DOWN)
    }
    return (
        <StyledTableHeaderColumn onClick={() => handleClick()}>
            {i18n.t(`labels.${children}`)} {isActions ? null : <Icon icon={`arrow-${icon}`} />}
        </StyledTableHeaderColumn>
    )
}

TableHeaderColumn.defaultProps = {
    column: ''
}

TableHeaderColumn.propTypes = {
    children: PropTypes.string.isRequired,
    column: PropTypes.string
}

export default TableHeaderColumn
