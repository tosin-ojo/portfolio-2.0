import { name } from "../data/hero";

import { contacts } from "../data/contacts";

import Icons, { IconNames } from "./Icons";

import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>{name}</div>
      <div>
        {contacts.map((contact) => (
          <a key={contact.name} href={contact.link} target="_blank">
            <Icons icon={contact.icon as IconNames} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
