import Slider from "react-slick";
import { GIcons } from "../../../utils/data/global";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Real Sales and Management",
    description:
      "Earn while you learn with hands-on sales and management gigs from day one.",
  },
  {
    id: 2,
    title: "Advanced AI Tools",
    description:
      "ur team is equipped with cutting-edge AI tools and software to work smarter and more efficiently",
  },
  {
    id: 3,
    title: "Flexible Learning Paths",
    description:
      "Customize your journey with our modular course structure, allowing you to choose your specialization and set your own pace",
  },
];

const ACOItem2 = () => {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    nextArrow: null, // Removes the next arrow
    prevArrow: null, // Removes the previous arrow
  };
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
          Community and <br /> Support
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <p className="text-cmn text-[#C1C1C1] text-[14px] md:text-[24px] capitalize max-w-[919px] mx-auto mt-[40px] md:mt-[75px]">
        At WeSell, you’re never alone. Our community of sales professionals is
        here to support you through each challenge. Engage with peers, seek
        advice from mentors, and never miss an opportunity to grow.
      </p>

      <div className="lg:hidden mt-[40px]">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-[12px]">
              <div
                key={index}
                className="bg-[#F9F9F9] border-[5px] border-b-[9px] border-primary rounded-[20px] flex flex-col items-center 
            px-[45px] py-[34px]"
              >
                <h1 className="text-center text-[#000000] text-[17px] font-medium leading-normal capitalize font-obviously-wide">
                  {item.title}
                </h1>
                <p className="text-center text-[#474747] text-[14px] font-medium leading-normal capitalize font-obviously-wide mt-[34px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-[41px] hidden lg:inline-block mt-[67px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] border-[6px] border-b-[11px] border-primary rounded-[24px] flex flex-col items-center 
            py-[61px] px-[55px]"
          >
            <h1 className="text-center text-[#000000] text-[20px] font-medium leading-normal capitalize font-obviously-wide">
              {item.title}
            </h1>
            <p className="text-center text-[#474747] text-[17px] font-medium leading-normal capitalize font-obviously-wide mt-[46px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <Button
        onClick={() => navigate("/funnel?pos=appointment")}
        className="w-[228px] h-[58px] md:w-[364px] md:h-[84px] rounded-[8px] md:rounded-[13px] p-[2px] md:p-[3.393px] pb-[9px] md:pb-[11px] bg-primary outline-none focus:outline-none hover:shadow-none shadow-none mx-auto block mt-[39px] md:mt-[67px]"
      >
        <div className="w-full bg-[#F9F9F9] h-full rounded-[8px] md:rounded-[13px] flex justify-center items-center">
          <h1 className="text-cmn text-[#000000] text-[18px] md:text-[27px] font-italic font-semibold uppercase">
            Apply Now
          </h1>
        </div>
      </Button>
    </div>
  );
};

export default ACOItem2;
