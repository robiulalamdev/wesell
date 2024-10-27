import { useNavigate } from "react-router-dom";
import FunnelBanner from "../../components/Funnel/FunnelBanner";
import FunnelReadyToShare from "../../components/Funnel/FunnelReadyToShare";
import FunnelRealPeople from "../../components/Funnel/FunnelRealPeople";
import FunnelSecondSection from "../../components/Funnel/FunnelSecondSection";
import FunnelThirdSection from "../../components/Funnel/FunnelThirdSection";
import BlueFooter from "../../components/shared/footer/BlueFooter";

const Funnel = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1D1D1D]">
      <FunnelBanner />
      <FunnelSecondSection />
      <FunnelThirdSection />
      <FunnelReadyToShare />
      <FunnelRealPeople />

      <div className="pb-[32px] md:pb-[100px] relative bottom-[200px]">
        <div className="container">
          <h1
            data-aos="fade-up"
            className="text-cmn text-[#FFFFFF] text-[24px] md:text-[36px] font-bold uppercase max-w-[762px] mx-auto"
          >
            Ready to Share Opportunities and Lead?
          </h1>

          <button
            onClick={() => {
              navigate("/funnel");
              window.scrollTo(0, 0);
            }}
            data-aos="fade-up"
            className="w-[216px] h-[69px] md:w-[288px] md:h-[93px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[20px] md:text-[24px] font-semibold leading-normal mt-[31px] md:mt-[55px] block mx-auto"
          >
            Start Now
          </button>
        </div>
      </div>
      <BlueFooter />
    </div>
  );
};

export default Funnel;
