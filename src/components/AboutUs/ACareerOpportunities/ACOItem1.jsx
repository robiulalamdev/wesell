import Slider from "react-slick";
import { GIcons } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Entrepreneurial Ventures",
    description:
      "Have a business idea? We’ll help you build it. After graduation, gain access to our exclusive program where we assist in developing your business and our team helps sell for you.",
  },
  {
    id: 2,
    title: "Business Partnership Opportunities",
    description:
      "We will also buy you a business. Partner with us to run it, leveraging WeSell's resources and network to ensure its success.",
  },
  {
    id: 3,
    title: "Placement Services",
    description:
      "Launch into a career that goes beyond traditional roles. Our placement services position you at the forefront of sales and management innovation.",
  },
];

const ACOItem1 = () => {
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
          Career <br /> Opportunities
        </h1>
        <div className="w-[38px] md:w-[105px]"></div>
      </div>

      <div className="lg:hidden mt-[68px]">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-[12px]">
              <div
                key={index}
                className="bg-[#F9F9F9] border-[8px] border-b-[16px] border-primary rounded-[35px] flex flex-col items-center
            py-[50px] px-[34px]"
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
      <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-[19px] hidden lg:inline-block mt-[102px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] border-[12px] border-b-[24px] border-primary rounded-[50px] flex flex-col items-center 
            py-[71px] px-[67px]"
          >
            <h1 className="text-center text-[#000000] text-[24px] font-medium leading-normal capitalize font-obviously-wide">
              {item.title}
            </h1>
            <p className="text-center text-[#474747] text-[20px] font-medium leading-normal capitalize font-obviously-wide mt-[59px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ACOItem1;
