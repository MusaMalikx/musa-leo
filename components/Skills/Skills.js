import HeaderLayout from '../Layout/HeaderLayout';
import ParallaxText from './ParallexText';

const Skills = () => {
  return (
    <div className="my-20">
      <HeaderLayout text="Skills" />
      <div className="relative mt-20">
        <ParallaxText>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Framer Motion</ParallaxText>
        <div className="bg-primary-dark/30 backdrop-blur-md h-full w-2 absolute top-0 left-0 rounded-r-lg" />
        <div className="bg-primary-dark/30 backdrop-blur-md h-full w-2 absolute top-0 right-0 rounded-l-lg" />
      </div>
    </div>
  );
};

export default Skills;
