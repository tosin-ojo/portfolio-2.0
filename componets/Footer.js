import { Name } from "../data/hero";

import { Contacts } from "../data/contacts";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>{Name}</div>
      <div>
        {Contacts.map((contact) => (
          <a key={contact.name} href={contact.link} target="_blank">
            {contact.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
