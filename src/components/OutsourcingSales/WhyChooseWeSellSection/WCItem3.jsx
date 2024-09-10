import WCBackElement from "./WCBackElement";
import bg from "../../../assets/icons/outsourcing-sales/img1.gif";
import no1 from "../../../assets/icons/outsourcing-sales/no1.png";
import no2 from "../../../assets/icons/outsourcing-sales/no2.png";
import no3 from "../../../assets/icons/outsourcing-sales/no3.png";
import no4 from "../../../assets/icons/outsourcing-sales/no4.png";
import WCItem3SingleCard from "./WCItem3SingleCard";
import Slider from "react-slick";

const items = [
  {
    id: 1,
    title: "Cutting-Edge AI Tools",
    description:
      "Leverage our state-of-the-art AI tools that enhance efficiency and effectiveness in sales processes, providing a technological edge over your competitors.",
    icon: no1,
  },
  {
    id: 2,
    title: "White-Label Solutions",
    description:
      "Our AI tools can be branded and hosted by your company, allowing seamless integration and maintaining your brand’s identity.",
    icon: no2,
  },
  {
    id: 3,
    title: "Streamlined Operations",
    description:
      "By outsourcing sales, you can streamline your operations and focus on what you do best—developing products, improving services, and growing your business.",
    icon: no3,
  },
  {
    id: 4,
    title: "Enhanced Flexibility",
    description:
      "Outsourcing provides the flexibility to quickly adapt to market changes and customer needs without the constraints of managing an in-house sales team.",
    icon: no4,
  },
];

const WCItem3 = () => {
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
      className="bg-bp relative w-full bg-top-right-bottom-left md:bg-top-left-bottom-right bg-[length:180px_180px] md:bg-[length:280px_280px]"
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
                  <WCItem3SingleCard data={item} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="xl:grid grid-cols-2 gap-[16px] hidden xl:inline-block">
            {items.map((item, index) => (
              <WCItem3SingleCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCItem3;
