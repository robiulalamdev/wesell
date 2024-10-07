import { useRef } from "react";
import Banner from "../../components/home/banner/Banner";
import HCareerOpportunities from "../../components/home/HCareerOpportunities";
import HEmpowering from "../../components/home/HEmpowering";
import HFaq from "../../components/home/HFaq";
import HFuture from "../../components/home/HFuture";
import HOurPhilosophy from "../../components/home/HOurPhilosophy";
import HSpecialPrograms from "../../components/home/HSpecialPrograms";
import HWesellStories from "../../components/home/HWesellStories";
import { useScroll } from "framer-motion";

const Home = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      <div ref={container} className="h-full">
        <Banner scrollYProgress={scrollYProgress} />
        <HEmpowering />
      </div>
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
