import { useReducer } from "react"
import CartContext from "./cart-context"



const defaultCartState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )

        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
            
        }

        else {
            updatedItems = state.items.concat(action.item)
        }

        console.log('product added')
        console.log(updatedItems)
        console.log('bill: '+updatedTotalAmount)

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    else if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )

        if (existingCartItemIndex === -1) {
            return {
                items: state.items,
                totalAmount: state.totalAmount
            }
        }

        state.items[existingCartItemIndex].amount -= 1
        const totalAmount = state.totalAmount - state.items[existingCartItemIndex].price

        if (state.items[existingCartItemIndex].amount === 0) {
            state.items.splice(existingCartItemIndex, 1)
        }

        console.log('product removed')
        console.log(state.items)
        console.log('bill: '+totalAmount)

        return {
            items: state.items,
            totalAmount: +totalAmount
        }

    }

    return defaultCartState

}


function CartProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    function addItemToCartHandler(item) {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }

    function removeItemfromCartHandler(id) {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    }

    function clearCartHandler() {
        dispatchCartAction({
            type: 'SUBMISSION'
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemfromCartHandler,
        clearCart: clearCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
