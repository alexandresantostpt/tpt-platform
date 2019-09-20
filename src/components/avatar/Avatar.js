import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import If from '../if/If'
import DefaultAvatar from './DefaultAvatar'
import { isNotNull } from '@/utils/functions'

const StyledContainer = styled.div`
    background: url(${({ image }) => image}) no-repeat center;
    background-size: cover;
    border-radius: 7.75rem;
    height: ${({ size }) => size}rem;
    margin-left: 0.3125rem;
    width: ${({ size }) => size}rem;
`

const Avatar = ({ alt, size, image, ...props }) => (
    <>
        <If condition={isNotNull(image)} el={<DefaultAvatar alt={alt} data-tip={alt} size={size} {...props} />}>
            <StyledContainer data-tip={alt} image={image} size={size} {...props} />
        </If>
        <ReactTooltip effect="solid" place="top" type="dark" />
    </>
)

Avatar.defaultProps = {
    image: null,
    onClick: null,
    size: 2.3125
}

Avatar.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.number
}

export default Avatar
