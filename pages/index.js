import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import WhatIOffer from "../components/WhatIOffer/WhatIOffer";
import Skills from "../components/Skills/Skills";
import Lottie from "react-lottie";
import lottie from "../assets/animations/71745-loader.json";
import Layout from "../components/Layout/Layout";
// import Footer from '../components/Footer/Footer';
// import { ScrollerMotion } from 'scroller-motion';
// import Head from 'next/head';
// import { Loader } from '../components/Animations/Loader';

const Home = () => {
  return (
    <Layout bool={true}>
      <div className="min-h-screen font-family-montserrat">
        {/* <Head>
        <title>Musa Malik</title>
      </Head> */}
        {/* <Loader /> */}
        {/* <div className="mt-[88px] md:mt-[98px]"></div> */}
        <Banner />
        <main className="container mx-auto py-7">
          <About />
          <WhatIDo />
          <WhatIOffer />
          <Skills />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
