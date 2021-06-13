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
      <div className={styles.text}>
        <h1>富有创造力的工作环境</h1>
        <h2>
          上海办公室 位于静安区大宁中心广场 北京办公室 位于朝阳区核心商圈，临近
          6 号线、17 号线
        </h2>
      </div>
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
