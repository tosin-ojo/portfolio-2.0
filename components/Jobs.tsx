import { CSSProperties, useContext, useEffect, useState } from "react";

import { ExperienceType } from "../data/experience";

import styles from "../styles/Jobs.module.css";
import sectionContext from "../contexts/sectionContext";

interface Props {
  experiences: ExperienceType;
}

const Jobs: React.FC<Props> = ({ experiences }) => {
  const { setSection } = useContext(sectionContext);
  const [companyIndex, setCompanyIndex] = useState(0);

  const detailsStyle: CSSProperties = {
    position: "static",
    zIndex: "1",
    cursor: "default",
    opacity: "1",
  };

  const headerStyle: CSSProperties = {
    color: "var(--lightest-slate)",
    textShadow: "none",
  };

  const linkStyle: CSSProperties = {
    color: "var(--green)",
    textShadow: "none",
    whiteSpace: "nowrap",
  };

  const contentStyle: CSSProperties = {
    color: "var(--light-slate)",
    textShadow: "none",
  };

  useEffect(() => {
    const jobsSection = document.querySelector("#jobs") as HTMLElement;

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          jobsSection.style.opacity = "1";
          jobsSection.style.transform = "translateY(0px)";
          setSection("experience");
        }
      });
    }, options);

    observer.observe(jobsSection);
  }, []);

  return (
    <section id="jobs" className={styles.jobs}>
      <h2 className={`number__header`}>Work Experience</h2>
      <div className={styles.nav__container}>
        <div className={styles.nav}>
          {experiences.map((job, i) => (
            <button
              key={job.company}
              className={companyIndex === i ? styles.activeTab : ""}
              onClick={() => setCompanyIndex(i)}
            >
              {job.company}
            </button>
          ))}
          <span
            style={{
              width: `calc(100% / ${experiences.length})`,
              transform: `translate3d(${100 * companyIndex}%, 0px, 0px)`,
            }}
          ></span>
        </div>
      </div>
      {experiences.map((experience, i) => (
        <div
          style={companyIndex === i ? detailsStyle : {}}
          className={styles.details}
          key={experience.company}
        >
          <h3 style={companyIndex === i ? headerStyle : {}}>
            {experience.role}{" "}
            <a
              href={experience.link}
              target="_blank"
              style={companyIndex === i ? linkStyle : {}}
            >
              @ {experience.company}
            </a>
          </h3>
          <p style={companyIndex === i ? contentStyle : {}}>
            {experience.period}
          </p>
          <ul style={companyIndex === i ? contentStyle : {}}>
            {experience.experiences.map((experience) => (
              <li key={experience}>{experience}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Jobs;
