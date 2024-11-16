import React, { useState } from "react";
import { useNews } from "@/context/NewsContext";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Backdrop from "@mui/material/Backdrop";
import styles from "./home-page.module.scss";
import Card from "../card";
import ArticlePreview from "../article-preview";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@mui/icons-material/Close";

const HomePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { topHeadlines } = useNews();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleArticleClick = (article) => {
    // Get the clicked card's position
    setSelectedArticle(article);

    if (!isMdUp) {
      // mobile screen
      setOpenModal(true);
    }
  };

  const closePreview = () => {
    setSelectedArticle(null);
    if (!isMdUp) {
      setOpenModal(false);
    }
  };

  return (
    <section
      className={`${styles["homepage-container"]} ${
        selectedArticle && isMdUp ? styles["shifted"] : ""
      }`}
    >
      <ul className={styles["homepage-wrapper"]}>
        {topHeadlines &&
          topHeadlines.articles?.map((article, index) => (
            <Card
              key={`${index}_${article?.author}`}
              title={article.title}
              description={article.description}
              image={article.urlToImage}
              source={article.source.name}
              date={article.publishedAt}
              author={article.author}
              onCardClick={() => handleArticleClick(article)}
            />
          ))}
      </ul>
      {topHeadlines && topHeadlines?.articles?.length === 0 && (
        <div style={{ display: "flex" }}>
          <CloseIcon sx={{ fontSize: 52 }} />
          <span style={{ fontSize: "42px", fontWeight: "bold" }}>
            No results found
          </span>
        </div>
      )}

      {selectedArticle && isMdUp && (
        <div className={styles["preview-container"]}>
          <ArticlePreview
            article={selectedArticle}
            openModal={openModal}
            onClose={closePreview}
          />
        </div>
      )}
      {selectedArticle && (
        <Modal
          open={openModal}
          onClose={closePreview}
          center
          classNames={{
            modal: styles["modal"],
          }}
        >
          <ArticlePreview article={selectedArticle} openModal={openModal} />
        </Modal>
      )}
    </section>
  );
};

export default HomePage;
