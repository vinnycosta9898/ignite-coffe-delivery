import { HomeContainer } from "./styles"
import { Intro } from "./components/Intro"
import { CoffesList } from "./components/CoffesList"

export function Home(){
    return(
        <HomeContainer>
            <Intro/>
            <CoffesList/>
        </HomeContainer>
    )
}