/* eslint-disable react/prop-types */
const TopBanner = ({ title = "Job Details" }) => {
  return (
    <div className="bg-purple-50 text-center">
      <img
        src="https://i.ibb.co/J2tR5rY/Vector-1.png"
        alt=""
        className="absolute right-0 top-0"
      />
      <h1 className="relative top-24 font-bold text-3xl">{title}</h1>
      <img src="https://i.ibb.co/yP8BJ5Q/Vector.png" alt="" />
    </div>
  );
};

export default TopBanner;
