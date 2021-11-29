import { useEffect, useState } from "react";

import { Links } from "../data/links";

import Logo from "../icons/logo";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelector(".fade-nav-in").style.opacity = "1";
      document.querySelector(".fade-nav-in").style.transform = "scale(1)";
      document.querySelectorAll(".fade-nav-down").forEach((doc) => {
        doc.style.opacity = "1";
        doc.style.transform = "translateY(0px)";
      });
    });
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("BODY")[0].style.overflow = "auto";
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
            href="#start"
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
                <a href="#about">About</a>
              </li>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "300ms" }}
              >
                <a href="#jobs">Experience</a>
              </li>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "500ms" }}
              >
                <a href="#projects">Projects</a>
              </li>
              <li
                className="fade-nav-down"
                style={{ transitionDuration: "500ms" }}
              >
                <a href="#paq">PAQ</a>
              </li>
              {/* <li className="fade-nav-down" style={{ transitionDuration: '700ms' }}>
                            <a href="#contact">Contact</a>
                        </li> */}
            </ol>
            <div
              className={`${styles.resume} fade-nav-down`}
              style={{ transitionDuration: "900ms" }}
            >
              <a className={styles.pdf} href={Links.pdf} target="_blank">
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
              <a href="#about" onClick={() => setOpenMenu(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#jobs" onClick={() => setOpenMenu(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpenMenu(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#paq" onClick={() => setOpenMenu(false)}>
                PAQ
              </a>
            </li>
            {/* <li>
                        <a href="#contact" onClick={() => setOpenMenu(false)}>Contact</a>                    
                    </li> */}
          </ol>
          <a
            className={`${styles.resume__sm__btn} ${styles.pdf}`}
            href={Links.pdf}
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
