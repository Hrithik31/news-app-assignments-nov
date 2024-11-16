import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { formatDate } from "@/utils/utils";
import styles from "./article-preview.module.scss";
const ArticlePreview = ({ article, onClose, openModal }) => {
  return (
    <div
      className={`${styles["ap-container"]} ${
        openModal ? styles["modal-container"] : ""
      }`}
    >
      <div
        className={`${styles["title-wrapper"]}`}
        style={openModal ? { borderBottom: "none" } : {}}
      >
        <div className={styles["title"]}>{article.title}</div>
        {onClose && (
          <CloseIcon className={styles["closeIcon"]} onClick={onClose} />
        )}
      </div>
      <div className={styles["article-meta"]}>
        <p className={styles["news-source"]}>
          Story By: <span style={{ fontWeight: "bold" }}>{article.author}</span>
        </p>

        <p className={styles["news-date"]}>
          article published on {formatDate(article.publishedAt)}
        </p>
      </div>
      <div className={styles["img-container"]}>
        <img
          src={article.urlToImage}
          alt={article.title}
          className={styles["img"]}
        />
      </div>
      <div className={styles["description-container"]}>
        {article.description}
      </div>
    </div>
  );
};

export default ArticlePreview;
