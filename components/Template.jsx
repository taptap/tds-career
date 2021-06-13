import styles from "../styles/Home.module.css";
import Head from "next/head";
import Introduction from "./Introduction";
import Hero from "./Hero";
import Products from "./Products";
import Environment from "./Environment";
import Benefits from "./Benefits";

export default function Template({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>成为 TDS 的一员</title>
        <meta name="description" content="TapTap 的工作机会" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Products />
        {children}
        <Environment />
        <Benefits />
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
