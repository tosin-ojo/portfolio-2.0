import { useEffect, useState, useContext } from "react";

import { LinksType } from "../data/links";

import Logo from "../icons/logo";

import styles from "../styles/Navbar.module.css";
import sectionContext from "../contexts/sectionContext";

interface Props {
  links: LinksType;
}

const Navbar: React.FC<Props> = ({ links }) => {
  const { section } = useContext(sectionContext);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const fades = document.querySelectorAll(".fade-nav-in") as NodeList;
    const fadeIn = () => {
      (document.querySelector(".fade-nav-in") as HTMLElement).style.opacity =
        "1";
      (document.querySelector(".fade-nav-in") as HTMLElement).style.transform =
        "scale(1)";
      document.querySelectorAll(".fade-nav-down").forEach((doc) => {
        (doc as HTMLElement).style.opacity = "1";
        (doc as HTMLElement).style.transform = "translateY(0px)";
      });
    };

    fades && fadeIn();
  }, []);

  useEffect(() => {
    if (openMenu) {
      (document.getElementsByTagName("BODY")[0] as HTMLElement).style.overflow =
        "hidden";
    } else {
      (document.getElementsByTagName("BODY")[0] as HTMLElement).style.overflow =
        "auto";
    }
  }, [openMenu]);

  const menuStyles = {
    top: "0",
    width: "100%",
    borderBottomLeftRadius: "0",
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a
            href="/#start"
            className={`${styles.logo} fade-nav-in`}
            style={{ transitionDuration: "200ms" }}
            onClick={() => setOpenMenu(false)}
          >
            <Logo />
          </a>
          <div className={styles.navbarCtn}>
            <ol className={styles.ol}>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "100ms" }}
              >
                <a
                  className={section === "about" ? styles.active : ""}
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "300ms" }}
              >
                <a
                  className={section === "experience" ? styles.active : ""}
                  href="/#jobs"
                >
                  Experience
                </a>
              </li>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "500ms" }}
              >
                <a
                  className={section === "projects" ? styles.active : ""}
                  href="/#projects"
                >
                  Projects
                </a>
              </li>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "500ms" }}
              >
                <a
                  className={section === "paq" ? styles.active : ""}
                  href="/#paq"
                >
                  PAQ
                </a>
              </li>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "700ms" }}
              >
                <a
                  className={section === "contact" ? styles.active : ""}
                  href="/#contact"
                >
                  Contact
                </a>
              </li>
            </ol>
            <div
              className={`${styles.resume} fade-nav-down`}
              style={{ transitionDuration: "900ms" }}
            >
              <a className={styles.pdf} href={links?.pdf} target="_blank">
                Résumé
              </a>
            </div>
          </div>
          <div
            className={`${styles.icons} fade-nav-down`}
            style={{ transitionDuration: "900ms" }}
          >
            <button
              className={!openMenu ? styles.menu__btn : styles.cancel__btn}
              onClick={() => setOpenMenu((openMenu) => !openMenu)}
            >
              <div className={styles.icon}>
                <div className={styles.icon__inner}></div>
              </div>
            </button>
          </div>
        </nav>
      </header>
      <aside className={styles.menu} style={openMenu ? menuStyles : {}}>
        <nav className={styles.navbar__sm}>
          <ol className={styles.ol__sm}>
            <li>
              <a
                className={section === "about" ? styles.active : ""}
                href="/#about"
                onClick={() => setOpenMenu(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={section === "experience" ? styles.active : ""}
                href="/#jobs"
                onClick={() => setOpenMenu(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className={section === "projects" ? styles.active : ""}
                href="/#projects"
                onClick={() => setOpenMenu(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={section === "paq" ? styles.active : ""}
                href="/#paq"
                onClick={() => setOpenMenu(false)}
              >
                PAQ
              </a>
            </li>
            <li>
              <a
                className={section === "contact" ? styles.active : ""}
                href="/#contact"
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </a>
            </li>
          </ol>
          <a
            className={`${styles.resume__sm__btn} ${styles.pdf}`}
            href={links?.pdf}
            target="_blank"
          >
            Résumé
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
