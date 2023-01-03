import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "react-sheet-slide/style.css";
// import { useEffect } from 'react';
import Layout from "../components/Layout/MainLayout";

function MyApp({ Component, pageProps, router }) {
  // useEffect(() => {
  //   document.addEventListener('contextmenu', function (e) {
  //     e.preventDefault();
  //   });
  // }, []);

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
