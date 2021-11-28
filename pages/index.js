import { useEffect } from "react";

import HeadTag from "../componets/HeadTag";

import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import About from "../componets/About";
import Jobs from "../componets/Jobs";
import Projects from "../componets/Projects";
import Others from "../componets/Others";
import Paq from "../componets/Paq";
import Contact from "../componets/Contact";

import { Contacts } from "../data/contacts";

import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.querySelectorAll(".fade-aside-in").forEach((doc) => {
          doc.style.opacity = "1";
          doc.style.transform = "scale(1)";
        });
      }, 1700);
    });
  }, []);

  return (
    <div className={styles.container}>
      <HeadTag />

      <div id="start"></div>

      <Navbar />

      <div
        className={`${styles.left} fade-aside-in`}
        style={{ transitionDuration: "500ms" }}
      >
        <div>
          {Contacts.map(
            (contact) =>
              !(
                contact.name === "ojo.oluwatosin.adebayo@gmail.com" ||
                contact.name === "WhatsApp"
              ) && (
                <a key={contact.name} href={contact.link} target="_blank">
                  {contact.icon}
                </a>
              )
          )}
        </div>
      </div>

      <div
        className={`${styles.right} fade-aside-in`}
        style={{ transitionDuration: "500ms" }}
      >
        <div>
          {Contacts.map((contact) =>
            contact.name !== "ojo.oluwatosin.adebayo@gmail.com" ? (
              ""
            ) : (
              <a key={contact.name} href={contact.link} target="_blank">
                {contact.name}
              </a>
            )
          )}
        </div>
      </div>

      <main className={styles.main}>
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Others />
        <Paq />
        {/* <Contact /> */}

        <Footer />
      </main>
    </div>
  );
}
