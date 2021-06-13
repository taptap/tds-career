import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.topNav}>
        <a href="https://www.taptap.com">
          <img
            className={styles.topNavLogo}
            alt="TapTap"
            src="/images/taptap.svg"
          />
        </a>
        <div className={styles.navDivider} />
        <a href="https://developer.taptap.com">开发者服务</a>
      </div>
      <div className={styles.contents}>
        <div className={styles.title}>
          加入
          <img
            className={styles.taptapInline}
            alt="TapTap"
            src="/images/taptap.svg"
          />
          开发者服务
        </div>
        <div className={styles.subtitle}>
          TapTap 开发者服务致力于为游戏开发者提供一流的工具、平台和服务
        </div>
        <div className={styles.joinButton}>加入我们</div>
        <img className={styles.tarara} alt="Tarara" src="/images/tarara.png" />
      </div>
    </div>
  );
}
