import React from 'react';
import HeaderLayout from '../Layout/HeaderLayout';
// import Lottie from 'react-lottie';
import lottie from '../../assets/animations/119356-development.json';
import useWindowSize from '../../utils/screen';
import ScrollRightMotion from '../Layout/Motions/ScrollRightMotion';
import ScrollLeftMotion from '../Layout/Motions/ScrollLeftMotion';
import Lottie from 'react-lottie-player';

const WhatIDo = () => {
  const { width } = useWindowSize();
  return (
    <section id="whatIDo">
      <div className="mt-20">
        <HeaderLayout text="What I Do" />
        <div className="flex flex-col-reverse lg:grid grid-cols-2 justify-center items-center mt-24">
          <div className="space-y-4 sm:space-y-0 lg:space-y-4 sm:grid grid-cols-2 gap-4 justify-center block lg:block">
            <ScrollLeftMotion className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2">
              <span className="text-primary-dark">&gt;</span>
              <div className="space-y-1">
                <strong className="uppercase font-family-montserrat">
                  Design
                </strong>
                <p className=" font-family-montserrat text-sm">
                  Designing a product is my favourite activity. I like to
                  explore and get inspired, but the final result of my work is a
                  connection between inspiration and my ideas and imagination.
                </p>
              </div>
            </ScrollLeftMotion>
            <ScrollLeftMotion className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2">
              <span className="text-primary-dark">&gt;</span>
              <div className="space-y-1">
                <strong className="uppercase font-family-montserrat">
                  Development
                </strong>
                <p className=" font-family-montserrat text-sm">
                  When developing a product, it is especially important to
                  create a reusable components which results in clarity and
                  easier understanding of the code. The source that I use for
                  this purpose is REACT.
                </p>
              </div>
            </ScrollLeftMotion>
            <ScrollLeftMotion className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2">
              <span className="text-primary-dark">&gt;</span>
              <div className="space-y-1">
                <strong className="uppercase font-family-montserrat">
                  E-commerce
                </strong>
                <p className=" font-family-montserrat text-sm">
                  For me, creating ecommerce applications is a kind of an
                  extension of the presentation. However, not a presentation of
                  a person in the form of a website, but a product where I
                  combine design , functionality and the ability to interact
                  with the content of the application.
                </p>
              </div>
            </ScrollLeftMotion>
            <ScrollLeftMotion className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2">
              <span className="text-primary-dark">&gt;</span>
              <div className="space-y-1">
                <strong className="uppercase font-family-montserrat">
                  App / Portfolio
                </strong>
                <p className=" font-family-montserrat text-sm">
                  My development beginnings lie in the creation of web
                  portfolios. A portfolio website is the quickest and easiest
                  way of showcasing your work as a designer or freelancer.
                  Building on apps has become both challenge and joy. The
                  diversity of application development mainly helps me to build
                  up on my functional skills.
                </p>
              </div>
            </ScrollLeftMotion>
          </div>
          <ScrollRightMotion className="flex justify-center items-center mb-20 md:mb-0">
            <Lottie
              // options={{
              //   loop: true,
              //   autoplay: true,
              //   animationData: lottie,
              //   rendererSettings: {
              //     preserveAspectRatio: "xMidYMid slice",
              //   },
              // }}
              // isClickToPauseDisabled
              // height={width > 768 ? 400 : 300}
              // width={width > 768 ? 400 : 300}
              loop
              animationData={lottie}
              style={{
                width: width > 768 ? 500 : 300,
                height: width > 768 ? 500 : 300,
              }}
            />
          </ScrollRightMotion>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
