import React, { useState } from "react";
import Header from "@/components/header";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles["layout"]}>
      <Header />
      <div className={styles["container"]}>
        <main className={styles["content"]}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
