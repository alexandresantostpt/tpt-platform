import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledDropdownPicture = styled.img`
    border-radius: 100%;
    display: block;
    height: 37px;
    width: 37px;
`

const DropdownPicture = ({ image, imageAlt }) => <StyledDropdownPicture alt={imageAlt} src={image} />

DropdownPicture.propTypes = {
    image: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    imageAlt: PropTypes.string.isRequired
}

export default DropdownPicture
