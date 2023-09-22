import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import TopBanner from "../TopBanner";
import "./swal.css";
import { useState } from "react";
import { saveToLocalStorage } from "./localStorage";
const Jobdetails = () => {
  const jobs = useLoaderData();
  const { Id } = useParams();
  const id = parseInt(Id);
  const job = jobs.find((job) => job.id === id);
  const {
    salary,
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const [isApplied, setApplied] = useState(false);

  const handlApplyBtn = () => {
    saveToLocalStorage(id);
    if (!isApplied) {
      swal("Thank You!", "You have applied Succefully!", "success");
      setApplied(true);
    } else {
      swal("Awww", "You have already applied for this Job!", "warning");
    }
  };
  return (
    <div>
      <TopBanner />
      <div className="mx-auto px-8 max-w-screen-2xl space-y-14 my-10 text-lg">
        <div className="md:flex-row flex-col flex">
          <div className="md:w-8/12 space-y-6">
            <h1 className="text-[#757575]">
              <b className="text-[#1A1919]">Job Description:</b>
              <span className="text-base ml-2 font-medium">
                {job_description}
              </span>
            </h1>
            <h1 className="text-[#757575]">
              <b className="text-[#1A1919]">Job Responsibility:</b>{" "}
              <span className="text-base ml-2 font-medium">
                {job_responsibility}
              </span>
            </h1>
            <h1 className="text-[#757575]">
              <b className="text-[#1A1919]">Educational Requirements:</b>{" "}
              <span className="text-base ml-2 font-medium">
                {educational_requirements}
              </span>
            </h1>
            <h1 className="text-[#757575]">
              <b className="text-[#1A1919]">Experiences:</b>
              <span className="text-base ml-2">{experiences}</span>
            </h1>
          </div>
          <div className="mx-auto md:w-3/12 md:mt-0 mt-12 md:p-8 p-4 rounded bg-purple-100 ">
            <h1 className="font-extrabold text-xl">{id}. Job Details</h1>
            <hr className="my-3 w-full border-[1px] border-[#825de8]" />
            <span className="flex md:text-base text-sm items-center">
              <img src="/src/assets/Icons/Frame.png" alt="" />
              <b className="ml-2">Salary : </b>
              <span className="ml-1 font-medium text-[#757575]"> {salary}</span>
            </span>
            <span className="flex md:text-base text-sm items-start mt-2">
              <img
                src="https://i.ibb.co/SJzWsmP/Frame-1.png"
                alt=""
              />
              <b className="ml-2">Role :</b>
              <span className="ml-1 font-medium text-[#757575]">
                {job_title}
              </span>
            </span>

            <h1 className="font-extrabold mt-9  text-xl">
              Contact Information
            </h1>
            <hr className="my-3 w-full border-[1px] border-[#825de8]" />
            <span className="flex md:text-base text-sm items-center">
              <img src="https://i.ibb.co/HgTPRPw/Frame-2.png" alt="" />
              <b className="ml-2"> Phone : </b>
              <span className="ml-1 font-medium text-[#757575]">
                {contact_information.phone}
              </span>
            </span>
            <span className="flex md:text-base text-sm mt-2 items-center">
              <img src="https://i.ibb.co/tB4tSTx/Frame-3.png" alt="" />
              <b className="ml-2"> Email : </b>
              <span className="ml-1 font-medium text-[#757575]">
                {contact_information.email}
              </span>
            </span>
            <span className="flex md:text-base text-sm items-start mt-2">
              <img src="https://i.ibb.co/SQbkGS6/Frame-4.png" alt="" />
              <b className="ml-2 "> Address: </b>
              <span className="ml-1 font-medium text-[#757575]">
                {contact_information.address}
              </span>
            </span>
            <button
              onClick={handlApplyBtn}
              className="w-full mt-6 md:text-base text-xs py-[9px] font-bold text-white bg-[#6c5ce7] rounded-md cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
