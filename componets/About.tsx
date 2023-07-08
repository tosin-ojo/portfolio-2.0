import React, { useContext, useEffect } from "react";

import { AboutInfoType } from "../data/about";

import Icons, { IconNames } from "./Icons";

import styles from "../styles/About.module.css";
import sectionContext from "../contexts/sectionContext";

interface Props {
  aboutInfo: AboutInfoType;
  image: string;
}

const About: React.FC<Props> = ({ aboutInfo, image }) => {
  const { setSection } = useContext(sectionContext);

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
          setSection("about");
        }
      });
    }, options);

    observer.observe(aboutSection);
  }, []);

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
          {Object.keys(aboutInfo.paragraghs).map((key, i) => (
            <React.Fragment key={key}>
              <span>&nbsp;&nbsp;{`<p class="${key}">`}</span>
              <p id="about-into-p">{aboutInfo.paragraghs[key]}</p>
              <span>&nbsp;&nbsp;{`</p>`}</span>
              {i !== Object.keys(aboutInfo.paragraghs).length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Some of the technologies I work with</h3>
        <div>
          {aboutInfo.technologies.map((technology) => (
            <div key={technology.name}>
              <Icons icon={technology.icon as IconNames} />
              <span>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
