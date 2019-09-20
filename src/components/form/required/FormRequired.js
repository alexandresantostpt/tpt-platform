import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

const StyledFormRequired = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    line-height: 0.8rem;
    margin-bottom: 0.9375rem;
    opacity: 0.7;
`

const FormRequired = () => <StyledFormRequired>{i18n.t('labels.requiredField')}</StyledFormRequired>

export default FormRequired
