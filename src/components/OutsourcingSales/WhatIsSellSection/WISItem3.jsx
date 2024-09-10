import WCBackElement from "./WCBackElement";
import no1 from "../../../assets/icons/outsourcing-sales/no1.png";
import no2 from "../../../assets/icons/outsourcing-sales/no2.png";
import no3 from "../../../assets/icons/outsourcing-sales/no3.png";
import no4 from "../../../assets/icons/outsourcing-sales/no4.png";
import WCItem3SingleCard from "./WCItem3SingleCard";
import Slider from "react-slick";

const items = [
  {
    id: 1,
    title: "Customization and Control",
    description:
      "If your business requires a high level of customization in its sales strategies and you want to maintain tight control over the sales process to ensure it aligns closely with your brand’s values and messaging, co-sourcing is a suitable choice.",
    icon: no1,
  },
  {
    id: 2,
    title: "Unique or Complex Sales Requirements",
    description:
      "If your sales process is intricate or requires a deep understanding of your industry and products, co-sourcing can provide the expertise and adaptability needed to address these unique challenges.",
    icon: no2,
  },
  {
    id: 3,
    title: "Long-Term Strategic Partnerships",
    description:
      "If you’re looking for a long-term, collaborative partnership with a sales organization that can become an extension of your internal team, co-sourcing sales is a suitable choice. This can foster a deep understanding of your business and its goals.",
    icon: no3,
  },
  {
    id: 4,
    title: "Knowledge Transfer and Skill Development",
    description:
      "Co-sourcing partners can facilitate knowledge transfer and skill development within your internal team, helping your employees acquire valuable sales skills and experience.",
    icon: no4,
  },
];

const WISItem3 = () => {
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
  );
};

export default WISItem3;
