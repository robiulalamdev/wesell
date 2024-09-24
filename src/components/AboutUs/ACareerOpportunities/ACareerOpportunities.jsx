import { Button, Carousel } from "@material-tailwind/react";
import bg from "../../../assets/images/about-us/career-opportunities/bg.png";
import { ANIMATED_IMAGES, GIcons } from "../../../utils/data/global";
import { useRef, useState } from "react";
import ACOItem1 from "./ACOItem1";
import ACOItem2 from "./ACOItem2";
import ACOItem3 from "./ACOItem3";

const ACareerOpportunities = () => {
  const [step, setStep] = useState(1);
  const nextRef = useRef();
  const preRef = useRef();
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
      <div
        className="bg-[#000000] min-h-[400px] relative bottom-[150px] md:pt-[80px] bg-[length:800px_800px] md:bg-[length:1024px_1024px]"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.SNOWFALL}), url(${ANIMATED_IMAGES.SNOWFALL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center, right center",
        }}
      >
        {step === 1 && (
          <div className="container">
            <h1 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[36px] font-bold uppercase">
              Career Opportunities
            </h1>

            <div className="bg-primary max-w-[952px] mx-auto rounded-[28px] p-[7px] pb-[15px] md:pb-[24px] mt-[28px] md:mt-[85px]">
              <div className="bg-[#F9F9F9] rounded-[28px] w-full pt-[28px] md:pt-[91px] px-[28px] md:px-[127px] pb-[15px] md:pb-[71px]">
                <p className="text-[#474747] text-center text-[16px] md:text-[24px] font-obviously-wide capitalize leading-normal">
                  WeSell offers a clear path for career growth, with
                  opportunities for advancement and leadership roles. Our
                  placement services position you at the forefront of sales and
                  management innovation, and our Business Incubator Program
                  supports aspiring entrepreneurs in developing and launching
                  their ventures.
                </p>
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-[228px] h-[58px] md:w-[364px] md:h-[84px] rounded-[8px] md:rounded-[13px] p-[2px] md:p-[3.393px] pb-[9px] md:pb-[11px] bg-[#112661] outline-none focus:outline-none hover:shadow-none shadow-none mx-auto block mt-[28px] md:mt-[80px]"
            >
              <div className="w-full bg-[#F9F9F9] h-full rounded-[8px] md:rounded-[13px] flex justify-center items-center">
                <h1 className="text-cmn text-[#000000] text-[18px] md:text-[27px] font-italic font-semibold uppercase">
                  Learn More
                </h1>
              </div>
            </Button>
          </div>
        )}
        {step === 2 && (
          <>
            <Carousel
              className="!p-0 m-0 h-fit max-h-fit !transform-none"
              prevArrow={({ handlePrev }) => {
                return <button ref={nextRef} onClick={handlePrev}></button>;
              }}
              nextArrow={({ handleNext }) => {
                return <button ref={preRef} onClick={handleNext}></button>;
              }}
              navigation={() => {
                return <div></div>;
              }}
            >
              <ACOItem1 />
              <ACOItem2 />
              <ACOItem3 />
            </Carousel>
            <div className="container flex justify-end gap-x-[13px] !mt-[127px]">
              <button onClick={() => nextRef.current.click()} className="">
                <img
                  src={GIcons.PREV}
                  alt=""
                  className="w-[53px] h-[48px] object-contain"
                />
              </button>
              <button onClick={() => preRef.current.click()} className="">
                <img
                  src={GIcons.NEXT}
                  alt=""
                  className="w-[53px] h-[48px] object-contain"
                />
              </button>
            </div>
          </>
        )}

        <div className="bg-[#000000] min-h-[180px] md:min-h-[280px] relative -bottom-[170px] md:-bottom-[250px]"></div>
      </div>
    </>
  );
};

export default ACareerOpportunities;
