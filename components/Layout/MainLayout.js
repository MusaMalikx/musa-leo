import Head from 'next/head';
// import { ScrollerMotion } from 'scroller-motion';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Main = ({ children, router }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Musa Malik - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <div className="min-h-screen">
        {/* <ScrollerMotion> */}
        {children}
        <Footer />
        {/* </ScrollerMotion> */}
      </div>
    </div>
  );
};

export default Main;
