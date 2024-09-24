/* eslint-disable react/no-unescaped-entities */
import { GIcons } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";
import img2 from "../../../assets/images/about-us/exclusive-perks/img2.png";

const AOItem2 = () => {
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
          Welcome and <br /> Orientation
        </h1>
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold hidden md:block">
          Welcome and Orientation
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize max-w-[886px] mx-auto mt-[31px] md:mt-[66px]">
        Meet your fellow trainees, mentors, and the WeSell leadership team.
        Learn about our mission, values, and what it means to 'Dare to Sell' and
        'Dare to Manage.
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-[51px] md:gap-x-[100px] mt-[47px]">
        <div>
          <h1 className="text-cmn text-[#971A53] text-[24px] md:text-[34px] xl:text-[48px] font-bold uppercase text-left">
            Step 2
          </h1>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Orientation Materials
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize mt-[22px] md:mt-[33px]">
            Your journey begins with an intense bootcamp, akin to BUD/S in the
            Navy SEALs. This rigorous training is designed to yield results
            quickly, preparing you to make substantial money fast.
          </p>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            The WeSell Watch
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize mt-[22px] md:mt-[33px]">
            As part of your welcome package, you’ll receive an old-school Timex
            digital watch. This watch represents your discipline and commitment
            to your journey.
          </p>
        </div>
        <img
          src={img2}
          alt=""
          className="max-w-[319px] md:max-w-[446px] 2xl:max-w-[546px] w-full object-contain rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default AOItem2;
