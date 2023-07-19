import React from "react";

import classes from './headercartbutton.module.css';
import CartIcon from "../Cart/CartIcon";

const CartButton = (props) => {

    return(
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Meals
                </span>
                <span className={classes.badge}>
                    3
                </span>
            </button>
        
    )

}

export default CartButton;