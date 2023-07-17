import React from "react";

import classes from './input.module.css';

const Input = (props) => {


    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {... props.input}/> 
            {/* merr gjith vlerat qe do i kalohen si props dhe i shperndan vet */}
        </div>
    )
};

export default Input;