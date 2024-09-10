import OutsourcingSalesBanner from "../../components/OutsourcingSales/banner/OutsourcingSalesBanner";
import WISContainer from "../../components/OutsourcingSales/WhatIsSellSection/WISContainer";
import WhyChooseWeSellSection from "../../components/OutsourcingSales/WhyChooseWeSellSection/WhyChooseWeSellSection";

const OutsourcingSales = () => {
  return (
    <div>
      <OutsourcingSalesBanner />
      <WhyChooseWeSellSection />
      <WISContainer />
    </div>
  );
};

export default OutsourcingSales;
