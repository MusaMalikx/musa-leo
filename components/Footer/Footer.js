import { SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiSnapchat } from 'react-icons/si';
import { AiTwotoneMail } from 'react-icons/ai';
import Image from 'next/image';
import Avatar from '../../assets/images/av.jpg';

const Footer = () => {
  return (
    <div className="mt-20">
      <section className="bg-light-border dark:bg-dark-border">
        <div className="max-w-lg bg-light-border dark:bg-dark-border px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-dark dark:text-light text-center sm:leading-none md:text-7xl">
            <span className="inline md:block">Join Me On</span>
            <div className="flex justify-center items-center text-5xl mt-5 mb-10 space-x-5">
              <SiGithub className="border-2 border-dark dark:border-light rounded-full p-2 dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light cursor-pointer" />
              <SiFacebook className="border-2 border-dark dark:border-light rounded-full p-2 dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light cursor-pointer" />
              <SiInstagram className="border-2 border-dark dark:border-light rounded-full p-2 dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light cursor-pointer" />
              <SiSnapchat className="border-2 border-dark dark:border-light rounded-full p-2 dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light cursor-pointer" />
              <SiLinkedin className="border-2 border-dark dark:border-light rounded-full p-2 dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light cursor-pointer" />
              <AiTwotoneMail className="border-2 border-dark dark:border-light rounded-full p-2 dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light cursor-pointer" />
            </div>
          </h1>
        </div>
      </section>

      <hr className="text-dark dark:text-light mx-5" />
      <footer className="bg-light-border dark:bg-dark-border pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Image
                className="rounded-[100%]"
                src={Avatar} //"https://sahilnetic.xyz/evilcat.png"
                width="40"
                height="40"
              />
            </div>

            <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400 lg:text-right lg:mt-0">
              Crafted with ❤️ by{' '}
              <span className="font-family-poppins text-primary-light dark:text-primary-dark tracking-wider font-extrabold">
                Mr Malik
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
