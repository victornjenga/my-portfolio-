import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="portfolio" content="this is just a simple website" />
        <link rel="icon" href="" />
      </Head>

      <main>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
