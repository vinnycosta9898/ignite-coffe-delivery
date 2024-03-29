import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { CheckoutContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

enum PaymentMethods{
    credit = "credit",
    debit = "debit",
    money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe a rua"),
    number: zod.string().min(1, "Informe o número da sua casa"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return {message: "Informe o método de pagamento"}
        },
    })
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData

export function Checkout(){
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm;

    function handleConfirmOrder(data: ConfirmOrderFormData){
        console.log(data);
    }

    return(
        <FormProvider {...confirmOrderForm}>
            <CheckoutContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm/>
                <SelectedCoffes/>
            </CheckoutContainer>
        </FormProvider>
    )
}