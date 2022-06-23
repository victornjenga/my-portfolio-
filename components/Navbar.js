import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState();
  return (
    <div className="fixed w-full z-10">
      <div className="w-full h-16  bg-slate-200 flex  justify-around items-center text-center">
        <h2 className="text-xl font-bold italic">Victor</h2>

        <ul className=" hidden space-x-4  md:flex">
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

        <AiOutlineMenu
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div className="bg-slate-200 md:hidden top-0 h-full px-5 w-[75%] b-0 fixed z-10">
          <div className="flex py-5 justify-between">
            <h2
              onClick={() => setOpen(false)}
              className="text-xl font-bold italic"
            >
              <Link href="/#home">Victor</Link>
            </h2>

            <AiOutlineClose
              onClick={() => setOpen(false)}
              className="text-2xl cursor-pointer shadow-lg shadow-slate-600 p-1 rounded-full font-bold "
            />
          </div>
          <div className="mx-1 text-xl border-b border-gray-600 border-solid ">
            <p className="py-5">Lets Build Something Legendary Together</p>
          </div>

          <ul className="block space-y-4 pt-5 ">
            <Link href="/">
              <li onClick={() => setOpen(!open)} className="py-4  text-lg ">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li onClick={() => setOpen(!open)} className="py-4  text-lg ">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li onClick={() => setOpen(!open)} className="py-4  text-lg ">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li onClick={() => setOpen(!open)} className="py-4  text-lg ">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li onClick={() => setOpen(!open)} className="py-4  text-lg ">
                Contact
              </li>
            </Link>
          </ul>
          <h2 className="pt-5 text-xl   text-red-600">Lets Connect</h2>
          <div className="flex space-x-2 py-2">
            <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
              <FaFacebookF />
            </div>
            <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
              <FaGithub />
            </div>
            <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
              <FaTwitter />
            </div>
            <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
