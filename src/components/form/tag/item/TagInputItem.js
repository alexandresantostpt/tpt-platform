import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon from '@components/icon/Icon'
import If from '@components/if/If'

import { not } from '@utils/functions'

import { colors } from '@helpers/colors'

const StyledItem = styled.li`
    border-radius: 5px;
    color: ${colors.text};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    padding: 0.2rem;
`

const TagInputItem = ({ children, disabled, onClick }) => (
    <StyledItem disabled>
        {children}
        <If condition={not(disabled)}>
            <Icon fontSize={'1.5rem'} icon={'times'} onClick={onClick} pointer={disabled} />
        </If>
    </StyledItem>
)

TagInputItem.defaultProps = {
    disabled: false
}

TagInputItem.propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

export default TagInputItem
