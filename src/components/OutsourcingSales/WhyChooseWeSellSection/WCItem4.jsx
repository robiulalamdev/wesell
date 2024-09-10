import WCBackElement from "./WCBackElement";
import bg from "../../../assets/icons/outsourcing-sales/img1.gif";
import WCItem4SingleCard from "./WCItem4SingleCard";
import Slider from "react-slick";

const items = [
  {
    id: 1,
    title: "B2B Appointment Setting",
    description:
      "B2B appointment setting servicesfocus on establishing connections and scheduling meetings between businesses. This typically involves targeting key decision-makers within other companies to discuss potential partnerships, collaborations, or sales opportunities. B2B appointment setting often requires a personalized approach, as sales cycles and decision-making processes in the B2B sector are more complex and involve multiple stakeholders.",
  },
  {
    id: 2,
    title: "B2C Appointment Setting",
    description:
      "B2C appointment setting servicesrevolve around reaching out to individual consumers to arrange appointments for product demonstrations, consultations, or sales pitches. In this context, the goal is to engage with potential customers on a one-on-one basis, addressing their specific needs and preferences to drive conversions. B2C appointment setting strategies emphasize consumer engagement, lead nurturing, and building rapport to cultivate long-term relationships and loyalty.",
  },
];

const WCItem4 = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: null, // Removes the next arrow
    prevArrow: null, // Removes the previous arrow
  };
  return (
    <div
      className="bg-[#0B0B0B] relative w-full bg-top-right-bottom-left md:bg-top-left-bottom-right bg-[length:180px_180px] md:bg-[length:280px_280px]"
      style={{
        backgroundImage: `url(${bg}), url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container ">
        <WCBackElement className="md:hidden pt-[70px]" />
        <div className="pt-[80px] md:pt-[241px] max-w-[1010px] mx-auto">
          <div className="xl:hidden">
            <Slider {...settings}>
              {items.map((item, index) => (
                <div key={index} className="">
                  <WCItem4SingleCard data={item} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="xl:grid grid-cols-2 gap-[16px] hidden xl:inline-block">
            {items.map((item, index) => (
              <WCItem4SingleCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCItem4;
