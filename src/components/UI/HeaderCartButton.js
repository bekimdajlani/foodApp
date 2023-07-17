import React from "react";

import classes from './headercartbutton.module.css';
import CartIcon from "../Cart/CartIcon";

const CartButton = () => {

    return(
            <button className={classes.button}>
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