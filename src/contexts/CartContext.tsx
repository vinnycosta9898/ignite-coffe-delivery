import { createContext, useState, useEffect, ReactNode } from "react";
import { Coffe } from "../pages/Home/components/CoffeCard";
import { produce } from "immer";

export interface CartItem extends Coffe{
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addCoffeToCart: (coffe: CartItem) => void;
    changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void;
    removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps{
    children: ReactNode;
}

const COFFE_ITEMS_STORAGE_KEY = "coffedelivery:cartItems"

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children } : CartContextProviderProps){
    const [ cartItems, setCartItems ] = useState<CartItem[]>(() => {
        const storageCartItems = localStorage.getItem("coffedelivery:cartItems")
        if(storageCartItems){
            return JSON.parse(storageCartItems)
        }
        return [];
    });

    const cartQuantity = cartItems.length;

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0)


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

        setCartItems(newCart);
    }

    function changeCartItemQuantity(cartItemId: number, type: "increase" | "decrease"){
        const newCart = produce(cartItems, (draft) => {
            const coffeExistsinCart = cartItems.findIndex(
                        cartItem => cartItem.id === cartItemId
            )

            if(coffeExistsinCart >= 0){
                const item = draft[coffeExistsinCart];
                draft[coffeExistsinCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity -1
            }
        });

        setCartItems(newCart)
    }

    function removeCartItem(cartItemId: number){
        const newCart = produce(cartItems, (draft) => {
            const coffeExistsinCart = cartItems.findIndex(
                cartItem => cartItem.id === cartItemId
            );
            if(cartItemId >= 0){
                draft.splice(coffeExistsinCart, 1)
            }
        });
        setCartItems(newCart)
    }

    useEffect(() => {
        localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems])

    return(
        <CartContext.Provider value={{ 
                                        cartItems, 
                                        cartQuantity, 
                                        addCoffeToCart, 
                                        cartItemsTotal,
                                        changeCartItemQuantity, 
                                        removeCartItem 
                                    }}>
                { children }
        </CartContext.Provider>
    )
}