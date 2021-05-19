import YAML from "yaml";
import fs from "fs";
import path from "path";

const jobsFilePath = path.join(process.cwd(), "data", "jobs.yml");

export function getAllJobs() {
  const jobsStr = fs.readFileSync(jobsFilePath, "utf8");
  return YAML.parse(jobsStr);
}

export function getAllJobSlugs() {
  const jobs = getAllJobs();
  return jobs.map((job) => {
    return {
      params: {
        slug: job.slug,
      },
    };
  });
}
