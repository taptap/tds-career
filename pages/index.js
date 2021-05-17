import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>成为 TDS 的一员</title>
        <meta name="description" content="TapTap 开发者服务的工作机会" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TDS 工作机会</h1>

        <p className={styles.description}>加入 TapTap 开发者服务</p>

        <p>
          TapTap
          开发者服务致力于为游戏开发者开发者提供一流的工具、平台和服务。对在考虑新机会的你来说，我们可能会吸引人的几点：
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>务实的管理</h2>
            <p>
              我们不会一味标榜管理上如何如何宽松，工作需要及时交付，同事之间要相互满足期望值，贡献多的人该得到更多回报，不适合的人要离开。但我们上下班时间在合理范围内是弹性的，每个人对自己负责的工作有话语权，同事无论级别能相互尊重，工作上平等地讨论寻求最佳方案。管理方式以让大家能更好地工作为标准。
            </p>
          </div>

          <div href="https://nextjs.org/learn" className={styles.card}>
            <h2>工作环境</h2>
            <p>我们的上海办公室位于大宁中心广场，是上海北部繁华方便的区域。北京办公室位于三环内朝阳区的核心商圈，临近地铁 6 号线和 17 号线。两个办公室都提供一流的办公设备，为大家创造宽松舒适有利于释放创造力的工作环境。</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>薪酬与福利</h2>
            <p>公司为员工提供丰厚和公平的薪酬，保持与头部互联网公司的竞争力。除标准医保外，员工还享受补充商业保险。我们不签竞业禁止协议、没有加班文化、员工享受不限量的带薪休假。上海的公司食堂提供三餐。</p>
          </div>

          <div className={styles.card}>
            <h2>快速发展的产品</h2>
            <p>
            TapTap 致力于中国游戏产业的良性发展，除了带给玩家好玩的高质量游戏外，也被很多开发者评价为最友好的平台。TDS 肩负为游戏开发者服务的使命，除了帮助开发者更快地开发更好的游戏，我们还将结合 TapTap 生态为游戏开发者带来更多新机会。            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://developer.taptap.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          TapTap 开发者服务
        </a>
      </footer>
    </div>
  );
}
