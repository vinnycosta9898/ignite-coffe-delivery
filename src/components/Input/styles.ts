import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    
    position: relative;
    > p{
        color: ${({ theme }) => theme.colors["base-error"]};
    }
`

interface InputStyledContainerProps{
    hasError: boolean;
}

export const InputStyledContainer = styled.div<InputStyledContainerProps>`
    height: 2.625rem;

    border-radius: 4px;
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;
    overflow: hidden;
    transition: 0.4s;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &:focus-within{
        border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    ${({ theme, hasError }) => hasError && css`
        border-color: ${theme.colors["base-error"]};
    `}
`

export const InputStyled = styled.input`
    flex: 1;
    height: 100%;
    background: none;
    border: none;

    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder{
        color: ${({ theme }) => theme.colors["base-label"]};
    }
`

export const RightText = styled.p`
    color: ${({ theme }) => theme.colors["base-label"]};
    font-size: 0.75rem;
    font-style: italic;
    margin-right: 0.75rem;

`