import { useEffect } from "react";

import { aboutInfo, image } from "../data/about";

import styles from "../styles/About.module.css";

const About: React.FC = () => {
  useEffect(() => {
    const aboutSection = document.querySelector("#about") as HTMLElement;

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
    (document.querySelector("#about-into-p") as HTMLElement).innerHTML =
      aboutInfo.intro;
    (document.querySelector("#about-experience-p") as HTMLElement).innerHTML =
      aboutInfo.experience;
    (document.querySelector("#about-achievement-p") as HTMLElement).innerHTML =
      aboutInfo.achievement;
  });

  return (
    <section id="about" className={styles.about}>
      <h2 className={`number__header`}>About Me</h2>
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={`${styles.img__ctn} img__wrapper`}>
            <div>
              <img src={image} alt="Oluwatosin Ojo" />
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
          {aboutInfo.technologies.map((technology) => (
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
