import logo from "../../../assets/brands/logo.png";
import { ILOGO } from "../../../utils/icons/global";
import KeepInTouch from "../../OutsourcingSales/keepInTouch/KeepInTouch";

const Footer = () => {
  return (
    <div className="bg-bp">
      <KeepInTouch />
      <div className="container">
        <div className="pt-[150px] md:pt-[300px] lg:pt-[400px] xl:pt-[600px] flex flex-col items-center">
          <div className="max-w-[55px] md:max-w-[127px]">{ILOGO}</div>
          <h1
            className="text-wp text-[20.695px] md:text-[35.385px] xl:text-[47.385px] font-medium font-obviously-wide leading-normal uppercase mt-[10px] md:mt-[23.8px]"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontStyle: "italic",
            }}
          >
            wesell
          </h1>

          <p
            className="max-w-[569px] mx-auto text-wp md:text-[#C1C1C1] text-[7.977px] md:text-[16px] font-medium text-center font-obviously-wide leading-normal uppercase mt-[45.21px] md:mt-[88.54px]"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
            }}
          >
            Every self-employed person has something in common: they all know
            how to sell. In the future, selling will be the most important skill
            for any entrepreneur. At WeSell, we ensure you master this crucial
            skill to pave the way for your entrepreneurial success
          </p>
          <p
            className="text-white md:text-wp text-[10px] md:text-[20px] text-center font-obviously-wide leading-normal md:leading-[14.236px] uppercase mt-[55px] md:mt-[88px] pb-[10px] md:pb-[23px]"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
            }}
          >
            Copyright @ All rights reserved to WeSell Private Limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
