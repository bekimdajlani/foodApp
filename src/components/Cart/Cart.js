import React, { useState } from "react";
import { useContext } from "react";

import classes from './cart.module.css';
import Modal from "./Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {

    const [isCheckout,setIsCheckout] = useState(false); 

    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1})
    };

    const cartItems = (<ul className={classes['cart-items']}>{cartCtx.items.map((item)=> (
            <CartItem 
            key={item.id}
            id = {item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item)}
            />
    ))}
    </ul>
    );

        const orderHandler = () => {
            setIsCheckout(true);
        };

        const submitOrderHandler = (userData) => {
            fetch(`https://testreactb-default-rtdb.europe-west1.firebasedatabase.app/orders.json`,{
                method: 'POST',
                body:JSON.stringify({
                    user:userData,
                    orderedItems: cartCtx.items
                })
            });

        };

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler}/>}
            <div className={classes.action}>
                <button className= {classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;