import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        font-family: Lato, Arial, sans-serif;
    }

    body {
        background: #fafafa;
    }

    #root {
        display: grid;
        grid-column-gap: 0.5rem;
        grid-template:
            'header header header' 70px
            'tasks container summary' calc(100vh - 70px)
            / 25vw calc(50vw - 1.975rem) 25vw;
        max-width: 100vw;
        min-height: 100vh;
    }

    .center {
        display: block;
        text-align: center;
    }
`

export default GlobalStyle
