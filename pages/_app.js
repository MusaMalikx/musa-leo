import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
