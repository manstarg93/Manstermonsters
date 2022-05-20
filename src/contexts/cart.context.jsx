import { createContext, useState,useEffect } from 'react'



const addCartItem = (cartItems, productToAdd) => {



const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id )


if(existingCartItem){
    return  cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
        ...cartItem,
        quantity: cartItem.quantity + 1 
    }: cartItem)
}

    return [
        ...cartItems,
        {...productToAdd,
        quantity: 1
    }
    ]
}

const removeItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id )

    if(existingCartItem){
     return cartItems.filter( cartItem => cartItem.id !== productToRemove.id)
        

}
return
}

const removeCartItems = (cartItems, productToRemove) => {


    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id )


    if(existingCartItem){
        
            if(existingCartItem.quantity === 1){
                return cartItems.filter( cartItem => cartItem.id !== productToRemove.id)
            }



        return  cartItems.map((cartItem) => cartItem.id === productToRemove.id ? {
            ...cartItem,
            quantity: cartItem.quantity - 1 
        }: cartItem)


    }
    
        return 
}


export const CartContext = createContext({

   
   
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    amountInCart: 0,
    setAmountInCart: () => {},
    removeItem: () => {},
    totalPrice: 0,
    setTotalPrice: () => {}
})


export const CartProvider = ({children}) => {
 const  [isCartOpen, setIsCartOpen] = useState()

 const [cartItems, setCartItems] = useState([])

 const [amountInCart, setAmountInCart] = useState(0)

 const [totalPrice, setTotalPrice] = useState(0)


useEffect(() => {
const newCartCount = cartItems.reduce((total, countItem) => total + countItem.quantity,0)
setAmountInCart(newCartCount)
},[cartItems])

useEffect(() => {
const newTotal = cartItems.reduce((currentTotal, cartItems) => {
    
    const itemTotalPrice = cartItems.quantity * cartItems.price
    const totalPrice = currentTotal + itemTotalPrice
    return totalPrice

},0)
setTotalPrice(newTotal)
},[cartItems])



 const addItemToCart = (productToAdd) => {

setCartItems(addCartItem(cartItems, productToAdd))


 }

 const clearCartItem = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove))
 }



 const removeItemFromCart = (productToRemove) => {

    setCartItems(removeCartItems(cartItems, productToRemove))
 }
 const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, setAmountInCart, amountInCart,clearCartItem, totalPrice}
    return(
        <CartContext.Provider value={value}>{children}
        
        </CartContext.Provider>
    )
}