import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: ${(props) => props.theme.colors["base-background"]};
        color: ${(props) => props.theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    border-style, button, input-security, textarea{
        font-family: ${(props) => props.theme.fonts.regular};
        font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"]{
        -moz-appearance: textfield;
    }

`