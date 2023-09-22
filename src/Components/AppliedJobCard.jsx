/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const AppliedJobCard = ({ info }) => {
  const {
    logo,
    id,
    job_type,
    salary,
    company_name,
    remote_or_onsite,
    location,
    job_title,
  } = info;
  return (
    <>
      <div className="mx-auto px-4 max-w-screen-xl my-10">
        <div className="border p-6 rounded md:relative md:flex">
          <figure className="rounded flex justify-center items-center w-[210px] md:mx-0 mx-auto text-center h-[190px] bg-[#F4F4F4]">
            <img src={logo} alt="" />
          </figure>

          <div className="mt-4 md:ml-8 md:flex items-center">
            <div>
              <h1 className="text-xl font-bold">{job_title}</h1>
              <p className="text-[#757575] text-base mb-5 mt-2">
                {company_name}
              </p>
              <button className="px-3 py-1 font-bold text-[#6C5CE7] rounded border-[1px] border-[#6C5CE7]">
                {remote_or_onsite}
              </button>
              <button className="px-3 py-1 font-bold text-[#6C5CE7] rounded border-[1px] border-[#6C5CE7] ml-4">
                {job_type}
              </button>

              <div className="md:flex mt-5 gap-4 mb-5">
                <p className="flex items-center md:mb-0 mb-2">
                  <span className="mr-1">
                    <img src="/src/assets/Icons/Frame-4.png" alt="" />
                  </span>
                  {location}
                </p>

                <p className="flex items-center">
                  <span className="mr-1">
                    <img src="/src/assets/Icons/Frame.png" alt="" />
                  </span>
                  {salary}
                </p>
              </div>
            </div>

            <div className="md:absolute right-10">
              <Link to={`/featurejob/${id}`}>
                <button className=" cursor-pointer py-2 px-4 text-white rounded bg-[#6C5CE7] font-semibold">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJobCard;
