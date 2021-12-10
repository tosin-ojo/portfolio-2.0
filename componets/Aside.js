import { useEffect } from "react";

import { Contacts } from "../data/contacts";

import styles from "../styles/Aside.module.css";

const Aside = () => {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.querySelectorAll(".fade-aside-in").forEach((doc) => {
          doc.style.opacity = "1";
          doc.style.transform = "scale(1)";
        });
      }, 1700);
    });
  }, []);

  return (
    <>
      <div
        className={`${styles.left} fade-aside-in`}
        style={{ transitionDuration: "500ms" }}
      >
        <div>
          {Contacts.map(
            (contact) =>
              !(
                contact.name === "ojo.oluwatosin.adebayo@gmail.com" ||
                contact.name === "WhatsApp"
              ) && (
                <a key={contact.name} href={contact.link} target="_blank">
                  {contact.icon}
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
          {Contacts.map((contact) =>
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
