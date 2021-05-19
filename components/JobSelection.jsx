import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Job from "./Job";

export default function JobSelection({ job, allJobs }) {
  const router = useRouter();

  const change = (e) => {
    router.push(`/jobs/${e.target.value}`);
  };
  return (
    <>
      <div className={styles.jobSelection}>
        <p>
          选择职位：
          <select onChange={change} value={job.slug}>
            {allJobs.map((j) => (
              <option key={j.slug} value={j.slug}>
                {j.title}
              </option>
            ))}
          </select>
        </p>
      </div>
      {job && <Job job={job} />}
    </>
  );
}
