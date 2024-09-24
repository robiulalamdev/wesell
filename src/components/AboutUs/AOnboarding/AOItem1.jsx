/* eslint-disable react/no-unescaped-entities */
import { GIcons } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/about-us/exclusive-perks/img1.png";

const AOItem1 = () => {
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
          Onboarding <br /> Process
        </h1>
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold hidden md:block">
          Onboarding Process
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize max-w-[886px] mx-auto mt-[31px] md:mt-[66px]">
        There's a reason why there’s no sales union—selling is an art, and if
        you don't sell, you don't make money. Everything in this world revolves
        around presenting opportunities, and with the future of AI changing the
        landscape, mastering this art is more critical than ever. At WeSell, we
        teach you about online sales, but we go beyond that. We equip you with
        advanced AI tools and a team of AI agents dedicated to your success. Our
        approach is not about hard selling; it's about understanding customer
        needs, presenting opportunities, and fostering genuine connections. The
        world is evolving, and sales remains the most vital skill for future
        entrepreneurs and managers alike.
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-y-[51px] md:gap-x-[100px] mt-[47px] pb-[38px]">
        <div>
          <h1 className="text-cmn text-[#971A53] text-[24px] md:text-[34px] xl:text-[48px] font-bold uppercase text-left">
            Step 1
          </h1>
          <h2 className="text-cmn text-[#F9F9F9] text-[20px] md:text-[32px] capitalize font-medium text-left mt-[22px] md:mt-[51px]">
            Bootcamp Initiation
          </h2>
          <p className="text-[#C1C1C1] text-[16px] md:text-[20px] font-medium font-obviously-wide capitalize mt-[22px] md:mt-[33px]">
            Your journey begins with an intense bootcamp, akin to BUD/S in the
            Navy SEALs. This rigorous training is designed to yield results
            quickly, preparing you to make substantial money fast.
          </p>
        </div>
        <img
          src={img1}
          alt=""
          className="max-w-[319px] md:max-w-[446px] 2xl:max-w-[546px] w-full object-contain rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default AOItem1;
