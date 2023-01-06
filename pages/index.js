import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import WhatIOffer from "../components/WhatIOffer/WhatIOffer";
import Skills from "../components/Skills/Skills";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout bool={true}>
      <div className="min-h-screen font-family-montserrat">
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
