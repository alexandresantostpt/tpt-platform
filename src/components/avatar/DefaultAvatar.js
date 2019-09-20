import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.div`
    align-items: center;
    background-color: #dcdcdc;
    border-radius: 7.75rem;
    display: flex;
    height: ${({ size }) => size}rem;
    justify-content: center;
    margin-left: 0.3125rem;
    width: ${({ size }) => size}rem;
`

const DefaultAvatar = ({ alt, size, ...props }) => {
    let altInitials = alt.match(/\b\w/g) || []
    altInitials = ((altInitials.shift() || '') + (altInitials.pop() || '')).toUpperCase()

    return (
        <AvatarContainer size={size} {...props}>
            {altInitials}
        </AvatarContainer>
    )
}

DefaultAvatar.defaultProps = {
    size: 2.3125
}

DefaultAvatar.propTypes = {
    alt: PropTypes.string.isRequired,
    size: PropTypes.number
}

export default DefaultAvatar
