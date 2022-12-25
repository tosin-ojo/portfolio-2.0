import HeadTag from "../componets/HeadTag";

// Page Data
import { meta, MetaType } from "../data/meta";
import { links, LinksType } from "../data/links";
import { contacts, ContactsType } from "../data/contacts";
import { name, heroInfo, HeroInfoType } from "../data/hero";
import { questions, QuestionsType } from "../data/questions";
import { aboutInfo, image, AboutInfoType } from "../data/about";
import {
  jobs,
  experiences,
  JobsType,
  ExperienceType,
} from "../data/experience";
import {
  featured,
  noteworthy,
  more,
  FeaturedType,
  NoteworthyType,
  MoreType,
} from "../data/projects";

// Sections
import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import Aside from "../componets/Aside";
import Hero from "../componets/Hero";
import About from "../componets/About";
import Jobs from "../componets/Jobs";
import Projects from "../componets/Projects";
import Others from "../componets/Others";
import Paq from "../componets/Paq";
import Contact from "../componets/Contact";

import styles from "../styles/Home.module.css";

interface Props {
  headTag: {
    meta: MetaType;
  };
  navbar: {
    links: LinksType;
  };
  aside: {
    contacts: ContactsType;
  };
  hero: {
    heroInfo: HeroInfoType;
    name: string;
  };
  about: {
    aboutInfo: AboutInfoType;
    image: string;
  };
  jobs: {
    experiences: ExperienceType;
    jobs: JobsType;
  };
  projects: {
    featured: FeaturedType;
  };
  others: {
    noteworthy: NoteworthyType;
    more: MoreType;
    links: LinksType;
  };
  paq: {
    questions: QuestionsType;
  };
  contact: {
    links: LinksType;
  };
  footer: {
    name: string;
    contacts: ContactsType;
  };
}

const Home: React.FC<Props> = ({
  headTag,
  navbar,
  aside,
  hero,
  about,
  jobs,
  projects,
  others,
  paq,
  contact,
  footer,
}) => {
  return (
    <div className={styles.container}>
      <HeadTag />

      <div id="start"></div>

      <Navbar />

      <Aside />

      <main className={styles.main}>
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Others />
        <Paq />
        <Contact />

        <Footer />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      headTag: { meta },
      navbar: { links },
      aside: { contacts },
      hero: { heroInfo, name },
      about: { aboutInfo, image },
      jobs: { experiences, jobs },
      projects: { featured },
      others: { noteworthy, more, links },
      paq: { questions },
      contact: { links },
      footer: { name, contacts },
    },
  };
}
