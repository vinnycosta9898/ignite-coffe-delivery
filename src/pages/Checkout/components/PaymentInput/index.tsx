import { PaymentInputContainer } from "./styles";
import { CreditCard } from "phosphor-react";

export function PaymentInput(){
    return(
        <PaymentInputContainer>
            <CreditCard size={16}/>
            Cartão de Crédito
        </PaymentInputContainer>
    )
}