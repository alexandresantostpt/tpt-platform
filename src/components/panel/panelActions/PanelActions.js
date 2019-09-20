import { travelStatus } from '@constants/travel'

import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import { i18n } from '@i18n'

import If from '@components/if/If'

import { colors } from '@helpers/colors'
import { navigateTo } from '@utils/browser'

const checkDisabled = css`
    ${({ disabled }) => {
        if (disabled) {
            return `
                background: #dcdcdc;
                color: #dcdcdc;
                pointer-events: none;
            `
        }
    }}
`

const StyledActions = styled.ul`
    display: flex;
    list-style: none;
    margin-bottom: 3.125rem;
    margin-top: -3px;
`

const StyledAction = styled.li`
    background: ${colors.background};
    border: 0.032rem solid rgba(0, 0, 0, 0.37);
    cursor: pointer;
    ${checkDisabled};
    padding: 0.1rem 0;
    text-align: center;
    width: 100%;

    &:not(:first-child) {
        border-bottom: 0.032rem solid rgba(0, 0, 0, 0.37);
        border-left: none;
        border-top: 0.032rem solid rgba(0, 0, 0, 0.37);
    }

    &:first-child {
        border-bottom-left-radius: 0.625rem;
    }

    &:last-child {
        border-bottom-right-radius: 0.625rem;
    }
`

const Title = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    line-height: 1.937rem;
    opacity: 0.79;
`

const PanelActions = ({ isNewAction, onArquive, onCopy, onPreview, status, travelId }) => {
    const loadScript = () => {
        if (travelId) {
            navigateTo(`travel/${travelId}/script`)
        }
    }

    return (
        <StyledActions>
            <If condition={!!travelId}>
                <StyledAction isNewAction={isNewAction} onClick={loadScript}>
                    <Title>{i18n.t('panelActions.script')}</Title>
                </StyledAction>
            </If>
            <If condition={!!onPreview}>
                <StyledAction isNewAction={isNewAction} onClick={onPreview}>
                    <Title>{i18n.t('panelActions.preview')}</Title>
                </StyledAction>
            </If>
            <If condition={!!onCopy}>
                <StyledAction isNewAction={isNewAction} onClick={onCopy}>
                    <Title>{i18n.t('panelActions.copy')}</Title>
                </StyledAction>
            </If>
            <If condition={!!onArquive}>
                <StyledAction disabled={status !== travelStatus.CONCLUDED} isNewAction={isNewAction} onClick={onArquive}>
                    <Title>{i18n.t('panelActions.shelve')}</Title>
                </StyledAction>
            </If>
        </StyledActions>
    )
}

PanelActions.defaultProps = {
    onArquive: null,
    onCopy: null,
    onPreview: null,
    status: '',
    travelId: ''
}

PanelActions.propTypes = {
    isNewAction: PropTypes.bool.isRequired,
    onArquive: PropTypes.func,
    onCopy: PropTypes.func,
    onPreview: PropTypes.func,
    status: PropTypes.string,
    travelId: PropTypes.string
}

export default PanelActions
