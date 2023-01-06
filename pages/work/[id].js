import { useRouter } from "next/router";
import React from "react";
import { IoCaretBackSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Badge from "../../components/work/Badge";
import Slider from "../../components/work/Slider";
import TechBadge from "../../components/work/TechBadge";
import { selectData } from "../../redux/features/postReducer";

const WorkItem = () => {
  const router = useRouter();
  const data = useSelector(selectData);
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
        {data && (
          <>
            <div className="uppercase font-family-stencil tracking-widest text-4xl sm:text-6xl lg:text-9xl text-center mb-10">
              {data.title}
            </div>
            <p className="mb-10 text-justify">
              {/* There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything embarrassing hidden in the middle
          of text. */}
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit.
            </p>
            <div className="space-y-3 mb-10 md:mb-20">
              {data.website !== "" && (
                <Badge text="website" link={true} linkText={data.website} />
              )}
              {data.source !== "" && (
                <Badge text="source" source={true} sourceText={data.source} />
              )}
              {data.stack.length !== 0 && (
                <div className="flex justify-start items-start gap-1">
                  <Badge text="stack" />
                  <div className="flex flex-wrap gap-3 items-center space-x-1">
                    {data.stack.map((data, i) => (
                      <div key={i}>
                        {data.tailwind && <TechBadge tailwind />}
                        {data.redux && <TechBadge redux />}
                        {data.firebase && <TechBadge firebase />}
                        {data.react && <TechBadge react />}
                        {data.next && <TechBadge next />}
                        {data.nest && <TechBadge nest />}
                        {data.chakra && <TechBadge chakra />}
                        {data.framer && <TechBadge framer />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Slider images={data.images} />
          </>
        )}
      </div>
    </Layout>
  );
};



export default WorkItem;
