import WCBackElement from "./WCBackElement";
import bg from "../../../assets/icons/outsourcing-sales/img1.gif";
import { useNavigate } from "react-router-dom";

const WCItem2 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-bp relative w-full bg-top-right-bottom-left md:bg-top-left-bottom-right bg-[length:180px_180px] md:bg-[length:280px_280px]"
      style={{
        backgroundImage: `url(${bg}), url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <WCBackElement className="md:hidden pt-[70px]" />
        <div className="pt-[80px] md:pt-[241px] max-w-[1010px] mx-auto">
          <div className="">
            <h1
              className="text-primary text-[24px] md:text-[32px] xl:text-[40px] text-center font-bold font-obviously-wide leading-normal uppercase"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              Additional Benefits of Sales Outsourcing with WeSell
            </h1>
            <p
              className="text-white text-[16px] md:text-[24px] text-center font-medium font-obviously-wide leading-normal capitalize mt-[55px] md:mt-[112px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              WeSell offers a clear path for career growth, with opportunities
              for advancement and leadership roles. Our placement services
              position you at the forefront of sales and management innovation,
              and our Business Incubator Program supports aspiring entrepreneurs
              in developing and launching their ventures.
            </p>
          </div>
          <div className="flex justify-center pb-[50px]">
            <button
              onClick={() => navigate("/funnel")}
              className="w-[170px] h-[55px] hover:w-[210px] hover:h-[63px] hover:md:w-[320px] hover:md:h-[103px] md:w-[288px] md:h-[93px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-[#163078] rounded-[8px] md:rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[22px] xl:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[55px] md:mt-[112px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCItem2;
