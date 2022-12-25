import { useEffect, useState } from "react";

import { QuestionsType } from "../data/questions";

import styles from "../styles/Paq.module.css";

interface Props {
  questions: QuestionsType;
}

const Paq: React.FC<Props> = ({ questions }) => {
  const [number, setNumber] = useState("");

  const handleClick = (num: string) => {
    if (num == number) setNumber("");
    else setNumber(num);
  };

  useEffect(() => {
    const othersSection = document.querySelector("#paq") as HTMLElement;

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          othersSection.style.opacity = "1";
          othersSection.style.transform = "translateY(0px)";
        }
      });
    }, options);

    observer.observe(othersSection);
  }, []);

  return (
    <section id="paq" className={styles.paq}>
      <h2 className={`number__header`}>Possibly Ask questions</h2>
      <ol className={styles.ol}>
        {questions?.map((question, i) => (
          <li key={question.question}>
            <div>
              <span className={styles.paq__num}>{i < 9 ? `0${i + 1}` : i}</span>
              <p onClick={() => handleClick(`${i + 1}`)}>{question.question}</p>
            </div>
            <p className={number === `${i + 1}` ? styles.h_150 : ""}>
              <span className={number === `${i + 1}` ? styles.expand : ""}>
                {question.answer}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Paq;
