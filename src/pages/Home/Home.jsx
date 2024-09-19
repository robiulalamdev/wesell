import Banner from "../../components/home/banner/Banner";
import HCareerOpportunities from "../../components/home/HCareerOpportunities";
import HEmpowering from "../../components/home/HEmpowering";
import HFuture from "../../components/home/HFuture";
import HOurPhilosophy from "../../components/home/HOurPhilosophy";
import HSpecialPrograms from "../../components/home/HSpecialPrograms";

const Home = () => {
  return (
    <div>
      <Banner />
      <HEmpowering />
      <HSpecialPrograms />
      <HCareerOpportunities />
      <HOurPhilosophy />
      <HFuture />
    </div>
  );
};

export default Home;
