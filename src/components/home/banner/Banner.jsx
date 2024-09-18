import Header from "../../shared/header/Header";
import bg from "../../../assets/images/home/banner/bg.png";
import img1 from "../../../assets/images/home/banner/img1.png";
import img2 from "../../../assets/images/home/banner/img2.png";
import { ANIMATED_IMAGES } from "../../../utils/data/global";
import { Button } from "@material-tailwind/react";
import { IHB_1, IHB_2, IHB_3 } from "../../../utils/icons/homeIcons";

const items = [
  { id: 1, title: "Brand Representation", icon: IHB_1 },
  { id: 2, title: "Expertise and Specialization", icon: IHB_2 },
  { id: 3, title: "Cost-Effective and Scalable", icon: IHB_3 },
];

const Banner = () => {
  return (
    <div
      className="min-h-[800px] pb-[62px] md:pb-[97px]"
      style={{
        background: `linear-gradient(180deg, rgba(22, 48, 120, 0.00) 35.91%, rgba(22, 48, 120, 0.90) 100%), url(${bg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div
        className="container bg-[length:270px] md:bg-[length:500px] p-0"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.INFINITY})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      >
        <Header />

        <div className="mt-[78px] md:mt-[100px] max-w-[902px] mx-auto">
          <h1 className="text-[17.844px] md:text-[36px] font-bold leading-normal font-obviously-wide text-[#E4DCDE] font-italic text-center">
            Students, graduates, dreamers—no matter where you start, without
            sales and management, your journey will stall. Learn what every
            successful person knows.&quot;
          </h1>

          <Button
            className="shadow-none hover:shadow-none block mx-auto bg-[#0D0D0D] md:bg-[#971A53] w-fit p-0 outline-none text-cmn rounded-[11.82px] border-[2.955px] md:border-[3.393px] border-b-[8px] md:border-b-[11px] border-[#0D0D0D] md:border-[#971A53] text-[20px] md:text-[27.146px] text-black mt-[14px] md:mt-[64px]"
            style={{ fontStyle: "italic" }}
          >
            <div className="bg-white outline-none w-[170px] h-[55px] md:w-[288px] md:h-[93px] !rounded-[11.82px] flex justify-center items-center duration-200">
              Start Now
            </div>
          </Button>
        </div>

        <div className="flex justify-between md:justify-center w-full items-center gap-x-[12px] mt-[70px] md:mt-[63px] overflow-hidden">
          <img
            src={img1}
            alt=""
            className="max-w-[85px] sm:max-w-[133px] object-contain w-full md:hidden"
          />
          <div className="flex justify-center items-center flex-wrap gap-y-[12px] gap-x-[17.99px] md:gap-y-[17.99px]">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[104px] min-h-[116px] md:w-[247px] md:h-[245px] bg-[#0D0D0D] rounded-[11px] md:rounded-[24.25px] p-[4px] pb-[12px]"
              >
                <div className="bg-[#F9F9F9] rounded-[11px] md:rounded-[24.25px] w-full h-full flex flex-col justify-center items-center gap-y-[7.11px] md:gap-y-[18.75px] py-[12px] px-[8px]">
                  <div className="w-[49px] h-[49px] md:w-[103px] md:h-[103px] flex justify-center items-center bg-primary p-[4px] rounded-full">
                    <div className="max-w-[20px] md:max-w-[50px]">
                      {item.icon}
                    </div>
                  </div>
                  <h1 className="text-cmn text-[#1D1D1D] text-[9.627px] md:text-[20px] font-raleway font-medium leading-normal capitalize">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <img
            src={img2}
            alt=""
            className="max-w-[90px] sm:max-w-[139px] object-contain w-full md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
