// import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="contries">Contries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;