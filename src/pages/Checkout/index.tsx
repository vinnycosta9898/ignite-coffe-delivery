import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { CheckoutContainer } from "./styles";

export function Checkout(){
    return(
        <CheckoutContainer className="container">
            <CompleteOrderForm/>
            <SelectedCoffes/>
        </CheckoutContainer>
    )
}