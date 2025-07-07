import { useContext, useEffect, useState } from "react";

import { QuestionsType } from "../data/questions";

import styles from "../styles/Pqa.module.css";
import sectionContext from "../contexts/sectionContext";

interface Props {
  questions: QuestionsType;
}

const Pqa: React.FC<Props> = ({ questions }) => {
  const { setSection } = useContext(sectionContext);
  const [number, setNumber] = useState("");

  const handleClick = (num: string) => {
    if (num == number) setNumber("");
    else setNumber(num);
  };

  useEffect(() => {
    const othersSection = document.querySelector("#pqa") as HTMLElement;

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          othersSection.style.opacity = "1";
          othersSection.style.transform = "translateY(0px)";
          setSection("pqa");
        }
      });
    }, options);

    observer.observe(othersSection);
  }, []);

  return (
    <section id="pqa" className={styles.pqa}>
      <h2 className={`number__header`}>Potential Questions Answered</h2>
      <ol className={styles.ol}>
        {questions?.map((question, i) => (
          <li key={question.question}>
            <div>
              <span className={styles.pqa__num}>{i < 9 ? `0${i + 1}` : i}</span>
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

export default Pqa;
