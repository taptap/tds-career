import { getAllJobs } from "../lib/jobs";
import Template from "../components/Template";
import JobSelection from "../components/JobSelection";

export default function Home({ jobs }) {
  let selectedJob = null;
  if (jobs.length > 0) {
    selectedJob = jobs[0];
  }

  return (
    <Template>
      <JobSelection job={selectedJob} allJobs={jobs} />
    </Template>
  );
}

export async function getStaticProps() {
  const jobs = getAllJobs();
  return {
    props: { jobs },
  };
}
