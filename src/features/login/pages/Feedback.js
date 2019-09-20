import React, { useEffect } from 'react'
import styled from 'styled-components'

import { getQueryParams, navigateTo } from '@utils/browser'

import Text from '../components/text/Text'
import LoginComponent from '../components/login/Login'
import Icon from '@components/icon/Icon'

const StyledIcon = styled.span`
    align-items: center;
    background: linear-gradient(-225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%);
    border-radius: 50%;
    color: white;
    display: flex;
    height: 4.375rem;
    justify-content: center;
    width: 4.375rem;
`

const StyledBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.75rem;
    margin-top: 1.75rem;
    width: 100%;
`

const StyledSpacing = styled.div`
    margin-bottom: 3rem;
`

const Feedback = () => {
    const { path, message } = getQueryParams()

    useEffect(() => {
        if (path) {
            setTimeout(() => navigateTo(path), 3000)
        }
    }, [])

    return (
        <LoginComponent>
            <StyledBox>
                <StyledIcon>
                    <Icon fontSize="4rem" icon="check" />
                </StyledIcon>
            </StyledBox>
            <Text>{message}</Text>
            <StyledSpacing />
        </LoginComponent>
    )
}

export default Feedback
