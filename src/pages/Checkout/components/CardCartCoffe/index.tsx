import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typegraphy/styles'
import { CartItem } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/priceFormatter'
import { useCart } from '../../../../hooks/useCart'

import { ActionsContainer, CardCartCoffeContainer, RemoveButton } from './styles'
import { Trash } from 'phosphor-react'

interface CardCartCoffeProps{
    coffe: CartItem;
}

export function CardCartCoffe({ coffe } : CardCartCoffeProps){
    const { changeCartItemQuantity, removeCartItem } = useCart();
    const coffeTotal = coffe.price * coffe.quantity
    const formattedPrice = priceFormatter(coffeTotal)

    function handleIncrease(){
        changeCartItemQuantity(coffe.id, "increase")
    }

    function handleDecrease(){
        changeCartItemQuantity(coffe.id, "decrease")
    }

    function handleRemove(){
        removeCartItem(coffe.id)
    }

    return(
        <CardCartCoffeContainer>
            <div>
                <img src={`/coffes/${coffe.photo}`}/>
                <div>
                    <RegularText color="subtitle">
                        {coffe.name}
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput 
                            size="small" 
                            quantity={coffe.quantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                        />
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16}/>
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p>
        </CardCartCoffeContainer>
    )
}