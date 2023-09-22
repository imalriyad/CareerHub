/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const FeaturedCard = ({ featuredJob }) => {
  const { id, logo, salary, location, job_type, job_title, remote_or_onsite ,company_name} =
    featuredJob;
  return (
    <div>
      <div className="bg-base-100 drop-shadow-sm p-10 rounded-md border-[1px] border-[#E8E8E8]">
        <img src={logo} alt="" />
        <h1 className="text-xl font-bold mt-8">{job_title}</h1>
        <p className="text-[#757575] text-base mb-5 mt-2">{company_name}</p>
        <button className="px-3 py-1 font-bold text-[#6C5CE7] rounded border-[1px] border-[#6C5CE7]">
          {remote_or_onsite}
        </button>
        <button className="px-3 py-1 font-bold text-[#6C5CE7] rounded border-[1px] border-[#6C5CE7] ml-4">
          {job_type}
        </button>

        <div className="md:flex mt-5 gap-4 mb-5">
          <p className="flex items-center md:mb-0 mb-2">
            <span className="mr-1">
              <img src="https://i.ibb.co/SQbkGS6/Frame-4.png" alt="" />
            </span>
            {location}
          </p>

          <p className="flex items-center">
            <span className="mr-1">
              <img src="https://i.ibb.co/58Wt1D1/Frame.png" alt="" />
            </span>
            {salary}
          </p>
        </div>
        <Link to={`/featurejob/${id}`}>
          <button className=" cursor-pointer py-2 px-4 text-white rounded bg-[#6C5CE7] font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
