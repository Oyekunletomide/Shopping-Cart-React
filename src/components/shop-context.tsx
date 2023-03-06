import React, { createContext, useState } from 'react'
import ProductsData from "./ProductsData"


export const ShopContext: React.Context<any> = createContext(null)

const getDefaultCart = () => {
    let cart: any;
    cart = {}
    for (let i = 1; i <= ProductsData.length; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props: any) => {
    const [cartItems, setCartItems] = useState(getDefaultCart)

    const addToCart = (itemId: any) => {
        setCartItems((prev: any) =>({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId: any) => {
        setCartItems((prev: any) =>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    console.log(cartItems)
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider