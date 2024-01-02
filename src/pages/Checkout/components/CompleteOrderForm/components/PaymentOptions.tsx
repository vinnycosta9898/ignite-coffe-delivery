import { useFormContext } from 'react-hook-form';
import { PaymentInput } from '../../PaymentInput'
import { PaymentOptionsContainer } from '../styles'
import { Bank, CreditCard, Money } from "phosphor-react";


export const paymentMethods = {
    credit:{
        label: "Cartão de Crédito",
        icon: <CreditCard size={16}/>
    }, 
    debit:{
        label: "Cartão de Débito",
        icon: <Bank size={16}/>
    },
    money:{
        label: "Dinheiro",
        icon: <Money size={16}/>
    }
}

export function PaymentOptions(){
    const { register } = useFormContext();
    return(
        <PaymentOptionsContainer>
            {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
                <PaymentInput
                    key={label}
                    id={key}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                />
            ))}
        </PaymentOptionsContainer>
    )
}