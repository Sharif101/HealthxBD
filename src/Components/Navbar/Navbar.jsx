import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/Navbar/Logo.png";
export default function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
        <p>Logoipsum</p>
      </div>
      <div className={classes.navItem}>
        <div className={classes.navLink}>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Team</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
        <button>login</button>
      </div>
    </div>
  );
}
