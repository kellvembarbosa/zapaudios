import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${ ({theme}) => theme.colors.MainBackgroundColor };
        color: ${({theme}) => theme.colors.textColor};
    }
`;