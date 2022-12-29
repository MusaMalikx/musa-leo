import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import WhatIDo from '../components/WhatIDo/WhatIDo';
import WhatIOffer from '../components/WhatIOffer/WhatIOffer';
import Skills from '../components/Skills/Skills';

const Home = () => {
  return (
    <div className="min-h-screen font-family-montserrat">
      <Navbar />
      <Banner />
      <main className="container mx-auto py-7">
        <About />
        <WhatIDo />
        <WhatIOffer />
        <Skills />
      </main>

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
