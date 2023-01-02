import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useRef } from "react";
import { AwesomeButton } from "react-awesome-button";

import useWindowSize from "../../utils/screen";
import GridItem from "./GridItem";

const Grids = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const { theme } = useTheme();
  //   console.log(theme);
  const ref = useRef();
  //   const toggle = () => setClick(!click);

  return (
    <div className="mx-10">
      {/* <GridItem open={open} setOpen={setOpen} />
      <div>
        <AwesomeButton onPress={() => setOpen(true)}>Button</AwesomeButton>
      </div> */}
      {/* <div>
        <AwesomeButton onPress={() => setOpen(true)}>Button</AwesomeButton>
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
            <Header>Title</Header>
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
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem bool={true} />
        <GridItem />
        <GridItem />
        <GridItem bool={true} />

        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="rounded-lg h-80"
        /> */}

        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="rounded-lg h-80"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="rounded-lg h-80"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="md:col-span-2 rounded-lg h-80"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="rounded-lg h-80"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="rounded-lg h-80"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          placeholder="blur"
          width={1920}
          height={1080}
          blurDataURL="/blur.jpg"
          className="md:col-span-2 rounded-lg h-80"
        /> */}
      </div>
    </div>
  );
};

export default Grids;
