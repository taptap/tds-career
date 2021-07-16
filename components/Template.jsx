import styles from "../styles/Home.module.css";
import Head from "next/head";
import Hero from "./Hero";
import Products from "./Products";
import Environment from "./Environment";
import Benefits from "./Benefits";
import Footer from "./Footer";

export default function Template({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>加入 TapTap Developer Services 团队</title>
        <meta name="description" content="TDS 多个职位火热招聘中" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gamesTapTap" />
        <meta name="twitter:creator" content="@jiangh" />
        <meta
          name="twitter:title"
          content="加入 TapTap Developer Services 团队"
        />
        <meta name="twitter:description" content="TDS 多个职位火热招聘中" />
        <meta
          name="twitter:image"
          content="https://career.taptap.dev/images/card.png"
        />
        <meta name="og:type" content="summary_large_image" />
        <meta name="og:title" content="加入 TapTap Developer Services 团队" />
        <meta name="og:description" content="TDS 多个职位火热招聘中" />
        <meta
          name="og:image"
          content="https://career.taptap.dev/images/card.png"
        />
        <link
          rel="icon"
          href="//assets.tapimg.com/developer-center-v2/favicon.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Products />
        <a id="action"></a>
        {children}
        <Environment />
        <Benefits />
        <Footer />
      </main>
    </div>
  );
}
