import React from "react";
import ReactDOM  from "react-dom";

import classes from './modal.module.css'

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('modal-overlay');

const Modal = (props) => {

    return(
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onHideCart}/>, portalElement )}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </>
    )
};

export default Modal;