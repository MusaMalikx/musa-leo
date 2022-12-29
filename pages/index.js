import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import WhatIDo from '../components/WhatIDo/WhatIDo';
import WhatIOffer from '../components/WhatIOffer/WhatIOffer';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import { ScrollerMotion } from 'scroller-motion';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="min-h-screen font-family-montserrat">
      <Head>
        <title>Musa Malik</title>
      </Head>
      <Navbar />
      <ScrollerMotion>
        <div className="pt-[88px] md:pt-[98px]"></div>
        <Banner />
        <main className="container mx-auto py-7">
          <About />
          <WhatIDo />
          <WhatIOffer />
          <Skills />
        </main>
        <Footer />
      </ScrollerMotion>
      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
