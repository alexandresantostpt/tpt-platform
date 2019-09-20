import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { zIndexes } from '@helpers/zIndexes'

const StyledFormError = styled.span`
    background: #ffffff;
    border: ${borders.default};
    border-radius: 10px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.13);
    color: ${({ theme }) => theme.text};
    font-weight: 300;
    padding: 0.75rem 0.875rem;
    position: absolute;
    right: 0;
    top: 47px;
    z-index: ${zIndexes.formError};
    &::before {
        --arrowSize: 10px;
        background: #ffffff;
        border-left: ${borders.default};
        border-top: ${borders.default};
        content: '';
        height: var(--arrowSize);
        position: absolute;
        right: 20px;
        top: -6px;
        transform: rotate(45deg);
        width: var(--arrowSize);
    }
`

const FormError = ({ children }) => <StyledFormError>{children}</StyledFormError>

FormError.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired
}

export { StyledFormError }
export default FormError
