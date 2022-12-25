import { useEffect } from "react";

import { contacts } from "../data/contacts";

import Icons, { IconNames } from "./Icons";

import styles from "../styles/Aside.module.css";

const Aside: React.FC = () => {
  useEffect(() => {
    const fades = document.querySelectorAll(".fade-aside-in") as NodeList;
    fades &&
      setTimeout(() => {
        document.querySelectorAll(".fade-aside-in").forEach((doc) => {
          (doc as HTMLElement).style.opacity = "1";
          (doc as HTMLElement).style.transform = "scale(1)";
        });
      }, 1700);
  }, []);

  return (
    <>
      <div
        className={`${styles.left} fade-aside-in`}
        style={{ transitionDuration: "500ms" }}
      >
        <div>
          {contacts.map(
            (contact) =>
              !(
                contact.name === "ojo.oluwatosin.adebayo@gmail.com" ||
                contact.name === "WhatsApp"
              ) && (
                <a key={contact.name} href={contact.link} target="_blank">
                  <Icons icon={contact.icon as IconNames} />
                </a>
              )
          )}
        </div>
      </div>

      <div
        className={`${styles.right} fade-aside-in`}
        style={{ transitionDuration: "500ms" }}
      >
        <div>
          {contacts.map((contact) =>
            contact.name !== "ojo.oluwatosin.adebayo@gmail.com" ? (
              ""
            ) : (
              <a key={contact.name} href={contact.link} target="_blank">
                {contact.name}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Aside;
