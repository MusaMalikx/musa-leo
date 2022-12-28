import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "react-hamburger-menus/dist/style.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProSidebarProvider } from "react-pro-sidebar";
// import "bower_components/aos/dist/aos.css";
// import "bower_components/aos/dist/aos.js";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AnimatePresence mode="wait" initial={true}>
      <ThemeProvider enableSystem={true} attribute="class">
        <ProSidebarProvider>
          <Component {...pageProps} />
        </ProSidebarProvider>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
