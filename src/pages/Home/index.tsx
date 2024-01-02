import { HomeContainer } from "./styles"
import { Intro } from "./components/Intro"
import { CoffesList } from "./components/CoffesList"
// import { useCart } from "../../hooks/useCart"

export function Home(){
    // const { cartItems } = useCart();
    return(
        <HomeContainer>
            <Intro/>
            <CoffesList/>
        </HomeContainer>
    )
}