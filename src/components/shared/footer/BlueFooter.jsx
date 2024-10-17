import { ILOGO } from "../../../utils/icons/global";
import bg from "../../../assets/images/global/footer/blueFooter/bg.png";

const BlueFooter = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="container !pt-[74px] md:!pt-[200px]">
          <div className="flex flex-col items-center">
            <div className="max-w-[55px] md:max-w-[127px]">{ILOGO}</div>
            <h1
              className="text-wp text-[20.695px] md:text-[35.385px] xl:text-[47.385px] font-medium font-obviously-wide leading-normal uppercase mt-[10px] md:mt-[23.8px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              wesell
            </h1>

            <div>
              <p
                className="max-w-[569px] mx-auto text-wp md:text-[#C1C1C1] text-[7.977px] md:text-[16px] font-medium text-center font-obviously-wide leading-normal uppercase mt-[45.21px] md:mt-[88.54px]"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                }}
              >
                Every self-employed person has something in common: they all
                know how to sell. In the future, selling will be the most
                important skill for any entrepreneur. At WeSell, we ensure you
                master this crucial skill to pave the way for your
                entrepreneurial success
              </p>
              <p
                className="text-white md:text-[#F9F9F9] text-[7.977px] md:text-[16px] text-center font-obviously-wide leading-normal md:leading-[14.236px] uppercase mt-[45px] md:mt-[88px] pb-[10px] md:pb-[23px] max-w-[219px] md:max-w-full mx-auto"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                }}
              >
                Copyright @ All rights reserved to WeSell Private Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueFooter;
