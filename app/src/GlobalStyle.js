import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    --deep-blue: #011640;
    --soft-white: #f2f2f2;
    --solid-black: #0C0B0B;
    --medium-purple: #B33AD7;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

h1, h2, h3, h4 {
    color: var(--soft-white)
}

.App {
    margin:auto;    
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: center;
    align-items: top;
    padding: 1rem;

}

body {
    background: var(--deep-blue);
}
`