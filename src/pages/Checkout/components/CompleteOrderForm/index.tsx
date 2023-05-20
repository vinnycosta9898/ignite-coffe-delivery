import { useTheme } from "styled-components";
import { CompleteOrderFormContainer } from "./styles"
import { TitleText } from "../../../../components/Typegraphy/styles"
import { MapPinLine, CurrencyDollar } from "phosphor-react";

import { FormSectionContainer } from '../CompleteOrderForm/styles';
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./components/AddressForm";
import { PaymentOptions } from "./components/PaymentOptions";


export function CompleteOrderForm(){
    const { colors } = useTheme();
    return(
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete o seu pedido
            </TitleText>
            <FormSectionContainer>
                <SectionTitle 
                    title="Endereço de entrega"
                    subtitle="Informe o endereço onde deseja receber o pedido"
                    icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]}/>}
                />
                <AddressForm/>
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle 
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma em que deseja pagar"
                    icon={<CurrencyDollar size={22} color={colors["brand-purple"]}/>}
                />
                <PaymentOptions/>
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}