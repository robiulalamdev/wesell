/* eslint-disable react/no-unescaped-entities */
import { GIcons } from "../../../utils/data/global";
import { Button } from "@material-tailwind/react";
import img1 from "../../../assets/images/about-us/career-opportunities/img1.png";
import { useNavigate } from "react-router-dom";

const ACOItem3 = () => {
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
          Sales as <br /> an Art
        </h1>
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] uppercase font-bold hidden md:block">
          Sales as an Art
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <div className="flex justify-between items-center gap-x-[100px] w-full mt-[65px] md:mt-[156px]">
        <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize md:text-left">
          There's a reason why there’s no sales union—selling is an art, and if
          you don't sell, you don't make money. Everything in this world
          revolves around presenting opportunities, and with the future of AI
          changing the landscape, mastering this art is more critical than ever.
          At WeSell, we teach you about online sales, but we go beyond that. We
          equip you with advanced AI tools and a team of AI agents dedicated to
          your success. Our approach is not about hard selling; it's about
          understanding customer needs, presenting opportunities, and fostering
          genuine connections. The world is evolving, and sales remains the most
          vital skill for future entrepreneurs and managers alike.
        </p>
        <img
          src={img1}
          alt=""
          className="max-w-[339px] w-full object-contain hidden md:block"
        />
      </div>

      <Button
        onClick={() => navigate("/funnel?pos=appointment")}
        className="w-[228px] h-[75px] md:w-[364px] md:h-[84px] xl:w-[484px] xl:h-[118px] rounded-[8px] md:rounded-[13px] p-[2px] md:p-[3.393px] pb-[9px] md:pb-[11px] bg-primary outline-none focus:outline-none hover:shadow-none shadow-none mx-auto md:mx-0 block mt-[39px] md:mt-[67px]"
      >
        <div className="w-full bg-[#F9F9F9] h-full rounded-[8px] md:rounded-[13px] flex justify-center items-center">
          <h1 className="text-cmn text-[#000000] text-[15px] sm:text-[18px] md:text-[20px] xl:text-[27px] font-italic font-semibold uppercase">
            Start Earning <br /> $500/Day Now
          </h1>
        </div>
      </Button>
    </div>
  );
};

export default ACOItem3;
