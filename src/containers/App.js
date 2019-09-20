import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'

import styled, { ThemeProvider } from 'styled-components'

import Tasks from '@features/tasks/containers/Tasks'
import TravelCalendar from '@features/travelCalendar/component/TravelCalendar'
import Header from '@components/header/Header'
import GlobalStyle from '@components/globalStyle/GlobalStyle'
import { events } from '@constants/events'

import { ThemeContext } from '@contexts/theme'

const App = ({ children, travelScript }) => {
    const defaultTheme = {
        primary: '#9390ec',
        primaryDark: '#8187e1',
        primaryLight: '#bf9ffd',
        text: '#3d3e46'
    }
    const SideBar = styled.section`
        background: #fbfbfb;
        border: 1px solid #dcdcdc;
        border-left: none;
        grid-area: tasks;
        padding: 3.125rem 1.1875rem;
    `

    const [theme, updateTheme] = useState(defaultTheme)

    useEffect(() => {
        PubSub.subscribe(events.CHANGE_THEME, () => updateTheme(defaultTheme))
        return () => PubSub.unsubscribe(events.CHANGE_THEME)
    }, [])

    const handleSwitchTheme = () => updateTheme(defaultTheme)

    return (
        <ThemeContext.Provider value={{ switchTheme: handleSwitchTheme, theme }}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Header />
                    <SideBar>
                        <TravelCalendar travelScript={travelScript} />
                        <Tasks />
                    </SideBar>
                    {children}
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
App.defaultProps = {
    travelScript: null
}

App.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    travelScript: PropTypes.object
}

export default App
