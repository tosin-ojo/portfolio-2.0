import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import Aside from "../componets/Aside";

import styles from "../styles/404.module.css";

const NotFound = () => {
  return (
    <div>
      <div id="start"></div>

      <Navbar />

      <Aside />

      <main className={styles.main}>
        <div>
          <h1>404</h1>
          <h2>Are You Lost?</h2>
          <div className={styles.button}>
            <a href="/">Go back Home</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default NotFound;
