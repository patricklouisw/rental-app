import React from "react";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import SideBar from "../Filter/Filter";

import styles from "./MapLayout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.main}>
        <SideBar />
        <MainPage />
      </div>
    </>
  );
};

export default Layout;
