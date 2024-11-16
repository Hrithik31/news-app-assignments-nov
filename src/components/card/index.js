import React from "react";
import { formatDate } from "@/utils/utils";
import styles from "./card.module.scss";

const Card = ({
  title,
  description,
  image,
  source,
  date,
  onCardClick,
  author,
}) => {
  return (
    <li className={styles["news-item"]} onClick={onCardClick}>
      <div className={styles["news-image"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles["news-content"]}>
        <h2 className={styles["news-title"]}>{title}</h2>
        <div className={styles["news-meta"]}>
          <span className={styles["news-source"]}>
            Story By: <span style={{ fontWeight: "bold" }}>{author}</span>
          </span>

          <span className={styles["news-date"]}>
            article published on {formatDate(date)}
          </span>
        </div>
        <p className={styles["news-description"]}>{description}</p>
        <div className={styles["news-meta"]}>
          <span className={styles["news-source"]}>sourse: {source}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
