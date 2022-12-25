import axios from "axios";

import { useContext, useEffect, useState } from "react";

import Send from "../icons/send";
import Success from "../icons/success";
import Cancel from "../icons/cancel";

import { LinksType } from "../data/links";

import styles from "../styles/Contact.module.css";
import sectionContext from "../contexts/sectionContext";

const env = process.env.NODE_ENV;

console.log(
  process.env.NEXT_PUBLIC_DOMAIN_NAME,
  process.env.NEXT_PUBLIC_USER_EMAIL
);

interface Props {
  links: LinksType;
}

const Contact: React.FC<Props> = ({ links }) => {
  const { setSection } = useContext(sectionContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("success");

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") return false;

    setLoading(true);

    try {
      const protocol = env === "development" ? `http` : `https`;

      await axios.post(
        `${protocol}://${
          process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
            ? process.env.NEXT_PUBLIC_VERCEL_URL
            : process.env.NEXT_PUBLIC_DOMAIN_NAME
        }/api/message`,
        {
          name,
          email,
          message,
        }
      );
      setModalType("success");
      setName("");
      setMessage("");
      setEmail("");
    } catch (error) {
      setModalType("error");
    } finally {
      setOpenModal(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    const contactSection = document.querySelector("#contact") as HTMLElement;

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactSection.style.opacity = "1";
          contactSection.style.transform = "translateY(0px)";
          setSection("contact");
        }
      });
    }, options);

    observer.observe(contactSection);
  }, []);

  useEffect(() => {
    if (openModal) {
      (document.getElementsByTagName("BODY")[0] as HTMLElement).style.overflow =
        "hidden";
    } else {
      (document.getElementsByTagName("BODY")[0] as HTMLElement).style.overflow =
        "auto";
    }
  }, [openModal]);

  const stylesLabel = {
    top: 0,
    color: "var(--light-slate)",
  };

  const modalStyle = {
    color: "var(--red)",
    borderBottom: "solid 20px var(--red)",
  };

  return (
    <>
      {openModal && <div className={styles.overlay} onClick={closeModal}></div>}
      <section id="contact" className={styles.contact}>
        <h2 className={`${styles.header} number__header`}>
          Want to know more?
        </h2>
        <h3>Get In Touch</h3>
        <p>
          Do you have a question, proposal, or just want to say Hi? Go ahead.
          <br />I will get back to you ASAP.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span style={name.trim().length < 1 ? {} : stylesLabel}>
                Your Name
              </span>
            </label>
            <label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span style={email.trim().length < 1 ? {} : stylesLabel}>
                Email Address
              </span>
            </label>
          </div>
          <label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <span style={message.trim().length < 1 ? {} : stylesLabel}>
              Your Message
            </span>
          </label>
          <a href={links.mail} target="_blank">
            Compose an E-mail message
          </a>
          {!loading && <button>Shoot! ︻╦╤─ </button>}
          {loading && (
            <button className={styles.svg__btn} disabled>
              <Send />
            </button>
          )}
        </form>
      </section>
      <div
        className={`${styles.modal}${openModal ? ` ${styles.scale_1}` : ""}`}
      >
        <div style={modalType === "error" ? modalStyle : {}}>
          <div className={styles.modal__icons} onClick={closeModal}>
            {modalType === "success" && <Success />}
            {modalType === "error" && <Cancel />}
          </div>
          {modalType === "success" && <h2>Success!</h2>}
          {modalType === "error" && <h2>Error!</h2>}
          {modalType === "success" && (
            <p>I am delighted to hear from you. I'll respond shortly.</p>
          )}
          {modalType === "error" && (
            <p>Oops! An error occurred. Please try again.</p>
          )}
          <button
            className={modalType === "error" ? styles.bg_red : ""}
            onClick={closeModal}
          >
            {modalType === "success" ? "Awesome" : "Try again"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
