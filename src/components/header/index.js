import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import styles from "./header.module.scss";
import SideNav from "../side-navigation";
const Header = () => {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const toggleSideNavHandler = () => {
    setToggleSideNav(!toggleSideNav);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["hamburger-menu-wrapper"]}>
          <MenuIcon sx={{ fontSize: "45px" }} onClick={toggleSideNavHandler} />
        </div>
        <SideNav
          isOpen={toggleSideNav}
          onClose={() => setToggleSideNav(false)}
        />
        <div className={styles["news-app-title-container"]}>
          <div className={styles["content-wrapper"]}>
            <NewspaperIcon sx={{ color: "#ff0000", fontSize: "45px" }} />{" "}
            <span className={styles["title"]}>Top Headlines Hub Spot</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
