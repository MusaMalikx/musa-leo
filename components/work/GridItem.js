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

const GridItem = ({ bool }) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const { theme } = useTheme();
  //   console.log(theme);
  const ref = useRef();
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
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`${bool && "md:col-span-2"}`}
    >
      {/* <div>
        <AwesomeButton onPress={() => setOpen(true)}>Button</AwesomeButton>
      </div> */}
      {/* // */}
      <div
        onClick={() => setOpen(true)}
        className="rounded-lg h-80 cursor-pointer bg-primary-dark"
      >
        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="rounded-lg h-80 cursor-pointer"
        /> */}
      </div>
      <div
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
            useModal={width < 768 ? false : true}
            scrollingExpands={true}
          >
            <Header>
              <div className="flex items-center justify-between">
                <p>Title</p>
                <div
                  className="p-1 bg-black/20 dark:bg-white/20 rounded-2xl cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <AiOutlineClose className="text-sm" />
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
      </div>
    </motion.div>
  );
};

export default GridItem;
