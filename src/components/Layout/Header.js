import React from 'react';

import mealImage from '../../assets/meals.jpg';
import classes from './header.module.css';
import CartButton from '../UI/HeaderCartButton';

const Header = () => {

    return (
        <>
            <header className={classes.header}>
                <h1>Meals</h1>
                <CartButton>Cart</CartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt='A table of food'/>
            </div>
        </>
    )
}

export default Header;