import { events } from './constants'
import { times } from '@constants/times'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import { connect } from 'react-redux'

import { requestAddToastAction, requestRemoveToastAction } from './actions'

import { zIndexes } from '@helpers/zIndexes'

import { elementIs } from '@utils/browser'

import { getListSelector } from './selectors'

import Icon from '@components/icon/Icon'

const backgrounds = {
    error: '#ffac81',
    success: '#ace3a4',
    warning: '#ffea81'
}

const animationIn = keyframes`
    from {
        transform: translateX(525px);
    }
    to {
        transform: translateX(0);
    }
`

const animationOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(525px);
    }
`

const StyledToasts = styled.div`
    position: fixed;
    right: 50px;
    top: 50px;
    z-index: ${zIndexes.toast};
`

const StyledToast = styled.div`
    align-items: center;
    animation: ${animationIn} 0.5s cubic-bezier(0, 0.5, 0.7, 1);
    background: ${({ type }) => backgrounds[type]};
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 425px;
    &.is-out {
        animation: ${animationOut} 0.5s cubic-bezier(0, 0.5, 0.7, 1) forwards;
    }
`

const StyledToastIcon = styled.span`
    margin-right: 2rem;
`

const StyledToastMessage = styled.p`
    color: ${({ theme }) => theme.text};
    margin: 0;
    word-break: break-all;
`

const Toasts = ({ requestAddToastAction: addToast, requestRemoveToastAction: removeToast, toasts }) => {
    useEffect(() => {
        PubSub.subscribe(events.TOAST_SHOW, (_, options) => {
            addToast(options)
            setTimeout(() => removeToast(options.id), times.FIVE_SECONDS)
        })
        return () => PubSub.unsubscribe(events.TOAST_SHOW)
    })

    const handleClick = event => {
        let toast = event.target
        if (elementIs(toast, 'p')) {
            toast = toast.parentNode
        }
        if (elementIs(toast, 'path')) {
            toast = toast.parentNode.parentNode.parentNode
        }
        if (elementIs(toast, 'svg')) {
            toast = toast.parentNode.parentNode
        }
        toast.classList.add('is-out')
    }

    return (
        <StyledToasts data-cy="notifications">
            {toasts.map(({ message, icon, type }, index) => (
                <StyledToast data-cy="notification" key={index} onClick={handleClick} type={type}>
                    <StyledToastIcon data-cy="notification-icon">
                        <Icon icon={icon} />
                    </StyledToastIcon>
                    <StyledToastMessage data-cy="notification-message">{message}</StyledToastMessage>
                </StyledToast>
            ))}
        </StyledToasts>
    )
}

Toasts.propTypes = {
    requestAddToastAction: PropTypes.func.isRequired,
    requestRemoveToastAction: PropTypes.func.isRequired,
    toasts: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({ toasts: getListSelector(state) })

const mapDispatchToProps = {
    requestAddToastAction,
    requestRemoveToastAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toasts)
