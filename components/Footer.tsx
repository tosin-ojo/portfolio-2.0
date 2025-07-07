import { name } from "../data/hero";

import { ContactsType } from "../data/contacts";

import Icons, { IconNames } from "./Icons";

import styles from "../styles/Footer.module.css";

interface Props {
  name: string;
  contacts: ContactsType;
}

const Footer: React.FC<Props> = ({ name, contacts }) => {
  return (
    <footer className={styles.footer}>
      <div>{name}</div>
      <div>
        {contacts?.map((contact) => (
          <a key={contact.name} href={contact.link} target="_blank">
            <Icons icon={contact.icon as IconNames} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
