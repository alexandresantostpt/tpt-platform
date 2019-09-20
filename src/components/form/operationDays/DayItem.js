import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { colors } from '@helpers/colors'

const StyledDayItem = styled.div`
    align-items: center;
    border: solid 1px ${({ active, theme }) => (active ? theme.primaryDark : colors.disabled)};
    border-radius: 100%;
    color: ${({ active, theme }) => (active ? theme.primaryDark : colors.disabled)};
    cursor: pointer;
    display: flex;
    font-size: 0.8rem;
    height: 1.4rem;
    justify-content: center;
    width: 1.4rem;
`

const DayItem = ({ active, day, onClick }) => (
    <StyledDayItem active={active} onClick={() => onClick(day)}>
        {i18n.t(`weekDays.abbreviation.${day}`)}
    </StyledDayItem>
)

DayItem.propTypes = {
    active: PropTypes.bool.isRequired,
    day: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default DayItem
