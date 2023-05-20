import { SelectedCoffesContainer, DetailsContainer } from './styles'
import { TitleText } from '../../../../components/Typegraphy/styles'
import { CardCartCoffe } from '../CardCartCoffe'
import { ConfirmationSection } from './components/ConfirmationSection'

export function SelectedCoffes(){
    return(
        <SelectedCoffesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>

            <DetailsContainer>
                <CardCartCoffe/>
                <CardCartCoffe/>
                <CardCartCoffe/>
                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffesContainer>
    )
}