import { useEffect } from "react";

import { AboutInfo, Image } from "../data/about";

import styles from "../styles/About.module.css";

const About = () => {
  useEffect(() => {
    const aboutSection = document.querySelector("#about");

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.style.opacity = "1";
          aboutSection.style.transform = "translateY(0px)";
        }
      });
    }, options);

    observer.observe(aboutSection);
  }, []);

  useEffect(() => {
    document.querySelector("#about-into-p").innerHTML = AboutInfo.intro;
    document.querySelector("#about-experience-p").innerHTML =
      AboutInfo.experience;
    document.querySelector("#about-achievement-p").innerHTML =
      AboutInfo.achievement;
  });

  return (
    <section id="about" className={styles.about}>
      <h2 className={`number__header`}>About Me</h2>
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={`${styles.img__ctn} img__wrapper`}>
            <div>
              <img src={Image} alt="Oluwatosin Ojo" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <span>
            {`<html>`}
            <br />
            &nbsp;&nbsp;{`<p class="intro">`}
          </span>
          <p id="about-into-p"></p>
          <span>
            &nbsp;&nbsp;{`</p>`}
            <br />
            <br />
            &nbsp;&nbsp;{`<p class="experience">`}
          </span>
          <p id="about-experience-p"></p>
          <span>
            &nbsp;&nbsp;{`</p>`}
            <br />
            <br />
            &nbsp;&nbsp;{`<p class="achievement">`}
          </span>
          <p id="about-achievement-p"></p>
          <span>
            &nbsp;&nbsp;{`</p>`}
            <br />
            {`</html>`}
          </span>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Some of the technologies I work with</h3>
        <div>
          {AboutInfo.technologies.map((technology) => (
            <div key={technology.name}>
              {technology.icon}
              <span>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
