import { getAllJobs } from "../lib/jobs";
import { useRouter } from "next/router";
import Template from "../components/Template";
import JobSelection from "../components/JobSelection";

export default function Home({ jobs }) {
  const router = useRouter();
  const slug = router.query.job;
  let job = jobs.find((j) => j.slug === slug);
  if (!job && jobs.length > 0) {
    job = jobs[0];
  }

  return (
    <Template>
      <JobSelection job={job} allJobs={jobs} />
    </Template>
  );
}

export async function getStaticProps() {
  const jobs = getAllJobs();
  return {
    props: { jobs },
  };
}
