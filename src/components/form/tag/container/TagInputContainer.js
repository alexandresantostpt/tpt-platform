import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { StyledIcon } from '@components/icon/Icon'

const StyledInputContainer = styled.div`
    position: relative;

    ${StyledIcon} {
        color: ${({ theme }) => theme.primaryDark};
        margin-bottom: 0.25rem;
        margin-right: -0.5rem;
        position: absolute;
        right: 0;
    }
`

const TagInputContainer = ({ children }) => <StyledInputContainer>{children}</StyledInputContainer>

TagInputContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default TagInputContainer
