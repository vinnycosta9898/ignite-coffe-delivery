import { Input } from "../../../../../components/Input"
import { AddressFormContainer } from "../styles"

export function AddressForm(){
    return(
        <AddressFormContainer>
            <Input placeholder="CEP" type="number" className="cep"/>
            <Input placeholder="Rua" className="street"/>
            <Input placeholder="Número" type="number"/>
            <Input placeholder="complemento" className="complement"/>
            <Input placeholder="Bairro"/>
            <Input placeholder="Cidade"/>
            <Input placeholder="UF"/>
        </AddressFormContainer>
    )
}