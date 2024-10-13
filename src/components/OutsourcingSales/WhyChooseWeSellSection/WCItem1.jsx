import WhyChooseWeSellCards from "./WhyChooseWeSellCards";
import WCBackElement from "./WCBackElement";
import bg from "../../../assets/icons/outsourcing-sales/img1.gif";

const WCItem1 = () => {
  return (
    <div
      className="bg-bp relative w-full bg-[length:180px_180px] md:bg-[length:280px_280px]"
      style={{
        backgroundImage: `url(${bg}), url(${bg})`,
        backgroundPosition: "top right, bottom left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="pt-[28px] md:pt-[83px]">
          <WCBackElement className="md:hidden" />
          <div className="">
            <h1
              className="text-wp text-[24px] md:text-[32px] xl:text-[48px] text-center font-bold font-obviously-wide leading-normal uppercase"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              Why Choose WeSell for Sales Outsourcing?
            </h1>
            <p
              className="text-[#C1C1C1] text-[16px] md:text-[24px] text-center font-medium font-obviously-wide leading-normal capitalize mt-[34px] md:mt-[85px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              When you partner with WeSell, we take full responsibility for
              recruiting, hiring, training, and managing your sales team(s),
              effectively functioning as your dedicated sales department and an
              extension of your company. Here’s why WeSell is the best choice
              for your sales outsourcing needs:
            </p>

            <WhyChooseWeSellCards />
          </div>
          <div className="flex justify-center pb-[50px]">
            <button
              className="w-[170px] h-[55px] hover:w-[210px] hover:h-[63px] hover:md:w-[320px] hover:md:h-[103px] md:w-[288px] md:h-[93px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-[#163078] rounded-[8px] md:rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[22px] xl:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[55px] md:mt-[112px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCItem1;
