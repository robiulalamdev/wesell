import WCBackElement from "../WhyChooseWeSellSection/WCBackElement";
import no1 from "../../../assets/icons/outsourcing-sales/no1.png";
import no2 from "../../../assets/icons/outsourcing-sales/no2.png";
import no3 from "../../../assets/icons/outsourcing-sales/no3.png";
import no4 from "../../../assets/icons/outsourcing-sales/no4.png";
import Slider from "react-slick";
import WISItem3SingleCard from "./WISItem3SingleCard";

const items = [
  {
    id: 1,
    title: "Cost Efficiency",
    description:
      "If your business’s primary focus is on cost-saving and reducing operational expenses, outsourcing may be a more cost-effective option. You pay for specific services without having to maintain an in-house sales team.",
    icon: no1,
  },
  {
    id: 2,
    title: "Scalability and Flexibility",
    description:
      "Outsourcing provides flexibility, making it easier to scale your sales team up or down in response to changes in demand or market conditions. This adaptability can be valuable in rapidly changing markets.",
    icon: no2,
  },
  {
    id: 3,
    title: "Access to Specialized Expertise",
    description:
      "When your business lacks in-house sales expertise or requires access to specialized skills and industry knowledge, outsourcing can provide your business with access to a dedicated and experienced sales workforce.",
    icon: no3,
  },
  {
    id: 4,
    title: "Focus on Core Competencies",
    description:
      "When your internal team needs to concentrate on core business functions like product development, customer support, or strategic planning, outsourcing allows you to delegate sales responsibilities to external experts.",
    icon: no4,
  },
];

const WISItem4 = () => {
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
    <div className="container ">
      <WCBackElement className="md:hidden pt-[70px]" />
      <h1
        className="text-primary text-[20px] md:text-[40px] text-center font-semibold font-obviously-wide leading-normal md:uppercase capitalize"
        style={{
          leadingTrim: "both",
          textEdge: "cap",
        }}
      >
        Outsourcing Sales
      </h1>
      <div className="pt-[79px] md:pt-[86px] max-w-[1010px] mx-auto">
        <div className="xl:hidden">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="">
                <WISItem3SingleCard data={item} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="xl:grid grid-cols-2 gap-[16px] hidden xl:inline-block">
          {items.map((item, index) => (
            <WISItem3SingleCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WISItem4;
