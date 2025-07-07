import { useContext, useEffect, useState } from "react";

import Folder from "../icons/folder";
import Github from "../icons/github";
import Upload from "../icons/upload";

import { NoteworthyType, MoreType } from "../data/projects";
import { LinksType } from "../data/links";

import styles from "../styles/Others.module.css";
import sectionContext from "../contexts/sectionContext";

interface Props {
  noteworthy: NoteworthyType;
  more: MoreType;
  links: LinksType;
}

const Others: React.FC<Props> = ({ noteworthy, more, links }) => {
  const { setSection } = useContext(sectionContext);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore((showMore) => !showMore);
  };

  useEffect(() => {
    if (showMore) {
      document.querySelectorAll(".fade-up").forEach((doc) => {
        (doc as HTMLElement).style.opacity = "1";
        (doc as HTMLElement).style.transform =
          "translateX(0px) translateY(0px)";
      });
    }
  }, [showMore]);

  useEffect(() => {
    const othersSection = document.querySelector("#others") as HTMLElement;

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          othersSection.style.opacity = "1";
          othersSection.style.transform = "translateY(0px)";
          setSection("projects");
        }
      });
    }, options);

    observer.observe(othersSection);
  }, []);

  return (
    <section id="others" className={styles.others}>
      <h3>Other noteworthy Projects</h3>
      <a href={links.repos} target="_blank">
        View Github Repos
      </a>
      <ul className={styles.others__projects}>
        {noteworthy.map((project) => (
          <li key={project.name}>
            <div className={styles.project}>
              <div>
                <div className={styles.project__top}>
                  <div className={styles.project__folder}>
                    <Folder />
                  </div>
                  <div className={styles.project__links}>
                    {!!project.source && (
                      <a href={project.source} target="_blank">
                        <Github />
                      </a>
                    )}
                    {!!project.link && (
                      <a href={project.link} target="_blank">
                        <Upload />
                      </a>
                    )}
                  </div>
                </div>
                <h3>
                  <a
                    href={!!project.link ? project.link : project.source}
                    target="_blank"
                  >
                    {project.name}
                  </a>
                </h3>
                <div className={styles.project__description}>
                  <p>{project.description}</p>
                </div>
              </div>
              <div>
                <ul className={styles.project__tech__list}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
        {showMore && (
          <>
            {more.map((project, i) => (
              <li
                key={project.name}
                className="fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={styles.project}>
                  <div>
                    <div className={styles.project__top}>
                      <div className={styles.project__folder}>
                        <Folder />
                      </div>
                      <div className={styles.project__links}>
                        {!!project.source && (
                          <a href={project.source} target="_blank">
                            <Github />
                          </a>
                        )}
                        {!!project.link && (
                          <a href={project.link} target="_blank">
                            <Upload />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3>
                      <a
                        href={!!project.link ? project.link : project.source}
                        target="_blank"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <div className={styles.project__description}>
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div>
                    <ul className={styles.project__tech__list}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
      <button className={styles.button} onClick={handleClick}>
        {showMore ? "Show Less" : "Show more"}
      </button>
    </section>
  );
};

export default Others;
