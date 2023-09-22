import Categories from "./Category/Categories";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import Hero from "./Hero";
import SectionTittle from "./SectionTittle";
const Home = () => {
  
  return (
    <div>
      <div className="bg-purple-50 mx-auto">
        <Hero />
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <SectionTittle title={"Job Category List"} />
        <Categories />
        <SectionTittle title={"Featured Jobs"} />
        <FeaturedJob />
      </div>
    </div>
  );
};

export default Home;
