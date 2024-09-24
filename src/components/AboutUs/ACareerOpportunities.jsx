import { Button } from "@material-tailwind/react";
import bg from "../../assets/images/about-us/career-opportunities/bg.png";

const ACareerOpportunities = () => {
  return (
    <>
      <div
        className="min-h-[163px] relative bottom-[150px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-[#000000] min-h-[400px] relative bottom-[150px] md:pt-[80px]">
        <div className="container">
          <h1 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[36px] font-bold uppercase">
            Career Opportunities
          </h1>

          <div className="bg-primary max-w-[952px] mx-auto rounded-[28px] p-[7px] pb-[15px] md:pb-[24px] mt-[28px] md:mt-[85px]">
            <div className="bg-[#F9F9F9] rounded-[28px] w-full pt-[28px] md:pt-[91px] px-[28px] md:px-[127px] pb-[15px] md:pb-[71px]">
              <p className="text-[#474747] text-center text-[16px] md:text-[24px] font-obviously-wide capitalize leading-normal">
                WeSell offers a clear path for career growth, with opportunities
                for advancement and leadership roles. Our placement services
                position you at the forefront of sales and management
                innovation, and our Business Incubator Program supports aspiring
                entrepreneurs in developing and launching their ventures.
              </p>
            </div>
          </div>

          <Button className="w-[228px] h-[58px] md:w-[364px] md:h-[84px] rounded-[8px] md:rounded-[13px] p-[2px] md:p-[3.393px] pb-[9px] md:pb-[11px] bg-[#112661] outline-none focus:outline-none hover:shadow-none shadow-none mx-auto block mt-[28px] md:mt-[80px]">
            <div className="w-full bg-[#F9F9F9] h-full rounded-[8px] md:rounded-[13px] flex justify-center items-center">
              <h1 className="text-cmn text-[#000000] text-[18px] md:text-[27px] font-italic font-semibold uppercase">
                Learn More
              </h1>
            </div>
          </Button>
        </div>
        <div className="bg-[#000000] min-h-[180px] md:min-h-[280px] relative -bottom-[170px] md:-bottom-[250px]"></div>
      </div>
    </>
  );
};

export default ACareerOpportunities;
