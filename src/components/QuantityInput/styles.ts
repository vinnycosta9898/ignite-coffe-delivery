import styled, { css } from "styled-components";

interface QuantityInputContainerProps{
    size?: "medium" | "small"
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
    flex: 1;
    background: ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    padding: 0.5rem;

    input{
        width: 100%;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors["base-title"]};
        text-align: center;

        &:focus{
            outline: none;
        }
    }

    ${({ size }) => size === "medium" && css`
        padding: 0.5rem;
    `}

    ${({ size }) => size === "small" && css`
        padding: 0.3rem 0.5rem;
    `}
`

export const IconWrapper = styled.button.attrs({
    type: "button",
})`
    width: 0.875rem;
    height: 0.875rem;

    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["brand-purple"]};
    transition: 0.4s;

    &:disabled{
        opacity: 0.4;
    }

    &:not(:disabled):hover{
        color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    }
`