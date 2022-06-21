import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
// import Pdf from "../public/assets/resume.pdf";
const resume = () => {
  return (
    <>
      <Head>
        <title>Victor | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Victor Njenga</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/victor-njenga-b78857227/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-njenga-b78857227/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="App">
          <a
            href="../public/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Pdf
          </a>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <p>
            Proven Skills <span className="px-1">|</span> Web Development{" "}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <p>
          I am an IT enthusiast eager to learn and be a part of big projects
          that impact the live of others
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
          </p>
          <p className="py-2">
            <span className="font-bold">Email</span>
            <span className="px-2">:</span>
            <a onPress={() => Linking.openURL("mailto:rotcivnjenga@gmail.com")}>
              rotcivnjenga@gmail.com
            </a>
          </p>
        </div>

        {/* Experience */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">
            Professional Experience
          </h5>
          <p className="italic">
            <span className="font-bold">2020 – 2022</span>
            <span className="px-2">|</span>WEB DESIGN,
          </p>
          <p className="py-1 italic">FREELANCING</p>
          <p>
            I have been building website since I learn how to use WordPress.
            This inspired me to learn web development to solve challenges I
            couldn’t with content management system
          </p>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold">2021 – NOW</span>
            <span className="px-2">|</span>DEVELOPER,
          </p>
          <p className="py-1 italic">DIGITALGURUS</p>
          <p>
            I have been working at Digital guru making and developing websites.
            This has helped me to polish up my web dev skills even further
          </p>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">ACTIVITIES</span>
          </p>
          <p className="py-1 italic">Freelance Work,Learning</p>
          <p>
            I am currently working on a bunch of projects which poses various
            challenges but a great opportunity to master the core concepts of
            programming. I am eager to learn and gain more experience. I would
            be grateful if I had a chance to work in your company
          </p>
        </div>
        <Link href="/">
          <p className="cursor-pointer bg-gray-400  max-w-fit rounded-lg px-3 py-2 font-bold">
            Back
          </p>
        </Link>
      </div>
    </>
  );
};

export default resume;
