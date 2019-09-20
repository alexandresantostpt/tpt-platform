import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import { not } from '@utils/functions'
import Icon, { StyledIcon } from '@components/icon/Icon'

import CollapseItems from './CollapseItems'

const StyledCollapseItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    ${StyledIcon} {
        align-self: center;
        color: ${({ theme }) => theme.primaryDark};
        font-size: 1.7rem;
        margin-bottom: 0.25rem;
        margin-right: 0;

        :hover {
            color: ${({ theme }) => theme.primaryLight};
        }
    }
`

const Collapse = props => {
    const { children, initialState } = props
    const [visible, updateVisible] = useState(initialState)
    return (
        <StyledCollapseItem>
            <CollapseItems visible={visible}>{children}</CollapseItems>
            <Icon icon={visible ? 'arrow-up' : 'arrow-down'} onClick={() => updateVisible(not(visible))} />
        </StyledCollapseItem>
    )
}

Collapse.defaultProps = {
    children: null,
    initialState: true
}

Collapse.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    initialState: PropTypes.bool
}

export { StyledCollapseItem }
export default Collapse
