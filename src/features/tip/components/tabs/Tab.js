import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTab = styled.li`
    background: white;
    border: solid 0.032rem rgba(112, 112, 112, 0.42);
    border-top: 0;
    box-shadow: ${({ active }) => active && '0 3px 6px 0 rgba(0, 0, 0, 0.16)'};
    cursor: pointer;
    font-weight: ${({ active }) => (active ? 'normal' : '300')};
    padding: 0.005rem 0;
    text-align: center;
    width: 100%;

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

const Tab = ({ active, children, onClick }) => (
    <StyledTab active={active} onClick={onClick}>
        {children}
    </StyledTab>
)

Tab.defaultProps = {
    active: false,
    children: null
}

Tab.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    onClick: PropTypes.func.isRequired
}
export default Tab
