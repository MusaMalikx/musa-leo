import { useRouter } from "next/router";
import React from "react";
import { IoCaretBackSharp } from "react-icons/io5";
import Layout from "../../components/Layout/Layout";
import Badge from "../../components/work/Badge";
import Slider from "../../components/work/Slider";
import TechBadge from "../../components/work/TechBadge";
// import Badge from "@uiw/react-badge";

const WorkItem = () => {
  const router = useRouter();
  //   console.log(router.query)
  const { title, image } = router.query;

  return (
    <Layout>
      <div className="container px-10 mx-auto py-7 ">
        <div className="flex items-center space-x-2 mb-10">
          <span>
            <IoCaretBackSharp className="text-primary-light dark:text-primary-dark text-2xl" />
          </span>
          <span
            onClick={() => router.push("/")}
            className="dark:text-light text-dark ml-2 text-lg hover:text-primary-light hover:dark:text-primary-dark cursor-pointer hover:underline hover:underline-offset-2"
          >
            Home
          </span>
          <span>/</span>
          <span
            onClick={() => router.push("/work")}
            className="dark:text-light text-dark ml-2 text-lg hover:text-primary-light hover:dark:text-primary-dark cursor-pointer hover:underline hover:underline-offset-2"
          >
            Work
          </span>
        </div>
        <div className="uppercase font-family-stencil tracking-widest text-4xl sm:text-6xl lg:text-9xl text-center mb-10">
          {title}
        </div>
        <p className="mb-10 text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <div className="space-y-3 mb-10 md:mb-20">
          <Badge text="website" link={true} />
          <Badge text="source" source={true} />
          <div className="flex justify-start items-center gap-1">
            <Badge text="stack" />
            <div className="flex flex-wrap gap-3 items-center space-x-1">
              <TechBadge tailwind />
              <TechBadge redux />
              <TechBadge firebase />
              <TechBadge react />
              <TechBadge next />
            </div>
          </div>
        </div>
        <Slider image={image} />
      </div>
    </Layout>
  );
};

export default WorkItem;
