import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <AnimatePresence mode="wait" initial={true}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
