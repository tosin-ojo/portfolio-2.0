import HeadTag from "../componets/HeadTag";

import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import Aside from "../componets/Aside";
import Hero from "../componets/Hero";
import About from "../componets/About";
import Jobs from "../componets/Jobs";
import Projects from "../componets/Projects";
import Others from "../componets/Others";
import Paq from "../componets/Paq";
import Contact from "../componets/Contact";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadTag />

      <div id="start"></div>

      <Navbar />

      <Aside />

      <main className={styles.main}>
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Others />
        <Paq />
        <Contact />

        <Footer />
      </main>
    </div>
  );
}
