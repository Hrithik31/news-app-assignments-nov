import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNews } from "@/context/NewsContext";
import styles from "./side-nav.module.scss";

const categories = [
  "Home",
  "Business",
  "Sports",
  "Technology",
  "Health",
  "Entertainment",
];

const SideNav = ({ isOpen, onClose }) => {
  const sideNavRef = useRef(null);
  const { getNewsHeadlines } = useNews();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        onClose && onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categoryClickHandler = (categoryTxt) => {
    getNewsHeadlines({ category: categoryTxt.toLowerCase() });
  };
  return (
    <nav
      ref={sideNavRef}
      className={`${styles["sideNav"]} ${isOpen ? styles["open"] : ""}`}
    >
      <div className={styles["close-nav-wrapper"]}>
        <span className={styles["title"]}>News Categories</span>
        <CloseIcon
          onClick={onClose}
          sx={{
            fontSize: 34,
            color: "#fff",
          }}
        />
      </div>
      <ul className={styles.sideNavList}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={styles.sideNavItem}
            onClick={() => categoryClickHandler(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
