import HeaderLayout from '../Layout/HeaderLayout';
import Parallax from './Parallex';
import { HiDatabase } from 'react-icons/hi';
import {
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiReactrouter,
  SiMongodb,
  SiKotlin,
  SiPython,
  SiJava,
  SiCplusplus,
  SiSqlite,
  SiJavascript,
  SiSass,
  SiGit,
} from 'react-icons/si';
import { motion } from 'framer-motion';
// import { TbBrandNextjs } from 'react-icons/tb';

const Skills = () => {
  const iconClassName = 'text-6xl md:text-9xl text-primary-light dark:text-primary-dark';

  return (
    <div className="my-20">
      <HeaderLayout text="Skills" />
      <motion.div
        initial={{ y: -40, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ ease: 'easeOut', duration: 0.8 }}
        className="relative pt-20 space-y-10 md:mt-10"
      >
        <Parallax baseVelocity={2}>
          <div className="flex space-x-10 md:space-x-20 ml-10 md:ml-20">
            <SkillItem text="React Js" icon={<SiReact className={iconClassName} />} />
            <SkillItem text="Next Js" icon={<SiNextdotjs className={iconClassName} />} />
            <SkillItem text="Node Js" icon={<SiNodedotjs className={iconClassName} />} />
            <SkillItem text="Express Js" icon={<SiExpress className={iconClassName} />} />
          </div>
        </Parallax>
        <Parallax baseVelocity={-3}>
          <div className="flex space-x-10 md:space-x-20 ml-10 md:ml-20">
            <SkillItem text="Redux" icon={<SiRedux className={iconClassName} />} />
            <SkillItem text="React Router" icon={<SiReactrouter className={iconClassName} />} />
            <SkillItem text="Mongo DB" icon={<SiMongodb className={iconClassName} />} />
            <SkillItem text="Sql" icon={<HiDatabase className={iconClassName} />} />
          </div>
        </Parallax>
        <Parallax baseVelocity={4}>
          <div className="flex space-x-10 md:space-x-20 ml-10 md:ml-20">
            <SkillItem text="Kotlin" icon={<SiKotlin className={iconClassName} />} />
            <SkillItem text="Python" icon={<SiPython className={iconClassName} />} />
            <SkillItem text="Java" icon={<SiJava className={iconClassName} />} />
            <SkillItem text="Sql Lite" icon={<SiSqlite className={iconClassName} />} />
          </div>
        </Parallax>
        <Parallax baseVelocity={-5}>
          <div className="flex space-x-10 md:space-x-20 ml-10 md:ml-20">
            <SkillItem text="Javascript" icon={<SiJavascript className={iconClassName} />} />
            <SkillItem text="Sass" icon={<SiSass className={iconClassName} />} />
            <SkillItem text="Git" icon={<SiGit className={iconClassName} />} />
            <SkillItem text="C++" icon={<SiCplusplus className={iconClassName} />} />
          </div>
        </Parallax>
        <div className="bg-primary-dark/30 backdrop-blur-md h-full w-2 absolute top-0 left-0 rounded-r-lg" />
        <div className="bg-primary-dark/30 backdrop-blur-md h-full w-2 absolute top-0 right-0 rounded-l-lg" />
      </motion.div>
    </div>
  );
};

const SkillItem = ({ text, icon }) => {
  return (
    <div className="flex items-center space-x-3 md:space-x-6">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default Skills;
