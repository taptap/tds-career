import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Job from "./Job";

export default function JobSelection({ job, allJobs }) {
  const router = useRouter();

  const change = (e) => {
    router.push(`/?job=${e.target.value}`, null, {
      scroll: false,
      shallow: true,
    });
  };
  return (
    <>
      <div className={styles.jobSelection}>
        <h1>探索你感兴趣的职位</h1>
        <div>
          目前我们在招聘以下这些职位，如果其中有适合你的，可提交申请至
          jobs.leanapp.cn。
        </div>
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
