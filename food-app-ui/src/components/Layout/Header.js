import React, { Fragment } from "react";
import classes from "../Layout/Header.module.css";
import mealsImage from "../../assets/indian_food.jpg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bharpate</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delecious food" />
      </div>
    </Fragment>
  );
}

export default Header;
