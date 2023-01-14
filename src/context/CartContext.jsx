import { useState, createContext, useContext } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {


        const idx = cartList.findIndex(previousProduct => previousProduct.id === product.id)

        if (idx === -1) {

            setCartList([
                ...cartList,
                product
            ])

        } else {

            cartList[idx].amount += product.amount
            setCartList([...cartList])
        }
    }

    const emptyCart = () => setCartList([])

    const totalAmount = () => cartList.reduce((count, products) => count += products.amount, 0)

    const totalPrice = () => cartList.reduce((count, products) => count += (products.amount * products.price), 0)

    const deleteItem = (id) => {
        setCartList(cartList.filter(products => products.id != id))
        
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalAmount,
            totalPrice,
            deleteItem
        }}>
            {children}</CartContext.Provider>
    )
}
