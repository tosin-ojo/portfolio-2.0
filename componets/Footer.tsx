import { name } from "../data/hero";

import { contacts } from "../data/contacts";

import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>{name}</div>
      <div>
        {contacts.map((contact) => (
          <a key={contact.name} href={contact.link} target="_blank">
            {contact.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
