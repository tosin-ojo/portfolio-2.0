import { useEffect } from "react";

import { HeroInfo, Name } from "../data/hero";

import styles from "../styles/Hero.module.css";

const Hero = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.querySelectorAll(".fade-hero-down").forEach((doc) => {
          doc.style.opacity = "1";
          doc.style.transform = "translateY(0px)";
        });
      }, 1000);
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src="/walking-code.gif" alt="" />
      </div>
      <div
        className={`${styles.intro} fade-hero-down`}
        style={{ transitionDuration: "100ms" }}
      >
        <h1>Hi, my name is</h1>
      </div>
      <div
        className={`${styles.name} fade-hero-down`}
        style={{ transitionDuration: "300ms" }}
      >
        <h2>{Name}</h2>
      </div>
      <div
        className={`${styles.description} fade-hero-down`}
        style={{ transitionDuration: "500ms" }}
      >
        <h3>
          {HeroInfo.expertise.split("").map((letter, i) => (
            <span key={`${letter}${i}`}>
              {letter === " " ? (
                <>&nbsp;</>
              ) : (
                <span
                  key={`${letter}${i}`}
                  className="glow"
                  style={{ animationDelay: `${2100 + 100 * i}ms` }}
                >
                  {letter}
                </span>
              )}
            </span>
          ))}
        </h3>
      </div>
      <div
        className={`${styles.bio} fade-hero-down`}
        style={{ transitionDuration: "700ms" }}
      >
        <p>{HeroInfo.introduction}</p>
      </div>
      <div
        className={`${styles.button} fade-hero-down`}
        style={{ transitionDuration: "900ms" }}
      >
        <a href="#contact">Let's talk!</a>
      </div>
    </section>
  );
};

export default Hero;
