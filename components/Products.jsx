import { useState, useEffect } from "react";
import styles from "../styles/Products.module.css";

const getElemByClass = (name) => {
  return document.getElementsByClassName(name)[0];
};

export default function Products() {
  useEffect(() => {
    const top = getElemByClass(styles.productsSection).offsetTop;
    const animationStartY = Math.max(0, top - window.innerHeight / 2.5);
    const animationEndY = Math.max(100, top - window.innerHeight / 6);
    const handleScroll = () => {
      let progress =
        (window.scrollY - animationStartY) / (animationEndY - animationStartY);
      progress = progress < 0 ? 0 : progress;
      progress = progress > 1 ? 1 : progress;
      getElemByClass(styles.taptapTab).style.opacity = 1 - progress / 2;
      getElemByClass(styles.tdsTab).style.opacity = 0.5 + progress / 2;
      getElemByClass(styles.taptapText).style.opacity = 1 - progress;
      getElemByClass(styles.tdsText).style.opacity = progress;
      getElemByClass(styles.tdsBackground).style.opacity = progress;
      getElemByClass(styles.taptapUI).style.opacity = 1 - progress;
      getElemByClass(styles.sausagemanContainer).style.opacity = progress;

      // Slider animation
      const endOffset =
        getElemByClass(styles.rail).clientWidth -
        getElemByClass(styles.slider).offsetWidth;
      const newLeft = endOffset * progress;
      getElemByClass(styles.slider).style.marginLeft = `${newLeft}px`;
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.productsSection}>
      <div className={styles.tdsBackground}></div>
      <div className={styles.contents}>
        <h1>快速发展的产品服务</h1>
        <div className={styles.lowerContainerTDS}>
          <img className={styles.taptapUI} src="/images/taptap-ui.png" />
          <div className={styles.sausagemanContainer}>
            <div></div>
            <div></div>
            <img
              className={styles.tdsImage}
              src="/images/sausageman-screen.png"
            />
          </div>
          <div className={styles.productsText}>
            <div className={styles.tabs}>
              <div className={styles.taptapTab}>
                <img
                  className={styles.taptapLogo}
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
              <div className={styles.rail}>
                <div className={styles.slider} />
              </div>
            </div>
            <div className={styles.tabContents}>
              <div className={styles.taptapText}>
                <p>
                  发现好游戏！秉持「官方包、不分成、精品化」商业模式，TapTap
                  现已成为游戏推荐平台，亦是高品质玩家社区
                </p>
              </div>
              <div className={styles.tdsText}>
                <p>
                  提供全套游戏生态服务。让你更方便地发布、运营并管理游戏，为全球性的游戏发行提供了完善的游戏服务和统一的
                  SDK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
