import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'

import Empty from '@components/empty/Empty'
import If from '@components/if/If'

import { StyledFormError } from '@components/form/error/FormError'

const StyledContainer = styled.div`
    position: absolute;
    right: 22px;
    top: 22px;
`

const StyledError = styled(StyledFormError)`
    right: -13px;
    top: -60px;
    white-space: nowrap;
    &::before {
        border-bottom: ${borders.default};
        border-left: none;
        border-right: ${borders.default};
        border-top: none;
        bottom: -6px;
        top: initial;
    }
`

const StyledIcon = styled.span`
    background: #ff8080;
    border-radius: 100%;
    color: #ffffff;
    font-size: 1.2rem;
    margin-right: 0.5rem;
    padding: 0 0.5rem;
    vertical-align: middle;
`

const StyledUploadButton = styled.label`
    align-items: center;
    align-self: start;
    background-color: ${colors.lightPKeriwinkle};
    border-radius: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.38);
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 24px;
    font-weight: bold;
    height: 28px;
    justify-content: center;
    line-height: 1;
    width: 28px;
`

const InputFile = styled.input`
    position: absolute;
    visibility: hidden;
`

const UploadButton = ({ addImage, required }) => {
    const selectImage = event => addImage(event.target.files[0])

    return (
        <StyledContainer>
            <If condition={required} el={<Empty />}>
                <StyledError>
                    <StyledIcon>!</StyledIcon>
                    {i18n.t('forms.validations.fieldRequired')}
                </StyledError>
            </If>
            <StyledUploadButton htmlFor="inputFile">+</StyledUploadButton>
            <InputFile accept="image/png, image/jpeg" id="inputFile" onChange={selectImage} type="file" />
        </StyledContainer>
    )
}

UploadButton.propTypes = {
    addImage: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired
}

export default UploadButton
