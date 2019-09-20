import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import { not } from '@utils/functions'
import Icon, { StyledIcon } from '@components/icon/Icon'

import CollapseItems from './CollapseItems'
import { colors } from '@/helpers/colors'

const StyledCollapseDivider = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    ${StyledIcon} {
        font-size: 0.9rem;
    }
`

const StyledHeader = styled.div`
    color: ${colors.text};
    font-size: 1rem;
    font-weight: 400;
`

const CollapseDivider = props => {
    const { children, initialState, title } = props
    const [visible, updateVisible] = useState(initialState)
    return (
        <StyledCollapseDivider>
            <StyledHeader>
                {title}
                <Icon icon={visible ? 'arrow-up' : 'arrow-down'} onClick={() => updateVisible(not(visible))} />
            </StyledHeader>

            <CollapseItems visible={visible}>{children}</CollapseItems>
        </StyledCollapseDivider>
    )
}

CollapseDivider.defaultProps = {
    children: null,
    initialState: true,
    title: ''
}

CollapseDivider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    initialState: PropTypes.bool,
    title: PropTypes.string
}

export default CollapseDivider

export { StyledHeader }
