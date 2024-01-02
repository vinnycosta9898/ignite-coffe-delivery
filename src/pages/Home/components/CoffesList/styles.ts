import styled from "styled-components";

export const CoffesListContainer = styled.section`
    width: 100%;
    margin-top: 2rem;
    text-align: center;
`

export const CoffeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
    margin-top: 3.5rem;
`