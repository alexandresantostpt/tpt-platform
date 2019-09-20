import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'
import { i18n } from '@i18n'
import Icon from '@/components/icon/Icon'
import If from '@/components/if/If'
import { not } from '@/utils/functions'

const StyledArea = styled.div`
    border: dashed 0.6px ${colors.text};
    border-radius: 14px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 2.5em 0;
    padding: 26px 32px 32px;
    text-align: center;
`

const StyledLabel = styled.label`
    color: ${colors.text};
    cursor: pointer;
    font-size: 19px;
    font-weight: 300;
    letter-spacing: 0.2px;
`

const InputFile = styled.input`
    position: absolute;
    visibility: hidden;
`

const LogoImage = styled.img`
    max-height: 250px;
    object-fit: cover;
`

const UploadArea = ({ addImage, image }) => {
    const [imageUploaded, updateImageUploaded] = useState(null)
    const uploadInput = useRef()

    const uploadImage = ({ target }) => {
        const [newImage] = target.files
        const reader = new FileReader()

        reader.onload = e => {
            updateImageUploaded(e.target.result)
        }
        reader.readAsDataURL(newImage)

        addImage(newImage)
    }

    return (
        <>
            <StyledArea onClick={() => uploadInput.current.click()}>
                <If condition={not(imageUploaded)} el={<LogoImage alt="" src={imageUploaded} />}>
                    <If condition={not(image)} el={<LogoImage alt="" src={image} />}>
                        <Icon fontSize="2.25rem" icon="upload" pointer />
                        <StyledLabel>
                            {i18n.t('labels.uploadAgencyImage')}
                            <b>{i18n.t('labels.search')}</b>
                        </StyledLabel>
                    </If>
                </If>
                <InputFile accept="image/png, image/jpeg" id="inputFile" onChange={uploadImage} ref={uploadInput} type="file" />
            </StyledArea>
        </>
    )
}

UploadArea.defaultProps = {
    image: ''
}

UploadArea.propTypes = {
    addImage: PropTypes.func.isRequired,
    image: PropTypes.string
}

export default UploadArea
