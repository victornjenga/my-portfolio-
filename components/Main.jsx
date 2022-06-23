import React from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const commonStyles =
  "min-h-[70px] sm:px-3 px-2  flex justify-center items-center border-black  border-2";
const Main = () => {
  return (
    <div>
      <div className="text-center mx-3 h-[500px] space-y-2 flex flex-col items-center justify-center">
        <p className="text-xl font-bold">
          Hi,I am <span className="text-red-600">Victor</span>
        </p>
        <h1 className="py-2 text-gray-600">A Front-End Web Developer </h1>
        <p className="py-4 text-gray-500 max-w-[70%] w-auto">
          I am a Front-end developer specialising in building (and occassinally
          designing) exeptional digital experiences.Currently,I,m focused on
          building responsive front-end web applications while learning back-end
          technologies
        </p>

        <div className="flex space-x-2 py-3">
          <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
            <FaFacebookF />
          </div>
          <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
            <FaTwitter />
          </div>
          <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
            <FaLinkedinIn />
          </div>
        </div>
        {/* <div className="grid text-black sm:grid-cols-3 grid-cols-2 justify-center items-center w-[60%]  ">
          <div className={`rounded-tl-2xl  ${commonStyles}`}>
            <p className="mx-3 spaxe-x-3">Web Development</p>
          </div>
          <div className={`rounded-tr-2xl sm:rounded-none  ${commonStyles}`}>
            <p className="mx-3 spaxe-x-3">Mobile Apps</p>
          </div>
          <div className={`md:rounded-tr-2xl ${commonStyles}`}>
            <p className="mx-3 spaxe-x-3"> System Development</p>
          </div>
          <div className={`md:rounded-bl-2xl ${commonStyles}`}>
            <p className="mx-3 spaxe-x-3">Ecommerce Intergration</p>
          </div>
          <div className={`rounded-bl-2xl sm:rounded-none  ${commonStyles}`}>
            <p className="spaxe-x-3"> Web Design</p>
          </div>
          <div className={`rounded-br-2xl ${commonStyles}`}>
            <p className="px-3 spaxe-x-3">Website/App Maintenance</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
