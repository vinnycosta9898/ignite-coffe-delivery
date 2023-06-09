import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typegraphy/styles";

export const CoffeCardContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    padding-top: 0;
    margin-bottom: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.25rem;
    }
`

export const TagsCoffe = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;

    span{
         background: ${({ theme }) => theme.colors["brand-yellow-light"]};
         border-radius: 999px;
         color: ${({theme}) => theme.colors["brand-yellow-dark"]};
         font-size: ${({ theme }) => theme.textSizes["components-tag"]};
         font-weight: 700;
         padding: 0.25rem 0.5rem;
         text-transform: uppercase;

    }
`

export const CoffeName = styled(TitleText).attrs({
    size: "s",
    color: "subtitle",
    weight: 700
})`
    margin-bottom: 0.5rem;
`

export const CoffeDescription = styled(RegularText).attrs({
    size: "s",
    color: "label"
})`
    margin-bottom: 2rem;
`

export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div{
        display: flex;
        align-items: center;
        gap: 3px;

        p{
            line-height: 0.75rem;
        }
    }
`

export const CardWrapper = styled.div`
    width: 7.5rem;    
    
    > button{
        width: 2.375rem;
        height: 2.375rem;
        
        background: ${({ theme }) => theme.colors["brand-purple-dark"]};
        border: none;
        border-radius: 6px;
        color: ${({ theme }) => theme.colors["base-card"]};
        margin-left: 0.3rem;
        transition: .4s;
        
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background: ${({ theme }) => theme.colors["brand-purple"]};
        }
    }



`