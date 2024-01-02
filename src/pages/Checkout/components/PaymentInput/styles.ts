import styled, { css } from "styled-components";

export const PaymentInputContainer = styled.div`
    input{
        visibility: hidden;
        appearance: none;
    }
    input:checked + label div{
        ${({ theme }) => css`
            background: ${theme.colors["brand-purple-light"]};
            border-color: ${theme.colors["brand-purple"]};

            &:hover{
                background: ${theme.colors["brand-purple-light"]};
            }
        `}  
    }
`

export const ContentContainer = styled.div`
    height: 3rem;
    padding: 0 0.5rem;
    
    background: ${({ theme }) => theme.colors["base-button"]};
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors["base-text"]};
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    transition: 0.4s;
    user-select: none;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    svg{
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }

    &:hover{
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`