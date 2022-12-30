import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Animations/Loader";
// import { ScrollerMotion } from 'scroller-motion';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = ({ children, router }) => {
  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 2000);
  // }, []);
  console.log(router.asPath);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Musa Malik - Homepage</title>
      </Head>

      {loader && <Loader />}

      {/* <Navbar path={router.asPath} /> */}
      <div className="min-h-screen">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
