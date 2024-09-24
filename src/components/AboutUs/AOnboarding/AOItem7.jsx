/* eslint-disable react/no-unescaped-entities */
import { GIcons } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";
import img7 from "../../../assets/images/about-us/exclusive-perks/img7.png";

const AOItem7 = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="flex justify-between items-start">
        <img
          onClick={() => navigate(-1)}
          src={GIcons.BACK}
          alt=""
          className="w-[38px] md:w-[105px] object-contain cursor-pointer"
        />
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold md:hidden">
          Graduation <br /> and Beyond
        </h1>
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold hidden md:block">
          Graduation and Beyond
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize max-w-[886px] mx-auto mt-[31px] md:mt-[66px]">
        Achieve different levels of mastery, from Initiate to Titan, with each
        level bringing new challenges and rewards.
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-[51px] md:gap-x-[100px] mt-[134px]">
        <div>
          <h1 className="text-cmn text-[#971A53] text-[24px] md:text-[34px] xl:text-[48px] font-bold uppercase text-left">
            Step 7
          </h1>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Career Advancement
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize leading-normal mt-[22px] md:mt-[33px]">
            Explore opportunities for career growth within WeSell, including
            leadership roles and specialized positions.
          </p>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Entrepreneurial Support
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize leading-normal mt-[22px] md:mt-[33px]">
            For those aspiring to start their own business, gain access to our
            Business Incubator Program, where we help you develop and launch
            your venture
          </p>
        </div>
        <img
          src={img7}
          alt=""
          className="max-w-[319px] md:max-w-[446px] 2xl:max-w-[546px] w-full object-contain rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default AOItem7;
