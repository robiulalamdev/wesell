import Banner from "../../components/home/banner/Banner";
import HCareerOpportunities from "../../components/home/HCareerOpportunities";
import HEmpowering from "../../components/home/HEmpowering";
import HSpecialPrograms from "../../components/home/HSpecialPrograms";

const Home = () => {
  return (
    <div>
      <Banner />
      <HEmpowering />
      <HSpecialPrograms />
      <HCareerOpportunities />
    </div>
  );
};

export default Home;
