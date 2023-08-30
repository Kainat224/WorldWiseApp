// import React from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      Sidebar
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          @ Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
