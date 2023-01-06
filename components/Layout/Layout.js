import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import Arrow from "../Arrow/Arrow";

const Layout = ({ children, bool }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Musa Malik</title>
      </Head>
      <Navbar bool={bool} />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
        className="min-h-screen font-family-montserrat flex-grow scrollbar-hide"
      >
        {children}
      </motion.div>
      <Footer />
      <Arrow />
    </div>
  );
};

export default Layout;
