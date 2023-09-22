import { useLoaderData } from "react-router-dom";
import TopBanner from "./TopBanner";
import { useEffect, useState } from "react";
import { storedAplication } from "./FeaturedJob/localStorage";
import AppliedJobCard from "./AppliedJobCard";
import { FiFilter } from "react-icons/fi";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [displayJobs, setDisplayJobs] = useState([]);
  const [filterDisplayJobs, setFilterDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobId = storedAplication();
    if (jobs.length > 0) {
      const getJob = jobs.filter((job) => storedJobId.includes(job.id));
      setDisplayJobs(getJob);
      setFilterDisplayJobs(getJob);
    }
  }, [jobs]);

  const handleJobsFilter = (condition) => {
    if (condition === "all") {
      setDisplayJobs(filterDisplayJobs);
    } else if (condition === "remote") {
      const remote = filterDisplayJobs.filter(
        (item) => item.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remote);
    } else if (condition === "onsite") {
      const onsite = filterDisplayJobs.filter(
        (item) => item.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsite);
    }
  };
  return (
    <div>
      <TopBanner title="Applied Jobs" />
      <div className="mx-auto px-4 max-w-screen-xl my-10">
        <details className="dropdown ">
          <summary className="m-1 items-center flex cursor-pointer py-2 px-4 text-white rounded bg-[#6C5CE7] font-semibold">
            <span className="text-xl mr-1">
              <FiFilter />
            </span>
            Filter
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 md:text-base">
            <li onClick={() => handleJobsFilter("all")}>
              <p>All</p>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <p>Remote</p>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <p>Onsite</p>
            </li>
          </ul>
        </details>
      </div>

      {displayJobs?.map((info) => (
        <AppliedJobCard info={info} key={info.id} />
      ))}
    </div>
  );
};

export default AppliedJob;
