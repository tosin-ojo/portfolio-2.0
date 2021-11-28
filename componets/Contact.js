import axios from "axios";

import { useEffect, useState } from "react";

import Send from "../icons/send";
import Success from "../icons/success";
import Cancel from "../icons/cancel";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("error");

  const stylesLabel = {
    top: 0,
    color: "var(--light-slate)",
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") return false;

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/send", {
        name,
        email,
        message,
      });
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
    const contactSection = document.querySelector("#contact");

    const options = {
      threshold: 0.25,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactSection.style.opacity = "1";
          contactSection.style.transform = "translateY(0px)";
        }
      });
    }, options);

    observer.observe(contactSection);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    }
  }, [openModal]);

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
          {!loading && <button>Shoot! ︻╦╤─ </button>}
          {loading && (
            <button className={styles.svg__btn} disabled>
              <Send />
            </button>
          )}
        </form>
      </section>
      <div
        style={{ transform: openModal ? "scale(1)" : "" }}
        className={styles.modal}
        open={openModal}
      >
        <div style={modalType === "error" ? modalStyle : {}}>
          <div className={styles.modal__icons}>
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
            style={{
              backgroundColor: modalType === "error" ? "var(--red)" : "",
            }}
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
