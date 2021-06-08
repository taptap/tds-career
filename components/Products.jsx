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
          <div></div>
        </div>
      </div>
    </div>
  );
}
