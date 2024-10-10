import Banner from "../../components/home/banner/Banner";
import HCareerOpportunities from "../../components/home/HCareerOpportunities";
import HEmpowering from "../../components/home/HEmpowering";
import HFaq from "../../components/home/HFaq";
import HFuture from "../../components/home/HFuture";
import HOurPhilosophy from "../../components/home/HOurPhilosophy";
import HSpecialPrograms from "../../components/home/HSpecialPrograms";
import HWesellStories from "../../components/home/HWesellStories";

const Home = () => {
  return (
    <div>
      <Banner />
      <HEmpowering />
      <HSpecialPrograms />
      <HCareerOpportunities />
      <HOurPhilosophy />
      <HFuture />
      <HWesellStories />
      <HFaq />
    </div>
  );
};

export default Home;
