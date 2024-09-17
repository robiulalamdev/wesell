import animation from "../../../assets/images/outsourcing-sales/what-is-outside-sale/animation.gif";
import Slider from "react-slick";

const items = [
  {
    id: 1,
    title: "Tailored Team Size",
    description:
      "We determine the optimal size of your sales team based on your business needs and goals.",
  },
  {
    id: 2,
    title: "Defined Roles",
    description:
      "Clear roles and responsibilities are established for each team member to ensure efficiency and effectiveness.",
  },
  {
    id: 3,
    title: "Top-Tier Talent",
    description:
      "We source and hire sales representatives with the necessary skills and experience,",
  },
  {
    id: 4,
    title: "Experienced Professionals",
    description:
      "By outsourcing to WeSell, you gain access to seasoned sales professionals",
  },
  {
    id: 5,
    title: "Comprehensive Training",
    description:
      "Ongoing training ensures that your sales team is equipped with the latest tools and strategies.",
  },
  {
    id: 6,
    title: "Continuous Development",
    description:
      "We provide continuous support and development to keep your sales team at the forefront of their industry.",
  },
];

const WIOSales2 = () => {
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
    <div
      className="container"
      style={{
        backgroundImage: `url(${animation})`,
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "186px",
      }}
    >
      <div className="max-w-[874px] mx-auto">
        <h1 className="text-cmn font-bold text-[24px] md:text-[48px] leading-normal uppercase text-[#F9F9F9] text-center">
          What Is{" "}
          <span className="text-primary">
            Outside <br /> Sales?
          </span>
        </h1>

        <div className="pt-[46px] md:pt-[64px] max-w-[1010px] mx-auto">
          <div className="md:hidden">
            <Slider {...settings}>
              {items.map((item, index) => (
                <div key={index} className="px-[12px]">
                  <div className="bg-white border-[6.062px] border-b-[14px] border-primary rounded-[24.247px] flex flex-col justify-center items-center gap-[30px] pt-[26px] pb-[36px] px-[12px]">
                    <h1 className="text-cmn text-center text-[#0B0B0B] text-[24px] font-medium leading-normal capitalize font-obviously-wide">
                      {item.title}
                    </h1>
                    <p className="text-cmn text-[18px] leading-normal text-[#0B0B0B] capitalize text-center mt-[41px]">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:grid grid-cols-2 xl:grid-cols-3 gap-[19px] hidden md:inline-block">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white border-[6.062px] border-b-[14px] border-primary rounded-[24.247px] flex flex-col justify-center items-center gap-[30px] pt-[26px] pb-[36px] px-[12px]"
              >
                <h1 className="text-cmn text-center text-[#0B0B0B] text-[24px] font-medium leading-normal capitalize font-obviously-wide">
                  {item.title}
                </h1>
                <p className="text-cmn text-[18px] leading-normal text-[#0B0B0B] capitalize text-center mt-[41px]">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIOSales2;
