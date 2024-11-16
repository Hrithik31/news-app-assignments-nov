import { NewsProvider } from "@/context/NewsContext";
import Layout from "@/layout";
import "@/styles/globals.scss";
import "react-responsive-modal/styles.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NewsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NewsProvider>
      </ThemeProvider>
    </>
  );
}
