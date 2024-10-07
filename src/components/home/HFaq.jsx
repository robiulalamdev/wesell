import { ANIMATED_IMAGES } from "../../utils/data/global";
import arrow from "../../assets/images/home/faq/downArrow.png";
import bottomBg from "../../assets/images/home/faq/bottomBg.png";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const faqs = [
  {
    id: 1,
    question:
      "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
    answer: "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
    answer: "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
    answer: "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
    answer: "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
  },
  {
    id: 5,
    question:
      "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
    answer: "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
  },
  {
    id: 6,
    question:
      "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
    answer: "Lorem ipsum dolor sit amet consectetur. Pretium tincidunt sodales",
  },
];

const HFaq = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax effect for Empowering section based on scroll position
  const empoweringProps = useSpring({
    transform: `translateY(${scrollY * -0.3}px)`, // Adjust scroll speed by multiplying scrollY
  });
  return (
    <animated.div
      className="bg-[#000000] relative bottom-[200px] w-full h-full bg-[length:164px_164px] md:bg-[length:379px_379px] pt-[150px] md:pt-[250px]"
      style={{
        ...empoweringProps,
        backgroundImage: `url(${ANIMATED_IMAGES.OPENER_LOADING}), url(${ANIMATED_IMAGES.OPENER_LOADING})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left, top right",
      }}
    >
      <div className="container">
        <h1 className="text-left md:text-center font-bold text-[47.777px] md:text-[128px] font-italic leading-[78.354px] md:leading-[209.92px] uppercase text-primary font-obviously-wide">
          FAQ
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="0.1"
          className="grid grid-cols-1 gap-[14.93px] md:gap-[40px] max-w-[860px] mx-auto mt-[26px] md:mt-[70px] pb-[150px]"
        >
          {faqs.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              key={index}
              className="bg-[#F9F9F9] border-[1.866px] md:border-[5px] border-primary rounded-[8.958px] md:rounded-[24px]"
            >
              <div className="flex justify-between items-end">
                <h1 className="flex-grow font-medium text-[#000000] text-[13.437px] md:text-[36px] capitalize font-obviously-wide leading-normal pl-[20px] md:pl-[54px] py-[12px] md:py-[31px]">
                  {item.question}
                </h1>
                <button className="min-w-[20px] max-w-[20px] md:w-[56px] min-h-[20px] max-h-[20px] md:h-[56px] rounded-full mr-[5px] mb-[5px] md:mr-[15px]">
                  <img
                    src={arrow}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div
        className="min-h-[300px] absolute -bottom-[350px] right-0 left-0 w-full"
        style={{
          backgroundImage: `url(${bottomBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div> */}
    </animated.div>
  );
};

export default HFaq;
