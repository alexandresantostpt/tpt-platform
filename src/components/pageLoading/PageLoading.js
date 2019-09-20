import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Power3, TweenMax } from 'gsap'

const StyledSpinner = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`

const StyledSpinnerBall = styled.span`
    background: ${({ theme }) => theme.primary};
    border-radius: 100%;
    display: block;
    height: 20px;
    margin: 0 0.5rem;
    opacity: 0;
    width: 20px;
`

const PageLoading = () => {
    useEffect(() => {
        const balls = document.querySelectorAll('.js-spinnerBall')
        TweenMax.staggerFromTo(
            balls,
            0.75,
            {
                opacity: 0,
                scale: 0.1
            },
            {
                ease: Power3.easeInOut,
                opacity: 1,
                repeat: -1,
                scale: 1.2,
                yoyo: true
            },
            0.1
        )
    }, [])

    return (
        <StyledSpinner className="spinner">
            <StyledSpinnerBall className="spiiner__ball js-spinnerBall" />
            <StyledSpinnerBall className="spiiner__ball js-spinnerBall" />
            <StyledSpinnerBall className="spiiner__ball js-spinnerBall" />
            <StyledSpinnerBall className="spiiner__ball js-spinnerBall" />
            <StyledSpinnerBall className="spiiner__ball js-spinnerBall" />
        </StyledSpinner>
    )
}

export default PageLoading
