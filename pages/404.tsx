import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import Aside from "../componets/Aside";

import { name } from "../data/hero";
import { links, LinksType } from "../data/links";
import { contacts, ContactsType } from "../data/contacts";

import styles from "../styles/404.module.css";

interface Props {
  navbar: {
    links: LinksType;
  };
  aside: {
    contacts: ContactsType;
  };
  footer: {
    name: string;
    contacts: ContactsType;
  };
}

const NotFound: React.FC<Props> = ({ navbar, aside, footer }) => {
  return (
    <div>
      <div id="start"></div>

      <Navbar {...navbar} />

      <Aside {...aside} />

      <main className={styles.main}>
        <div>
          <h1>404</h1>
          <h2>Are You Lost?</h2>
          <div className={styles.button}>
            <a href="/">Go back Home</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <Footer {...footer} />
        </div>
      </main>
    </div>
  );
};

export default NotFound;

export async function getStaticProps() {
  return {
    props: {
      navbar: { links },
      aside: { contacts },
      footer: { name, contacts },
    },
  };
}
