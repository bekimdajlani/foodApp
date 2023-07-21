import React from "react";
import { useContext } from "react";

import classes from './headercartbutton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((accumulator,item)=>{
        return accumulator+item.amount;
    },0)

    return(
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Meals
                </span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </button>
        
    )

}

export default CartButton;