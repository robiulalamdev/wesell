/* eslint-disable react/no-unescaped-entities */
import { GIcons } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";
import img8 from "../../../assets/images/about-us/exclusive-perks/img8.png";
import img9 from "../../../assets/images/about-us/exclusive-perks/img9.png";

const AOItem8 = () => {
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
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold">
          Conclusion
        </h1>

        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize max-w-[886px] mx-auto mt-[31px] md:mt-[66px]">
        At WeSell, we’re committed to your success. Our onboarding process is
        just the beginning of a journey that will equip you with the skills,
        confidence, and support you need to excel in the world of sales and
        management. Dare to sell, dare to manage, and let’s build your future
        together
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-[33px] md:gap-x-[55px] mt-[55px]">
        <img
          src={img8}
          alt=""
          className="max-w-[319px] md:max-w-[446px] 2xl:max-w-[546px] w-full object-contain rounded-[16px]"
        />
        <img
          src={img9}
          alt=""
          className="max-w-[319px] md:max-w-[446px] 2xl:max-w-[546px] w-full object-contain rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default AOItem8;
