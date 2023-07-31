import React, { useEffect, useState } from "react";
import { useContext } from "react";

import classes from './headercartbutton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const [buttonBump, setButtonBump] = useState(false);

    const btnClasses = `${classes.button}  ${buttonBump ? classes.bump : ''}`
    const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
        return accumulator + item.amount;
    }, 0)

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonBump(true);

        const timer = setTimeout(() => {
            setButtonBump(false);
        }, 300)

        return () => {

            clearTimeout(timer);
        }

    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
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