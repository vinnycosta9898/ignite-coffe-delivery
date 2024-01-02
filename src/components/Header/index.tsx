import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'
import coffeLogo  from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'


export function Header(){
    const { cartQuantity } = useCart();
    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={coffeLogo} alt="logo de Café" />
                </NavLink>
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill"/>
                        Porto Alegre, RS
                    </HeaderButton>

                    <NavLink to="/checkout">
                        <HeaderButton variant="yellow">
                            { cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight="fill"/>
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}