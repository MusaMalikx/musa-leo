import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Sheet,
  Header,
  Content,
  Footer,
  detents,
  Portal,
} from "react-sheet-slide";
import useWindowSize from "../../utils/screen";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const GridItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const { theme } = useTheme();
  //   console.log(theme);
  const ref = useRef();
  const router = useRouter();
  //   const toggle = () => setClick(!click);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      //   transition={{ ease: "easeOut", duration: 1 }}
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.5 },
      }}
      // whileTap={{ scale: 0.9 }}
      whileFocus={{ scale: 0.8 }}
    >
      {/* <div>
        <AwesomeButton onPress={() => setOpen(true)}>Button</AwesomeButton>
      </div> */}
      {/* // */}
      <motion.div
        // onClick={() => setOpen(true)}
        // className="rounded-lg h-72 cursor-pointer bg-primary-dark "
        className="grid grid-cols-1 md:grid-cols-2 bg-primary-dark/50  p-5 rounded-lg overflow-hidden"
      >
        <div className="flex justify-end mt-10 md:mt-0 flex-col pb-10 md:pb-0 mr-5 space-y-4">
          <p className="font-bold text-2xl md:text-4xl">{data.title}</p>
          <p className="text-sm md:text-base">
            Description Vivamus dui dui, imperdiet non facilisis eget, commodo a
            enim. Nulla viverra sem dui.
          </p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            // onClick={() => setOpen(true)}
            onClick={() =>
              router.push({
                pathname: `/work/${data.title.toLowerCase()}`,
                query: data,
              })
            }
            className="hover:bg-light/40 bg-light/20 dark:bg-dark/20 hover:dark:bg-dark/40 px-3 py-2 rounded-md focus:ring-2 focus:ring-primary-light focus:dark:ring-primary-dark ring-offset-2 ring-offset-light dark:ring-offset-dark "
          >
            Learn more
          </motion.button>
        </div>
        <motion.div
          whileHover={{
            transition: {
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: "linear" },
            },
          }}
          className="my-auto"
        >
          <Image
            src={data.image}
            placeholder="blur"
            width={1920}
            height={1080}
            blurDataURL="/blur.jpg"
            alt="image"
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
      {/* <div
        className="rss-backdrop z-50"
        // style={{ background: "#f7f8f8", minHeight: "100vh" }}
      >
        <Portal>
          <Sheet
            ref={ref}
            open={open}
            onDismiss={() => setOpen(false)}
            onClose={() => {
              console.log("Component unmounted");
            }}
            selectedDetent={detents.medium}
            detents={(props) => [detents.medium(props), detents.fit(props)]}
            useDarkMode={theme === "dark" ? true : false}
            useModal={false}
            scrollingExpands={true}
          >
            <Header>
              <div className="flex items-center justify-between">
                <p className="font-bold text-2xl md:text-4xl">{data.title}</p>
                <div
                  className="p-1 bg-black/20 dark:bg-white/20 rounded-2xl cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <AiOutlineClose className="text-lg" />
                </div>
              </div>
            </Header>
            <Content>
              <div style={{ padding: "54px 16px 24px" }}>
                <div>Add more storage to keep everything on online</div>
                <div>
                  Online includes plenty of storage to keep all your data safe
                  and features to protect your privacy.
                </div>
                <div>Learn More About Online</div>
              </div>
            </Content>
            <Footer>
              <button type="button" onClick={() => setOpen(false)}>
                Close
              </button>
            </Footer>
          </Sheet>
        </Portal>
      </div> */}
    </motion.div>
  );
};

export default GridItem;
