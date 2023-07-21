import { useReducer } from "react";
import CartContext from "./cart-context";

const defalutCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        const addItem = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items: addItem,
            totalAmount: updateTotalAmount
        }
    }
    return defalutCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defalutCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children} 
    </CartContext.Provider>
};

export default CartProvider;