import styled from "styled-components";

export const CardCartCoffeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    > div{
        display: flex;
        align-items: center;
        gap: 1.25rem;
        img{
            width: 4rem;
            height: 4rem;
        }
    }

    > p{
        font-weight: 700;
        align-self: flex-start;
    }
`

export const ActionsContainer = styled.div`
    height: 2rem;
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    >div{
        max-width: 4.5rem;
        height: 100%;
    }

`

export const RemoveButton = styled.button`
    height: 100%;
    
    background: ${({ theme }) => theme.colors["base-button"]};;
    border: none;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.5rem;
    transition: 0.4s;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg{
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }

    &:hover{
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`