import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100vw;
`

const Page = ({ children }) => <StyledPage>{children}</StyledPage>

Page.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default Page
