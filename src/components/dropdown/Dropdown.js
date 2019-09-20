import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import { not } from '@utils/functions'

import DropdownPicture from './picture/DropdownPicture'
import DropdownList from './list/DropdownList'
import Icon, { StyledIcon } from '@components/icon/Icon'
import If from '@components/if/If'

const StyledDropdown = styled.div`
    display: inline-block;
    position: relative;
    z-index: 1;
    &:hover {
        cursor: pointer;
    }

    ${StyledIcon} {
        color: #52575e;
        font-size: 2.5rem;
    }
`

const Dropdown = ({ children, icon, image, imageAlt }) => {
    const [expanded, updateExpanded] = useState(false)

    const toggleExpanded = () => updateExpanded(not(expanded))

    return (
        <StyledDropdown onMouseEnter={toggleExpanded} onMouseLeave={toggleExpanded}>
            <If condition={!!image.length} el={<Icon icon={icon} />}>
                <DropdownPicture image={image} imageAlt={imageAlt} />
            </If>
            <DropdownList expanded={expanded}>{children}</DropdownList>
        </StyledDropdown>
    )
}

Dropdown.defaultProps = {
    icon: '',
    image: '',
    imageAlt: ''
}

Dropdown.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    icon: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string
}

export default Dropdown
