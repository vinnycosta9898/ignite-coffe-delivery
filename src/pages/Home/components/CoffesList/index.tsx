import { CoffesListContainer, CoffeList } from "./styles"
import { RegularText, TitleText } from "../../../../components/Typegraphy/styles"
import { CoffeCard } from "../CoffeCard"
import { coffees } from "../../../../repositories/coffes"

export function CoffesList(){
    return(
        <CoffesListContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeList>
                {coffees.map((coffe) => {
                    return(
                        <CoffeCard key={coffe.id} coffe={coffe}/>
                    )
                })
                }
            </CoffeList>
        </CoffesListContainer>
    )
}