// import Lottie from "react-lottie";
import lottie2 from "../../assets/animations/46147-background2.json";
import Image from "next/image";
import user from "../../assets/images/mr.jpg";
import useWindowSize from "../../utils/screen";
import HeaderLayout from "../Layout/HeaderLayout";
import ScrollRightMotion from "../Layout/Motions/ScrollRightMotion";
import ScrollLeftMotion from "../Layout/Motions/ScrollLeftMotion";
import { useRouter } from "next/router";
import Lottie from "react-lottie-player";

const About = () => {
  const { width } = useWindowSize();
  const router = useRouter()
  return (
    <section id="about">
      <div className="mt-20">
        <HeaderLayout text="About Me" />
      </div>
      <div className="flex flex-col md:grid grid-cols-2 justify-center items-center">
        <ScrollLeftMotion className="relative flex justify-center items-center">
          <div className="z-10">
            <Lottie
              // options={{
              //   loop: true,
              //   autoplay: true,
              //   animationData: lottie2,
              //   rendererSettings: {
              //     preserveAspectRatio: "xMidYMid slice",
              //   },
              // }}
              // isClickToPauseDisabled
              // height={width > 768 ? 600 : 400}
              // width={width > 768 ? 600 : 400}
              loop
              animationData={lottie2}
              play={width > 768 ? true : false}
              style={{
                width: width > 768 ? 600 : 400,
                height: width > 768 ? 600 : 400,
              }}
            />
          </div>
          <div className="absolute z-0">
            <Image
              className="rounded-full"
              src={user}
              alt="profile"
              width={width > 768 ? 300 : 200}
              height={width > 768 ? 300 : 200}
            />
          </div>
        </ScrollLeftMotion>
        <ScrollRightMotion className="font-family-montserrat tracking-wide text-justify lg:text-xl mx-10">
          <div>
            Welcome to my personal portfolio web. My name is Musa and I am a
            passionate developer. I am working as a freelancer. I give myself a
            mission to produce creative websites and applications with
            beautifull details. I enrich the design with my own illustrations
            and designs that are created with precision and based on your
            desire.
          </div>
          <button className="group flex justify-center items-center mx-auto md:mx-0 relative h-10 md:h-12 w-48 md:w-52 mt-10 focus:ring-2 focus:ring-primary-light/50 dark:focus:ring-primary-dark/50 ring-offset-2 ring-offset-light dark:ring-offset-dark overflow-hidden rounded-lg dark:bg-dark-border bg-light-border text-lg shadow hover:shadow-gray-700 dark:hover:shadow-gray-400">
            <div className="absolute inset-0 w-3 bg-primary-light dark:bg-primary-dark transition-all duration-[500ms] ease-out group-hover:w-full"></div>
            <span
              onClick={() => router.push("/portfolio")}
              className="relative dark:text-light text-dark dark:group-hover:text-dark group-hover:text-light tracking-wider text-sm md:text-lg"
            >
              See my Portfolio
            </span>
          </button>
        </ScrollRightMotion>
      </div>
    </section>
  );
};

export default About;
