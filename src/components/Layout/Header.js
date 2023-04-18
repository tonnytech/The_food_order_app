/* eslint-disable */

import React from 'react';
import HeaderCardButton from './HeaderCardButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <>
          <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton onClick={props.onshowCart} />
          </header>   
          <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food'/>
          </div>           
        </>
    );
};

export default Header;