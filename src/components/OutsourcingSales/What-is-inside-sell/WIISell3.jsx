import Slider from "react-slick";
import {
  I_WIISell_1,
  I_WIISell_2,
  I_WIISell_3,
  I_WIISell_4,
  I_WIISell_5,
  I_WIISell_6,
  I_WIISell_7,
  I_WIISell_8,
} from "../../../utils/icons/outsourcingSalesIcons";

const items = [
  { id: 1, title: "Cost Savings", icon: I_WIISell_1 },
  { id: 2, title: "Specialized Expertise", icon: I_WIISell_2 },
  { id: 3, title: "Scalability", icon: I_WIISell_3 },
  { id: 4, title: "Advanced Technology", icon: I_WIISell_4 },
  { id: 5, title: "Focus on Core Competencies", icon: I_WIISell_5 },
  { id: 6, title: "Market Expansion", icon: I_WIISell_6 },
  { id: 7, title: "Increased Sales Velocity", icon: I_WIISell_7 },
  { id: 8, title: "Risk Mitigation", icon: I_WIISell_8 },
];

const WIISell3 = () => {
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
    <div className="">
      <h1 className="text-cmn font-bold text-[24px] md:text-[40px] uppercase leading-normal text-primary text-center">
        enefits of Hiring an Inside Sales Service
      </h1>
      <p className="text-[16px] md:text-[20px] font-medium text-center text-[#C1C1C1] capitalize font-obviously-wide leading-normal mt-[24px] md:mt-[75px] max-w-[796px] mx-auto">
        Hiring an inside sales outsourcing company offers numerous benefits to
        businesses looking to boost their sales efforts. Here are some key
        advantages:
      </p>

      <div className="pt-[46px] md:pt-[64px] max-w-[1010px] mx-auto">
        <div className="md:hidden">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="px-[12px]">
                <div className="bg-white border-[6.062px] border-b-[14px] border-primary rounded-[24.247px] flex flex-col justify-center items-center gap-[30px] pt-[26px] pb-[36px] px-[12px]">
                  <div className="w-[103px] h-[103px] rounded-full bg-primary flex justify-center items-center">
                    {item.icon}
                  </div>
                  <h1 className="text-center text-bp text-[20px] font-medium leading-normal capitalize font-obviously-wide">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="md:grid grid-cols-3 xl:grid-cols-4 gap-[19px] hidden md:inline-block">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border-[6.062px] border-b-[14px] border-primary rounded-[24.247px] flex flex-col justify-center items-center gap-[30px] pt-[26px] pb-[36px] px-[12px]"
            >
              <div className="w-[103px] h-[103px] rounded-full bg-primary flex justify-center items-center">
                {item.icon}
              </div>
              <h1 className="text-center text-bp text-[20px] font-medium leading-normal capitalize font-obviously-wide">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WIISell3;
