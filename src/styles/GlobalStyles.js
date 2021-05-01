import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

html{           height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                list-style: none;
                padding:0;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                margin:0;
                background: #fefefe;
                height: 100vh;
                margin: 0;
                padding: 0;
                overscroll-behavior: none;
                width: 100vw;
                
        }

        #app {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }

`

export default GlobalStyle