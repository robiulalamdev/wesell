import Slider from "react-slick";
import { IW1, IW2, IW3, IW4 } from "../../../utils/icons/outsourcingSalesIcons";

const itemCards = [
  { id: 1, title: "Comprehensive Sales Solutions", icon: IW1 },
  { id: 2, title: "Brand Representation", icon: IW2 },
  { id: 3, title: "Expertise and Specialization", icon: IW3 },
  { id: 4, title: "Cost-Effective and Scalable", icon: IW4 },
];

const WhyChooseWeSellCards = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: null, // Removes the next arrow
    prevArrow: null, // Removes the previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[34px] md:mt-[85px] overflow-hidden w-full slider-container">
      <Slider {...settings}>
        {itemCards.map((item, index) => (
          <div key={index} className="px-[6px] md:px-[9px]">
            <div className="bg-primary pb-[16px] rounded-[28.8px] min-w-[180px] md:min-w-[218px]">
              <div className="bg-wp rounded-[28.8px] border-[7.2px] border-primary px-[16px] py-[47px] flex flex-col justify-center items-center">
                <div className="max-w-[78px] md:max-w-[100px]">{item.icon}</div>
                <h1
                  className="text-[#1D1D1D] text-[16px] md:text-[20px] text-center font-medium font-obviously-wide leading-normal capitalize mt-[26px] md:mt-[34px]"
                  style={{
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  {item?.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhyChooseWeSellCards;
