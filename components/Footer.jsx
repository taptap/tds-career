import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <a href="https://www.taptap.com">
          <img alt="TapTap" src="/images/taptap.svg" />
        </a>
        <div className={styles.divider} />
        <a href="https://developer.taptap.com">
          <img alt="TapTap" src="/images/taptap.svg" />
          <span>开发者服务</span>
        </a>
      </div>
      <div className={styles.footerRight}>
        ©2021 TapTap 易玩（上海）网络科技有限公司
      </div>
    </div>
  );
}
