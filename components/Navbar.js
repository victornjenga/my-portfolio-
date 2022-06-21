import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
// import { AiOutlineClose } from "@heroicons/react/ai ";
function Navbar() {
  const [open, setOpen] = useState();
  return (
    <div className="w-full   shadow-xl z-[100] fixed">
      <div className="flex  bg-slate-200 justify-between items-center w-full  h-20 px-2 ">
        <h2 className="text-black font-sans italic ">VICTOR</h2>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className=" font-bold ml-10 px-4 text-sm uppercase hover:border-b border-orange-400">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className=" font-bold ml-10 px-4 text-sm uppercase hover:border-b border-orange-400">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className=" font-bold ml-10 px-4 text-sm uppercase hover:border-b border-orange-400">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" font-bold ml-10 px-4 text-sm uppercase hover:border-b border-orange-400">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className=" font-bold ml-10 px-4 text-sm uppercase hover:border-b border-orange-400">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              <AiOutlineMenu />
            </div>
          </div>
          {open && (
            <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/70">
              <div className="fixed left-0 top-0 w-[75%] md:w-[45%] h-screen bg-slate-300">
                <div className="flex mt-4 w-full items-center justify-between">
                  <h2 className="text-black font-sans italic ">VICTOR</h2>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mr-4 "
                    onClick={() => setOpen(!open)}
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-gray-400 p-3 my-4">
                  <p className="w-full py-4">
                    {" "}
                    Lets build something legendary together
                  </p>
                </div>
                <div className="md:hidden ml-4 mb-5">
                  <ul className="  flex flex-col md:hidden  ">
                    <Link href="/">
                      <li
                        onClick={() => setOpen(!open)}
                        className="py-4  text-lg "
                      >
                        Home
                      </li>
                    </Link>
                    <Link href="/#about">
                      <li
                        onClick={() => setOpen(!open)}
                        className="py-4  text-lg "
                      >
                        About
                      </li>
                    </Link>
                    <Link href="/#skills">
                      <li
                        onClick={() => setOpen(!open)}
                        className="py-4  text-lg "
                      >
                        Skills
                      </li>
                    </Link>
                    <Link href="/#projects">
                      <li
                        onClick={() => setOpen(!open)}
                        className="py-4  text-lg "
                      >
                        Projects
                      </li>
                    </Link>
                    <Link href="/#contact">
                      <li
                        onClick={() => setOpen(!open)}
                        className="py-4  text-lg "
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>
                  <div className="py-6">
                    <p className="uppercase tracking-widest text-red-600">
                      Let&#39;s Connect
                    </p>
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                      <a
                        href="https://www.linkedin.com/in/victor-njenga-b78857227/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <FaLinkedinIn />
                        </div>
                      </a>
                      <a
                        href="https://github.com/victornjenga"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <FaGithub />
                        </div>
                      </a>
                      <Link href="/#contact">
                        <div
                          onClick={() => setNav(!nav)}
                          className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                        >
                          <AiOutlineMail />
                        </div>
                      </Link>
                      <Link href="/resume">
                        <div
                          onClick={() => setNav(!nav)}
                          className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                        >
                          <BsFillPersonLinesFill />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
