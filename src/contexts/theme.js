import { createContext } from 'react'

const ThemeContext = createContext({
    switchTheme: () => '',
    theme: {
        primary: '',
        primaryDark: '',
        primaryLight: '',
        text: ''
    }
})

export { ThemeContext }
