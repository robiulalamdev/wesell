import OutsourcingSalesBanner from "../../components/OutsourcingSales/banner/OutsourcingSalesBanner";
import WIISellContainer from "../../components/OutsourcingSales/What-is-inside-sell/WIISellContainer";
import WISContainer from "../../components/OutsourcingSales/WhatIsSellSection/WISContainer";
import WhyChooseWeSellSection from "../../components/OutsourcingSales/WhyChooseWeSellSection/WhyChooseWeSellSection";

const OutsourcingSales = () => {
  return (
    <div>
      <OutsourcingSalesBanner />
      <WhyChooseWeSellSection />
      <WISContainer />
      <WIISellContainer />
    </div>
  );
};

export default OutsourcingSales;
