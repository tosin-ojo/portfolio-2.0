import { useEffect } from "react";

import Github from "../icons/github";
import Upload from "../icons/upload";

import { Featured } from "../data/projects";

import styles from "../styles/Projects.module.css";

const Projects: React.FC = () => {
  useEffect(() => {
    const projectsSection = document.querySelector("#projects") as HTMLElement;
    const projectOne = document.querySelector("#project-1") as HTMLElement;
    const projectTwo = document.querySelector("#project-2") as HTMLElement;
    const projectThree = document.querySelector("#project-3") as HTMLElement;
    const projectFour = document.querySelector("#project-4") as HTMLElement;

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const optionsProject = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsSection.style.opacity = "1";
          projectsSection.style.transform = "translateY(0px)";
        }
      });
    }, options);

    const observerProject1 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectOne.style.opacity = "1";
          projectOne.style.transform = "translateY(0px)";
        }
      });
    }, optionsProject);

    const observerProject2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectTwo.style.opacity = "1";
          projectTwo.style.transform = "translateY(0px)";
        }
      });
    }, optionsProject);

    const observerProject3 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectThree.style.opacity = "1";
          projectThree.style.transform = "translateY(0px)";
        }
      });
    }, optionsProject);

    const observerProject4 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectFour.style.opacity = "1";
          projectFour.style.transform = "translateY(0px)";
        }
      });
    }, optionsProject);

    observer.observe(projectsSection);
    observerProject1.observe(projectOne);
    observerProject2.observe(projectTwo);
    observerProject3.observe(projectThree);
    observerProject4.observe(projectFour);
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={`number__header`}>Some Projects I've Built</h2>
      <ul>
        {Featured.map((project) => (
          <li id={project.id} key={project.id}>
            <div className={styles.project__content}>
              <div>
                <p>Featured Projects</p>
                <h3>
                  <a href={project.link} target="_blank">
                    {project.name}
                  </a>
                </h3>
                <div className={styles.project__details}>
                  <p>{project.description}</p>
                </div>
                <ul>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className={styles.project__links}>
                  {project.source !== "" && (
                    <a href={project.source} target="_blank">
                      <Github />
                    </a>
                  )}
                  {project.link !== "" && (
                    <a href={project.link} target="_blank">
                      <Upload />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.project__image}>
              <a href={project.link} target="_blank">
                <div className={styles.img}>
                  <div>
                    <img src={project.image} alt={project.name} />
                  </div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
