/* eslint-disable react/no-unescaped-entities */
import { GIcons } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";
import img4 from "../../../assets/images/about-us/exclusive-perks/img4.png";

const AOItem4 = () => {
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
          Practical <br /> Application
        </h1>
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold hidden md:block">
          Practical Application
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize max-w-[886px] mx-auto mt-[31px] md:mt-[66px]">
        Participate in simulated sales scenarios to practice and refine your
        skills in a controlled environment.
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-[51px] md:gap-x-[100px] mt-[134px]">
        <div>
          <h1 className="text-cmn text-[#971A53] text-[24px] md:text-[34px] xl:text-[48px] font-bold uppercase text-left">
            Step 4
          </h1>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Role-Playing Exercises
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize mt-[22px] md:mt-[33px]">
            Engage in role-playing activities to develop your ability to handle
            various sales and management situations, from quick pitches to
            long-term negotiations.
          </p>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Feedback and Coaching
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize mt-[22px] md:mt-[33px]">
            Receive constructive feedback from mentors and peers to help you
            improve and grow
          </p>
        </div>
        <img
          src={img4}
          alt=""
          className="max-w-[319px] md:max-w-[446px] 2xl:max-w-[546px] w-full object-contain rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default AOItem4;
