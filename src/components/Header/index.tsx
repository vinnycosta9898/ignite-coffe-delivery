import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'
import coffeLogo  from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'


export function Header(){
    return(
        <HeaderContainer>
            <div className="container">
                <img src={coffeLogo} alt="logo de Café" />
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill"/>
                        Porto Alegre, RS
                    </HeaderButton>

                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill"/>
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}