import React, { createContext, useState, useContext, useEffect } from "react";
import { Circles } from "react-loader-spinner";
const NewsContext = createContext();

export const useNews = () => useContext(NewsContext); // custome hook

export const NewsProvider = ({ children }) => {
  // const newsEndPoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
  const baseEndPoint = `https://newsapi.org/v2/top-headlines`;
  const apiKeyParams = `&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    getNewsHeadlines({});
  }, [selectedCategory]);

  const getNewsHeadlines = async ({ category = "", country = "us" }) => {
    setLoading(true);
    try {
      const endPoint = `${baseEndPoint}?country=${country}${
        category && category !== "home" ? `category=${category}` : ""
      }${apiKeyParams}`;
      const data = await fetch(endPoint);
      const newsData = await data.json();
      setTopHeadlines(newsData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return (
    <NewsContext.Provider
      value={{
        topHeadlines,
        selectedCategory,
        setSelectedCategory,
        loading,
        error,
        getNewsHeadlines,
      }}
    >
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          visible={true}
        />
      )}
      {!loading && children}
      {/* {children} */}
    </NewsContext.Provider>
  );
};
