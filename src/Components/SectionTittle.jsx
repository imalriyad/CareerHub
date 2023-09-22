/* eslint-disable react/prop-types */

const SectionTittle = ({ title }) => {
  return (
    <div className="text-center md:my-20 my-14 px-4">
      <h1 className="md:text-4xl text-3xl text-[#1A1919] font-extrabold">{title}</h1>
      <p className="text-[#757575] mt-3 md:text-base text-sm">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  );
};

export default SectionTittle;
