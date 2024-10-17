import FunnelBanner from "../../components/Funnel/FunnelBanner";
import FunnelReadyToShare from "../../components/Funnel/FunnelReadyToShare";
import FunnelSecondSection from "../../components/Funnel/FunnelSecondSection";
import FunnelThirdSection from "../../components/Funnel/FunnelThirdSection";

const Funnel = () => {
  return (
    <div className="bg-[#1D1D1D]">
      <FunnelBanner />
      <FunnelSecondSection />
      <FunnelThirdSection />
      <FunnelReadyToShare />
    </div>
  );
};

export default Funnel;
