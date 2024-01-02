import { SelectedCoffesContainer, DetailsContainer } from './styles'
import { TitleText } from '../../../../components/Typegraphy/styles'
import { CardCartCoffe } from '../CardCartCoffe'
import { ConfirmationSection } from './components/ConfirmationSection'
import { useCart } from '../../../../hooks/useCart'

export function SelectedCoffes(){
    const { cartItems } = useCart();

    return(
        <SelectedCoffesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>

            <DetailsContainer>
                {cartItems.map((item) => (
                    <CardCartCoffe key={item.id} coffe={item}/>

                ))}
                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffesContainer>
    )
}