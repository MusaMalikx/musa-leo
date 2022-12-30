import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import WhatIDo from '../components/WhatIDo/WhatIDo';
import WhatIOffer from '../components/WhatIOffer/WhatIOffer';
import Skills from '../components/Skills/Skills';
// import Footer from '../components/Footer/Footer';
// import { ScrollerMotion } from 'scroller-motion';
// import Head from 'next/head';
// import Layout from '../components/Layout/ArticleLayout';
// import { Loader } from '../components/Animations/Loader';

const Home = () => {
  return (
    // <Layout title="Homepage">
    <div className="min-h-screen font-family-montserrat">
      {/* <Head>
        <title>Musa Malik</title>
      </Head> */}
      {/* <Loader /> */}
      <div className="mt-[88px] md:mt-[98px]"></div>
      <Banner />
      <main className="container mx-auto py-7">
        <About />
        <WhatIDo />
        <WhatIOffer />
        <Skills />
      </main>
    </div>
    // </Layout>
  );
};

export default Home;
