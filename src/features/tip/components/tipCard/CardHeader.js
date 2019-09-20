import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon, { StyledIcon } from '@components/icon/Icon'

const StyledCardHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;

    ${StyledIcon} {
        margin-right: -1rem;
        margin-top: -1rem;
    }
`

const StyledButton = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
`

const CardHeader = ({ onRemove, onSelect, tip }) => (
    <StyledCardHeader>
        {tip.name}
        <StyledButton onClick={() => (onSelect ? onSelect(tip) : onRemove(tip))}>
            <Icon fontSize={'2rem'} icon={onSelect ? 'rounded-plus' : 'rounded-times'} />
        </StyledButton>
    </StyledCardHeader>
)

CardHeader.defaultProps = {
    onRemove: null,
    onSelect: null
}

CardHeader.propTypes = {
    onRemove: PropTypes.func,
    onSelect: PropTypes.func,
    tip: PropTypes.object.isRequired
}

export default CardHeader
