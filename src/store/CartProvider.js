import { useReducer } from "react";
import CartContext from "./cart-context";

const defalutCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        
        const existingCartItem = state.items[existingCartItemIndex];
        
        let addItem;
        
        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            addItem = [...state.items];
            addItem[existingCartItemIndex] = updatedItem;
            
        } else {
            
            addItem = state.items.concat(action.item);
        }
        return{
            items: addItem,
            totalAmount: updateTotalAmount
        }
    }
    if (action.type === 'REMOVE'){

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        
        const existingItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingItem.price;
        let addItem;
        if (existingItem.amount === 1){
            addItem = state.items.filter(item => item.id !== action.item.id);
        }else {
          const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            addItem = [...state.items];
            addItem[existingCartItemIndex] = updatedItem;
        }

        return {
            items: addItem,
            totalAmount: updateTotalAmount
        }

    }

    if (action.type === 'CLEAR' ){
        return  defalutCartState;   
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

    const clearCartHandler = () => {
        dispatchCartAction({type:'CLEAR'})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children} 
    </CartContext.Provider>
};

export default CartProvider;