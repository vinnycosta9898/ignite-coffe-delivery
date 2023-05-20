import { createContext, useState, ReactNode } from "react";
import { Coffe } from "../pages/Home/components/CoffeCard";
import { produce } from "immer";

export interface CartItem extends Coffe{
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    addCoffeToCart: (coffe: CartItem) => void;
}

interface CartContextProviderProps{
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children } : CartContextProviderProps){
    const [ cartItems, setcartItems ] = useState<CartItem[]>([])

    function addCoffeToCart(coffe: CartItem){
        const coffeAlreadyExists = cartItems.findIndex(
            (cartItem) => cartItem.id === coffe.id
        )

        const newCart = produce(cartItems, (draft) => {
            if(coffeAlreadyExists < 0){
                draft.push(coffe)
            }else{
                draft[coffeAlreadyExists].quantity += coffe.quantity;
            }
        });

        setcartItems(newCart);
    }

    return(
        <CartContext.Provider value={{ cartItems, addCoffeToCart }}>
                { children }
        </CartContext.Provider>
    )
}