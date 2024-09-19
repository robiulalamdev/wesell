import bg from "../../assets/images/about-us/banner/bg.png";
import img1 from "../../assets/images/about-us/banner/img1.png";
import img2 from "../../assets/images/about-us/banner/img2.png";
import Header from "../shared/header/Header";
import { ANIMATED_IMAGES } from "../../utils/data/global";

const ABanner = () => {
  return (
    <div
      className="min-h-[1008px]"
      style={{
        background: `linear-gradient(180deg, rgba(22, 48, 120, 0.00) 35.91%, rgba(22, 48, 120, 0.90) 100%), url(${bg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div
        className="container"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.INFINITY})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          backgroundSize: "200px",
        }}
      >
        <Header />

        <div className="lg:flex justify-between items-start gap-[16px] mt-[150px] pb-[71px] hidden lg:inline-block">
          <img
            src={img1}
            alt=""
            className="max-w-[209px] w-full object-contain"
          />
          <div className="max-w-[700px] mx-auto">
            <h1 className="text-cmn font-bold text-[40px] text-[#F9F9F9] uppercase text-center">
              About wesell
            </h1>
            <p className="text-cmn capitalize text-[#C1C1C1] text-[20px] font-normal mt-[75px]">
              At WeSell, we transform ambition into success by empowering the
              next generation of business leaders. Our dynamic training programs
              in sales and management are designed to equip individuals with the
              skills, confidence, and support needed to excel in the competitive
              world of business. Inspired by industry leaders, WeSell is
              committed to fostering a supportive community that empowers both
              men and women to achieve their highest potential.
            </p>

            <div className="flex justify-center">
              <button
                className="w-[288px] h-[84px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-[#540E21] rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[36px] md:mt-[75px]"
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
          <img
            src={img2}
            alt=""
            className="max-w-[217px] w-full object-contain"
          />
        </div>

        <div className="mt-[35px] lg:hidden pb-[45px]">
          <h1 className="text-cmn font-bold text-[20px] text-[#F9F9F9] uppercase text-center">
            About wesell
          </h1>
          <div className="flex justify-between items-center mt-[32px]">
            <img
              src={img1}
              alt=""
              className="max-w-[91px] w-full object-contain"
            />
            <div>
              <p className="text-cmn capitalize text-[#C1C1C1] text-[16px] md:text-[18px] font-normal mt-[29px]">
                At WeSell, we transform ambition into success by empowering the
                next generation of business leaders. Our dynamic training
                programs in sales and management are designed to equip
                individuals with the skills,
              </p>
            </div>
          </div>
          <div className="flex justify-between items-end overflow-hidden">
            <div>
              <p className="text-cmn capitalize text-[#C1C1C1] text-[16px] md:text-[18px] font-normal mt-[29px]">
                confidence, and support needed to excel in the competitive world
                of business. Inspired by industry leaders, WeSell is committed
                to fostering a supportive community that empowers both men and
                women to achieve their highest potential.
              </p>
              <div className="flex justify-center">
                <button
                  className="w-[170px] h-[55px] !border-b-[5px] border-x-[2px] border-t-[2px] border-[#540E21] rounded-[8px] bg-wp text-[#0D0D0D] capitalize text-[14px] font-semibold font-obviously-wide leading-normal mt-[36px]"
                  style={{
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontStyle: "italic",
                  }}
                >
                  Take Action
                </button>
              </div>
            </div>
            <img
              src={img2}
              alt=""
              className="max-w-[118px] object-contain w-ful -mr-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABanner;
