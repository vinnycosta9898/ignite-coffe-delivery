import styled from "styled-components";

export const InputStyledContainer = styled.input`
    height: 2.625rem;

    border-radius: 4px;
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;
    transition: 0.4s;
    
    &:focus{
        border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    &:placeholder{
        color: ${({ theme }) => theme.colors["base-label"]};
    }
`