import { useEffect, useState } from "react";

import { experiences, jobs } from "../data/experience";

import styles from "../styles/Jobs.module.css";

const Jobs = () => {
  const [company, setCompany] = useState("Novatia");

  const borderStyle = {
    borderBottom: "solid 2px #64ffda",
    color: "#64ffda",
  };

  const detailsStyle = {
    position: "static",
    zIndex: "1",
    pointerEvent: "default",
    opacity: "1",
  };

  const headerStyle = {
    color: "var(--lightest-slate)",
    textShadow: "none",
  };

  const linkStyle = {
    color: "var(--green)",
    textShadow: "none",
  };

  const contentStyle = {
    color: "var(--light-slate)",
    textShadow: "none",
  };

  useEffect(() => {
    const jobsSection = document.querySelector("#jobs");

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          jobsSection.style.opacity = "1";
          jobsSection.style.transform = "translateY(0px)";
        }
      });
    }, options);

    observer.observe(jobsSection);
  }, []);

  return (
    <section id="jobs" className={styles.jobs}>
      <h2 className={`number__header`}>Work Experience</h2>
      <div className={styles.nav}>
        {jobs.map((job) => (
          <button
            key={job}
            style={company === job ? borderStyle : {}}
            onClick={() => setCompany(job)}
          >
            {job}
          </button>
        ))}
      </div>
      {experiences.map((experience) => (
        <div
          style={company === experience.company ? detailsStyle : {}}
          className={styles.details}
          key={experience.company}
        >
          <h3 style={company === experience.company ? headerStyle : {}}>
            {experience.role}{" "}
            <a
              href={experience.link}
              target="_blank"
              style={company === experience.company ? linkStyle : {}}
            >
              @ {experience.company}
            </a>
          </h3>
          <p style={company === experience.company ? contentStyle : {}}>
            {experience.period}
          </p>
          <ul style={company === experience.company ? contentStyle : {}}>
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
