import React from "react";
import classes from "./Logo.module.css";

import burgerLogo from "../../assets/images/28.1 burger-logo.png.png";

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;
