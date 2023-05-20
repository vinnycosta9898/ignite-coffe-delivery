import styled, { css } from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    background: ${(props) => props.theme.colors["base-background"]};

    >div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

interface HeaderButtonProps{
    variant: "purple" | "yellow"
}

export const HeaderButton = styled.button<HeaderButtonProps>`
    min-width: 2.3rem;
    height: 2.3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    border: none;
    border-radius: 6px;
    cursor: inherit;
    font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
    padding: 0 0.5rem; 
    position: relative;

    span{
        width: 1.25rem;
        height: 1.25rem;

        border-radius: 50%;
        color: ${({ theme }) => theme.colors["base-white"]};
        font-size: 0.75rem;
        font-weight: 700;

        position: absolute;
        top: calc(-1.25rem/2);
        right: calc(-1.25rem/2);

        display: flex;
        align-items: center;
        justify-content: center;


    }

    ${({variant, theme}) => css`
        background: ${(theme.colors[`brand-${variant}-light`])};
        color: ${theme.colors[`brand-${variant}-dark`]};

        span{
            background: ${({ theme }) => theme.colors[`brand-${variant}-dark`]}
        }
    `}

    ${({variant, theme}) => variant === "purple" && css`
        svg{
            color: ${theme.colors["brand-purple"]}
        }
    `}

`