import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function JobSelection({ job, allJobs }) {
  const router = useRouter();

  const change = (e) => {
    router.push(`/jobs/${e.target.value}`);
  };
  return (
    <>
      <div>
        选择职位：
        <select onChange={change}>
          {allJobs.map((j) =>
            job.slug === j.slug ? (
              <option key={j.slug} value={j.slug} selected>
                {j.title}
              </option>
            ) : (
              <option key={j.slug} value={j.slug}>
                {j.title}
              </option>
            )
          )}
        </select>
      </div>
      {job && <div className={styles.grid}></div>}
    </>
  );
}
