import styles from "../styles/Environment.module.css";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
];

export default function Environment() {
  return (
    <div className="slide-container">
      <Fade
        indicators={true}
        arrows={false}
        duration={3000}
        autoplay={true}
        pauseOnHover={false}
      >
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[0]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[1]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[2]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[3]})` }}
          ></div>
        </div>
        <div className="each-fade">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${fadeImages[4]})` }}
          ></div>
        </div>
      </Fade>
    </div>
  );
}
