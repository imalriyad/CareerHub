const Hero = () => {
  return (
    <div>
      <div className="hero mb-24 md:p-0 p-5">
        <div className="flex justify-around items-center flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/LQLxvcJ/P3-OLGJ1-copy-1.png"
            className="md:w-[600px]"
          />
          <div className="md:w-2/6 md:space-y-6 mt-10 ">
            <h1 className="md:text-6xl text-2xl font-bold tracking-wider">One Step Closer To Your <span className="text-[#6c5ce7]">Dream Job</span></h1>
            <p className="mt-3 text-sm md:text-base">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="md:px-4 px-2 md:mt-0 mt-4 md:text-base text-xs py-[9px] font-bold text-white bg-[#6c5ce7] rounded-md cursor-pointer">
            Get Started
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
