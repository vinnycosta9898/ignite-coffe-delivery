import { Button } from "../../../../../components/Button"
import { RegularText } from "../../../../../components/Typegraphy/styles"
import { ConfirmationSectionContainer } from "../../SelectedCoffes/styles"

export function ConfirmationSection(){
    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="m">Total de Itens</RegularText>
                <RegularText>R$ 9,90</RegularText>
            </div>

            <div>
                <RegularText size="m">Entrega</RegularText>
                <RegularText>R$ 3,50</RegularText>
            </div>

            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">
                    R$ 29,90
                </RegularText>
            </div>
            
            <Button text="Confirmar Pedido"/>
        </ConfirmationSectionContainer>
    )
}