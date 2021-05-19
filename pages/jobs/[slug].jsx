import { getAllJobSlugs, getAllJobs } from "../../lib/jobs";
import Template from "../../components/Template";
import JobSelection from "../../components/JobSelection";

export default function Job({ job, allJobs }) {
  return (
    <Template>
      <JobSelection job={job} allJobs={allJobs} />
    </Template>
  );
}

export async function getStaticPaths() {
  const paths = getAllJobSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allJobs = getAllJobs();
  const job = allJobs.find((j) => j.slug === params.slug);
  return {
    props: { job, allJobs },
  };
}
