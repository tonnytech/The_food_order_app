/* eslint-disable */

import {useContext, useEffect, useState} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-contex';
import classes from "./HeaderCardButton.module.css"
import userEvent from '@testing-library/user-event';

const HeaderCardButton = (props) => {
    const [buttonIsHignlighted, setButonIsHignlighted]=useState(false)
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curtNumber, item) =>{
        return curtNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${buttonIsHignlighted ? classes.bump : ''}`;
    useEffect(()=>{
        if(items.length === 0) {
            return;
        }
        setButonIsHignlighted(true);

       const timer = setTimeout(()=>{
            setButonIsHignlighted(false);
        }, 300);
        return ()=> {
            clearTimeout(timer);
        }
    },[items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>            
        </button>
    );
};

export default HeaderCardButton;