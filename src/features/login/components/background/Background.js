import React from 'react'
import styled from 'styled-components'

import bgLogin from '@img/background/login.png'

const StyledBg = styled.div`
    background: url(${bgLogin}) no-repeat bottom / cover;
    bottom: 0;
    height: 100vh;
    opacity: 0.1;
    position: absolute;
    width: 100vw;
`

const Background = () => <StyledBg />

export default Background
