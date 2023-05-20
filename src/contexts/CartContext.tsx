import { createContext, useState, ReactNode } from "react";
import { Coffe } from "../pages/Home/components/CoffeCard";
import { produce } from "immer";

export interface CartItem extends Coffe{
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    addCoffeToCart: (coffe: CartItem) => void;
}

interface CartContextProviderProps{
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children } : CartContextProviderProps){
    const [ cartItems, setcartItems ] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.length;


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

    console.log(cartItems)

    return(
        <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeToCart }}>
                { children }
        </CartContext.Provider>
    )
}