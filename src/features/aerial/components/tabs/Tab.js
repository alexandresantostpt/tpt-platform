import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { StyledIcon } from '@components/icon/Icon'
import { colors } from '@helpers/colors'

const StyledTab = styled.li`
    background: white;
    border: solid 0.032rem rgba(112, 112, 112, 0.42);
    border-top: 0;
    box-shadow: ${({ active }) => active && '0 3px 6px 0 rgba(0, 0, 0, 0.16)'};
    color: #747474;
    cursor: pointer;
    font-weight: ${({ active, bolder }) => (active || bolder ? 'bolder' : '300')};
    padding: 0.005rem 0;
    text-align: center;
    width: 100%;

    ${StyledIcon} {
        color: ${colors.darkGray};
        display: none;
        margin: 0;
        z-index: 10;
    }
    &:hover {
        ${StyledIcon} {
            display: inline-block;
        }
    }

    &:not(:first-child) {
        border-left: none;
    }

    &:first-child {
        border-bottom-left-radius: 0.3rem;
    }

    &:last-child {
        border-bottom-right-radius: 0.3rem;
    }
`

const Tab = ({ active, bolder, children, onClick }) => (
    <StyledTab active={active} bolder={bolder} onClick={onClick}>
        {children}
    </StyledTab>
)

Tab.defaultProps = {
    active: false,
    bolder: false,
    children: null,
    onClick: null
}

Tab.propTypes = {
    active: PropTypes.bool,
    bolder: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    onClick: PropTypes.func
}
export default Tab
