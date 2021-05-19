import styles from "../styles/Home.module.css";

export default function Job({ job }) {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>要求</h2>
          <ul>
            {job.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          {job.bonuses && (
            <>
              <h2>加分项</h2>
              <ul>
                {job.bonuses.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className={styles.card}>
          <h2>职责</h2>
          <ul>
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h2>申请方式</h2>
          <p>
            请将简历发送至{" "}
            <a href="mailto:tds-jobs@taptap.com">tds-jobs@taptap.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
