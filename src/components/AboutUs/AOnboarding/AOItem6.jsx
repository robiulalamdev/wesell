/* eslint-disable react/no-unescaped-entities */
import { GIcons } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";
import img6 from "../../../assets/images/about-us/exclusive-perks/img6.png";

const AOItem6 = () => {
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
          Continuous <br /> Development
        </h1>
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold hidden md:block">
          Continuous Development
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize max-w-[886px] mx-auto mt-[31px] md:mt-[66px]">
        Participate in regular training sessions to stay updated on the latest
        techniques, industry trends, and AI advancements
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-[51px] md:gap-x-[100px] mt-[134px]">
        <div>
          <h1 className="text-cmn text-[#971A53] text-[24px] md:text-[34px] xl:text-[48px] font-bold uppercase text-left">
            Step 6
          </h1>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Performance Reviews
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize mt-[22px] md:mt-[33px]">
            Receive periodic performance reviews to track your progress, set
            goals, and identify areas for improvement
          </p>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Advanced Challenges
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize mt-[22px] md:mt-[33px]">
            Take on advanced challenges to test your skills and strive for
            higher levels of achievement within the WeSell community.
          </p>
        </div>
        <img
          src={img6}
          alt=""
          className="max-w-[319px] md:max-w-[446px] 2xl:max-w-[546px] w-full object-contain rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default AOItem6;
