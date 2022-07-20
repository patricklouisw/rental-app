import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";
import Logo from "../../asset/Home.png";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/home">
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/maps/rent">
              Rent/Sublet
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/roommates">
              Find a Roommate or House mate
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/login">
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    // <div className={styles.navbar}>
    //   <div className={styles.logo}>
    //     <img src={Logo} alt="logo" />
    //   </div>
    //   <div>Rent</div>
    //   <div>Sublet</div>
    //   <div>Find a Room/House mate</div>
    //   <div>Log In | Sign Up</div>
    // </div>
  );
};

export default NavBar;
