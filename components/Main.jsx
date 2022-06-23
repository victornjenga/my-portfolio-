import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const Main = () => {
  return (
    <div className="text-center pt-[8%] mx-3 h-[500px] space-y-2 flex flex-col items-center justify-center">
      <div className=" w-full h-full p-2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center items-center">
          <p>Lets build something together</p>
          <h1>
            Hi,I am <span className="text-red-600">Victor</span>
          </h1>
          <h1 className="py-2 text-gray-600">A Front-End Web Developer </h1>
          <p className="py-4 text-gray-500 max-w-[70%] w-auto">
            I am a Front-end developer specialising in building (and
            occassinally designing) exeptional digital experiences.Currently,I,m
            focused on building responsive front-end web applications while
            learning back-end technologies
          </p>
          <div className="flex items-center justify-between space-x-3 py-4">
            <a
              href="https://www.linkedin.com/in/victor-njenga-b78857227/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/victornjenga"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <Link href="/resume">
              <a>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
