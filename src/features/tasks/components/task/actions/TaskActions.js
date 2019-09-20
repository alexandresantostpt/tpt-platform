import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon, { StyledIcon } from '@components/icon/Icon'

const StyledTaskActions = styled.span`
    flex: 1;

    &:hover {
        ${StyledIcon} {
            visibility: unset;
        }
    }

    ${StyledIcon} {
        color: ${({ theme }) => theme.text};
        cursor: pointer;
        margin: 0;
        visibility: hidden;
    }
`

const TaskActions = ({ removeTask }) => (
    <StyledTaskActions>
        <Icon fontSize={'1.5rem'} icon="times" onClick={removeTask} />
    </StyledTaskActions>
)

TaskActions.propTypes = {
    removeTask: PropTypes.func.isRequired
}

export default TaskActions
