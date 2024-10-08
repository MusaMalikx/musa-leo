import { useRouter } from "next/router";
import { IoCaretBackSharp } from "react-icons/io5";
import Layout from "../../components/Layout/Layout";
import Grid from "../../components/work/Grid";

const Work = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="container px-10 mx-auto py-7">
        <div className="flex ml-8 mb-10" onClick={() => router.push("/")}>
          <span>
            <IoCaretBackSharp className="text-primary-light dark:text-primary-dark text-2xl" />
          </span>
          <span className="dark:text-light text-dark ml-2 text-lg hover:text-primary-light cursor-pointer hover:underline hover:underline-offset-2">
            Home
          </span>
        </div>
        <div className="uppercase font-family-plaster text-4xl sm:text-6xl lg:text-9xl text-center mb-20">Work</div>
        <Grid />
      </div>
    </Layout>
  );
};

export default Work;
