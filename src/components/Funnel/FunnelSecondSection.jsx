/* eslint-disable react/no-unescaped-entities */
import React from "react";
import icon1 from "../../assets/images/funnel/secondSection/fsi1.png";
import icon2 from "../../assets/images/funnel/secondSection/fsi2.png";
import icon3 from "../../assets/images/funnel/secondSection/fsi3.png";
import icon4 from "../../assets/images/funnel/secondSection/fsi4.png";
import img1 from "../../assets/images/funnel/secondSection/img1.png";
import img2 from "../../assets/images/funnel/secondSection/img2.png";
import img3 from "../../assets/images/funnel/secondSection/img3.png";
import img4 from "../../assets/images/funnel/secondSection/img4.png";

const FunnelSecondSection = () => {
  return (
    <div className="py-[63px] md:py-[102px]">
      <div className="container">
        <h1 className="text-cmn text-white text-[24px] md:text-[40px] font-bold uppercase">
          Lorem ipsum dolor sit amet{" "}
        </h1>

        <div className="mt-[67px] md:mt-[150px]">
          <div className="flex flex-col-reverse lg:flex-row gap-[52px] md:gap-[78px]">
            <div className="w-full lg:max-w-[42%]">
              <h1 className="text-cmn text-white text-[20px] md:text-[24px] text-left font-bold capitalize">
                Help Others, Grow Yourself
              </h1>
              <p className="text-cmn text-[14px] md:text-[20px] font-medium capitalize text-[#C1C1C1] text-left mt-[35px] md:mt-[45px]">
                Our approach is different: we focus on sharing opportunities
                that make a real difference in people's lives. Learn how to
                connect with others, provide real value, and build meaningful
                relationships while achieving your goals.
              </p>
              <button className="w-[216px] h-[69px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[20px] font-semibold leading-normal mt-[35px] md:mt-[45px]">
                Start Now
              </button>
            </div>
            <div className="flex items-start justify-between md:justify-start gap-[32px] lg:gap-[78px] w-full">
              <div className="flex flex-col items-center justify-center gap-[31px] max-w-[102px]">
                <img
                  src={icon1}
                  alt=""
                  className="max-w-[72px] md:max-w-[102px] min-w-[72px] md:min-w-[102px] w-full object-contain"
                />
                <div className="w-[2px] h-[298px] bg-primary rounded-md hidden lg:block"></div>
              </div>
              <img
                src={img1}
                alt=""
                className="max-w-[171px] md:max-w-[227px] w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[52px] md:gap-[78px] mt-[43px] md:mt-[74px] w-full">
            <div className="md:min-w-[58%] flex items-start md:items-center !justify-start md:!justify-between gap-[32px] lg:gap-[78px]">
              <img
                src={img2}
                alt=""
                className="max-w-[171px] md:max-w-[227px] w-full object-contain"
              />
              <div className="flex flex-col items-center justify-center gap-[31px] max-w-[102px]">
                <img
                  src={icon2}
                  alt=""
                  className="max-w-[72px] md:max-w-[102px] min-w-[72px] md:min-w-[102px] w-full object-contain"
                />
                <div className="w-[2px] h-[298px] bg-primary rounded-md hidden lg:block"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-cmn text-white text-[20px] md:text-[24px] text-left font-bold capitalize">
                Develop as a Leader & Manager
              </h1>
              <p className="text-cmn text-[14px] md:text-[20px] font-medium capitalize text-[#C1C1C1] text-left mt-[35px] md:mt-[45px]">
                Leadership isn’t about managing tasks—it’s about inspiring and
                helping others succeed. We’ll teach you how to build, motivate,
                and manage a successful team that shares in your vision
              </p>
              <button className="w-[216px] h-[69px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[20px] font-semibold leading-normal mt-[35px] md:mt-[45px]">
                Join Now
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-[52px] md:gap-[78px] mt-[43px] md:mt-[74px] w-full">
            <div className="w-full lg:max-w-[42%]">
              <h1 className="text-cmn text-white text-[20px] md:text-[24px] text-left font-bold capitalize">
                Analyze & Improve Together
              </h1>
              <p className="text-cmn text-[14px] md:text-[20px] font-medium capitalize text-[#C1C1C1] text-left mt-[35px] md:mt-[45px]">
                At WeSell, success isn’t just about hitting targets—it’s about
                constantly improving as a team. We’ll help you develop a
                data-driven approach to both sales and management, ensuring
                everyone thrives.
              </p>
              <button className="w-[216px] h-[69px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[20px] font-semibold leading-normal mt-[35px] md:mt-[45px]">
                Start Now
              </button>
            </div>
            <div className="flex items-start md:items-center justify-start md:justify-start gap-[32px] lg:gap-[78px] w-full">
              <div className="flex flex-col items-center justify-center gap-[31px] max-w-[102px]">
                <img
                  src={icon3}
                  alt=""
                  className="max-w-[72px] md:max-w-[102px] min-w-[72px] md:min-w-[102px] w-full object-contain"
                />
                <div className="w-[2px] h-[298px] bg-primary rounded-md hidden lg:block"></div>
              </div>
              <img
                src={img3}
                alt=""
                className="max-w-[171px] md:max-w-[227px] w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[52px] md:gap-[78px] mt-[43px] md:mt-[74px] w-full">
            <div className="md:min-w-[58%] flex items-start md:items-center !justify-start md:!justify-between gap-[32px] lg:gap-[78px]">
              <img
                src={img4}
                alt=""
                className="max-w-[171px] md:max-w-[227px] w-full object-contain"
              />
              <div className="flex flex-col items-center justify-center gap-[31px] max-w-[102px]">
                <img
                  src={icon4}
                  alt=""
                  className="max-w-[72px] md:max-w-[102px] min-w-[72px] md:min-w-[102px] w-full object-contain"
                />
                <div className="w-[2px] h-[298px] bg-primary rounded-md hidden lg:block"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-cmn text-white text-[20px] md:text-[24px] text-left font-bold capitalize">
                Achieve Success Together
              </h1>
              <p className="text-cmn text-[14px] md:text-[20px] font-medium capitalize text-[#C1C1C1] text-left mt-[35px] md:mt-[45px]">
                Our goal is simple: we want to help you succeed. With our
                support and your dedication, you’ll build a future where
                financial success and personal fulfillment go hand in hand.
                Let's grow together!
              </p>
              <button className="w-[216px] h-[69px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[20px] font-semibold leading-normal mt-[35px] md:mt-[45px]">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnelSecondSection;
