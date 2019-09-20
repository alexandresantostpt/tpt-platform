import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Icon, { StyledIcon } from '@components/icon/Icon'

const StyledAddButon = styled.button`
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    font-stretch: normal;
    font-style: normal;
    font-weight: 300;
    justify-content: flex-start;
    letter-spacing: 0.3px;
    line-height: 1.2;
    margin: 0.5rem;
    padding: 0.5rem 1.5rem 0.5rem 0.1rem;
    text-align: left;

    &:hover {
        background-color: #f4f4f4;
        border-radius: 19px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.07);
    }

    ${StyledIcon} {
        color: ${({ theme }) => theme.primaryDark};
        margin: 0 0.5rem;
    }
`

const AddButton = ({ handleAddTask }) => (
    <StyledAddButon onClick={handleAddTask}>
        <Icon fontSize="0.8rem" icon="plus" />
        {i18n.t('buttons.addTask')}
    </StyledAddButon>
)

AddButton.propTypes = {
    handleAddTask: PropTypes.func.isRequired
}

export default AddButton
