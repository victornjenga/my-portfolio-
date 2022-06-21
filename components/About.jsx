import Image from "next/image";
import Link from "next/link";
import React from "react";
import about from "../public/assets/about.jpg";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-600">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p>
            I was a mere hustler looking for means to survive.I have always had
            a knack for technology and working with computers.In 2021,i started
            to make some wordpress websites to make some extra cash.What I
            thought was just a small hustle turned into a love for programming
          </p>
          <p>
            Fascinated with how Intricate programming can be I was quickly drawn
            to learn more.I started learning JavaScript and was even more
            enthused with making websites interactive.I then started taking on
            some freelance gigs online.I am now building projects with React
            JS,Firebase, and learning new technologies
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={about} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
