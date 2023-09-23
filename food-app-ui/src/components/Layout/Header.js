import React, { Fragment } from 'react'
import classes from '../Layout/Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
  return (
   <Fragment>
   <header className={classes.header}>
   <h1>Bharpate</h1>
   <HeaderCartButton>
   <h1>asdfasdf</h1>
   <h2>aaaaasdfasdf</h2>
   Cart</HeaderCartButton>
   </header>
   <div className={classes['main-image']}>
   <img src= {mealsImage} alt="food "/>
   </div>
   </Fragment>
  )
}

export default Header