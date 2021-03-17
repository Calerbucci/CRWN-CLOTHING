import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    body{
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
    background: linear-gradient(to right, #e6dada, #274046);
    @media screen and (max-width: 800px){
        padding: 10px;
    }
}

a{
    text-decoration: none;
    color: black;

}

* {
    box-sizing: border-box;
}
`

export default GlobalStyle;