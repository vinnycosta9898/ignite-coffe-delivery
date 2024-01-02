import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button"
import { RegularText } from "../../../../../components/Typegraphy/styles"
import { useCart } from "../../../../../hooks/useCart"
import { priceFormatter } from "../../../../../utils/priceFormatter";
import { ConfirmationSectionContainer } from "../../SelectedCoffes/styles"

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection(){
    const { cartItemsTotal, cartQuantity, } = useCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;
    const formattedItemsTotal = priceFormatter(cartItemsTotal);
    const formattedCartTotal = priceFormatter(cartTotal);
    const deliveryPrice = priceFormatter(DELIVERY_PRICE);
    const navigate = useNavigate()

    function handleSubmit(){
        navigate('/orderconfirmed')
    }   
    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="m">Total de Itens</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>

            <div>
                <RegularText size="m">Entrega</RegularText>
                <RegularText>R$ {deliveryPrice}</RegularText>
            </div>

            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">
                    R$ {formattedCartTotal}
                </RegularText>
            </div>
            
            <Button type="submit" text="Confirmar Pedido" disabled={cartQuantity <= 0} onClick={() => handleSubmit()}/>
        </ConfirmationSectionContainer>
    )
}