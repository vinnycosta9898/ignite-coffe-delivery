import styled from "styled-components";
import { SectionBaseStyled } from "../../styles";

export const SelectedCoffesContainer = styled.div`
    width: 40rem;
    
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const DetailsContainer = styled(SectionBaseStyled)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`