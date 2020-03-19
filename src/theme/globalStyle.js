import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        color: #fff;
        background-color: #373e4e;
    }

    h2 {
        font-size: 32px;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .highlight {
        color: #0ce3ac;
    }
`
export default GlobalStyle;