import { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedJob = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [isShowAll,setShowAll] = useState(false)

  useEffect(() => {
    fetch("https://api.npoint.io/879f3c5be452e1ff90d4")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  return (
    <div>
      <div className="md:grid-cols-2 grid mx-auto px-4 gap-10">
        {
            isShowAll === true ? featuredJobs.map((featuredJob) => (
                <FeaturedCard key={featuredJob.id} featuredJob={featuredJob} />
              )): featuredJobs.slice(0,4).map((featuredJob) => (
                <FeaturedCard key={featuredJob.id} featuredJob={featuredJob} />
              ))
        }
      </div>
      {
        isShowAll !== true && <div className="mx-auto max-w-screen-md text-center my-10">
        <button onClick={()=> setShowAll(true)} className="cursor-pointer py-2 px-4 text-white rounded bg-[#6C5CE7] font-medium">
        See All Jobs
        </button>
      </div>
      }
    </div>
  );
};

export default FeaturedJob;
