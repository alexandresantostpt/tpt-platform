import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { isNotEmpty, not } from '@utils/functions'

import Icon from '@components/icon/Icon'
import If from '@components/if/If'
import PanelActions from '@components/panel/panelActions/PanelActions'
import UploadButton from './uploadButton/UploadButton'

const backgroundStyles = css`
    ${({ backgroundImageUrl }) => {
        if (backgroundImageUrl !== null) {
            return `
                background: url(${backgroundImageUrl}) no-repeat center;
                background-size: cover;
                height: 8.062rem;
                -moz-background-size: cover;
                -o-background-size: cover;
                -webkit-background-size: cover;`
        }
        return `
            background: linear-gradient(135deg, #92d1f3 0%,#b3bae7 100%);`
    }};
`

const textShadowStyle = css`
    ${({ isShadowStrong }) =>
        isShadowStrong ? 'text-shadow: 0 3px 10px rgba(18, 18, 18, 0.84);' : 'text-shadow: 0 3px 10px rgba(18, 18, 18, 0.044);'}
`

const Loading = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`

const isLoading = css`
    ${({ imageLoaded, backgroundImageUrl }) => {
        if (backgroundImageUrl !== null && !imageLoaded) {
            return `border: 5px solid #dcdcdc;
                border-left-color: #b3bae7;
                border-radius: 50%;
                content: '';
                display: block;
                height: 25px;
                width: 25px;
                position: absolute;`
        }
    }}
`

const StyledPanel = styled.div`
    &::before {
        animation: ${Loading} 2s linear infinite;
        ${isLoading}
    }
    align-items: center;
    border-radius: 5px;
    display: flex;
    height: 129px;
    justify-content: center;
    ${backgroundStyles};
    padding: 1.5rem;
    position: relative;
`

const Title = styled.textarea`
    background-color: transparent;
    border: none;
    color: #fafafa;
    font-size: 40px;
    font-weight: bold;
    ${textShadowStyle};
    opacity: 0.95;
    resize: none;
    text-align: center;
    width: 100%;

    &:focus {
        outline: none;
    }
`
const StyledIcon = styled.span`
    background-color: rgba(214, 222, 242, 0.35);
    border-radius: 50%;
    box-shadow: 5px 5px 6px 0 rgba(129, 129, 129, 0.38);
    padding: 8px;
    -webkit-text-fill-color: white;
`

const Panel = ({
    children,
    backgroundImageUrl,
    changeTitle,
    disabled,
    id,
    icon,
    onArquive,
    onCopy,
    onPreview,
    requiredImage,
    status,
    title,
    uploadImage
}) => {
    const [imageUploaded, updateImageUploaded] = useState(null)
    const [imageLoaded, updateImageLoaded] = useState(false)

    const dfImage = new Image()

    dfImage.src = backgroundImageUrl
    dfImage.onload = () => {
        updateImageLoaded(true)
    }

    const changeBackgroundImage = image => {
        const reader = new FileReader()
        reader.onload = e => {
            updateImageUploaded(e.target.result)
        }
        reader.readAsDataURL(image)

        updateImageLoaded(true)
        uploadImage(image)
    }

    useEffect(() => {
        PubSub.subscribe(events.FORM_RESET, () => updateImageUploaded(null))
        return () => PubSub.unsubscribe(events.FORM_RESET)
    }, [])

    useEffect(() => {
        updateImageUploaded(null)
    }, [backgroundImageUrl])
    return (
        <>
            <StyledPanel backgroundImageUrl={imageUploaded || backgroundImageUrl} imageLoaded={imageLoaded}>
                <If
                    condition={not(backgroundImageUrl) && not(imageUploaded) && isNotEmpty(icon)}
                    el={
                        <Title
                            disabled={disabled}
                            isShadowStrong={imageUploaded || backgroundImageUrl}
                            maxLength={120}
                            onChange={({ target }) => changeTitle(target.value)}
                            value={title}
                        />
                    }
                >
                    <StyledIcon>
                        <Icon color="white" fontSize="3rem" icon={icon} />
                    </StyledIcon>
                </If>
                {uploadImage && not(disabled) && <UploadButton addImage={changeBackgroundImage} required={requiredImage} />}
            </StyledPanel>
            <If condition={not(children)} el={children}>
                <PanelActions
                    isNewAction={backgroundImageUrl === null}
                    onArquive={onArquive}
                    onCopy={onCopy}
                    onPreview={onPreview}
                    status={status}
                    travelId={id}
                />
            </If>
        </>
    )
}

Panel.defaultProps = {
    backgroundImageUrl: null,
    changeTitle: null,
    children: null,
    disabled: false,
    icon: '',
    id: '',
    onArquive: null,
    onCopy: null,
    onPreview: null,
    requiredImage: false,
    status: '',
    title: ''
}

Panel.propTypes = {
    backgroundImageUrl: PropTypes.string,
    changeTitle: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    id: PropTypes.string,
    onArquive: PropTypes.func,
    onCopy: PropTypes.func,
    onPreview: PropTypes.func,
    requiredImage: PropTypes.bool,
    status: PropTypes.string,
    title: PropTypes.string,
    uploadImage: PropTypes.func
}

export default Panel
