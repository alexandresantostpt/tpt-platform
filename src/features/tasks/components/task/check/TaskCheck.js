import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon, { StyledIcon } from '@components/icon/Icon'
import { borders } from '@helpers/borders'

const StyledTaskCheck = styled.span`
    flex: 1;
    position: relative;
    vertical-align: middle;

    & button {
        visibility: ${({ done }) => (done ? 'hidden' : 'unset')};
    }

    &:hover {
        ${StyledIcon} {
            visibility: unset;
        }
        button {
            visibility: hidden;
        }
    }

    ${StyledIcon} {
        bottom: -12px;
        color: ${({ theme }) => theme.primaryDark};
        cursor: pointer;
        font-size: 2rem;
        left: -9px;
        margin-bottom: 0.25rem;
        margin-right: 0.75rem;
        position: absolute;
        visibility: ${({ done }) => (done ? 'unset' : 'hidden')};
    }
`
const StyledButton = styled.button`
    background-color: #ffffff;
    border: ${borders.check};
    border-radius: 100%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.11);
    height: 14px;
    width: 14px;
`

const TaskCheck = ({ done, switchTaskStatus }) => (
    <StyledTaskCheck done={done} onClick={switchTaskStatus}>
        <StyledButton />
        <Icon icon="check" />
    </StyledTaskCheck>
)

TaskCheck.propTypes = {
    done: PropTypes.bool.isRequired,
    switchTaskStatus: PropTypes.func.isRequired
}

export default TaskCheck
