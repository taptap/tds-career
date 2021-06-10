import styles from "../styles/Products.module.css";

export default function Products() {
  return (
    <div className={styles.productsSection}>
      <div className={styles.contents}>
        <h1>快速发展的产品服务</h1>
        <div className={styles.lowerContainerTDS}>
          <div className={styles.sausagemanContainer}>
            <div></div>
            <div></div>
            <img src="/images/sausageman-screen.png" />
          </div>
          <div>
            <div className={styles.tabs}>
              <div>
                <img
                  className={styles.inactiveTaptapLogo}
                  alt="TapTap"
                  src="/images/taptap.svg"
                />
              </div>
              <div className={styles.tdsTab}>
                <img
                  className={styles.taptapLogo}
                  alt="TapTap"
                  src="/images/taptap.svg"
                />
                <div>开发者服务</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
