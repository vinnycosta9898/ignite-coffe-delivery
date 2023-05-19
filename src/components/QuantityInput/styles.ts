import styled from "styled-components";

export const QuantityInputContainer = styled.div`
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