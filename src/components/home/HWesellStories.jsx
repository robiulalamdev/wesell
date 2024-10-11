import { Carousel } from "@material-tailwind/react";
import bg from "../../assets/images/home/stories/bg.png";
import person from "../../assets/images/home/stories/person.png";
import { ANIMATED_IMAGES } from "../../utils/data/global";
import {
  I_HStories_Left_cot,
  I_HStories_Right_cot,
} from "../../utils/icons/homeIcons";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const items = [
  { id: 1, name: "Wesell stories", image: person },
  { id: 2, name: "Wesell stories", image: person },
  { id: 3, name: "Wesell stories", image: person },
  { id: 4, name: "Wesell stories", image: person },
];

const HWesellStories = () => {
  const { inView } = useScrollAnimation();
  const container = useRef();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -600]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("HWesellStoriessection", 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="HWesellStoriessection"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.5 }}
      ref={container}
      className="min-h-[800px] pb-[100px]"
      style={{
        y,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: inView.isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div
          className="w-full h-full bg-[length:164px_164px] md:bg-[length:379px_379px] !pt-[150px]"
          style={{
            backgroundImage: `url(${ANIMATED_IMAGES.LAMP}), url(${ANIMATED_IMAGES.LAMP})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom left, top right",
          }}
        >
          <div className="pb-[78px]">
            <Carousel
              autoplay={true}
              loop={true}
              nextArrow={() => {}}
              prevArrow={() => {}}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <button
                      key={i}
                      className={`block h-[14px] w-[14px] rounded-full transition-all ${
                        activeIndex === i
                          ? "bg-primary"
                          : "bg-transparent border-[1px] border-primary"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
              className=""
            >
              {items.map((item, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  key={index}
                  className="relative h-full w-full container !mb-[100px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[124px] md:w-[222px] h-[124px] md:h-[222px] rounded-full object-cover mx-auto"
                  />
                  <h1 className="text-[16px] md:text-[21.25px] text-primary text-center leading-[32px] font-obviously-wide mt-[20px] md:mt-[52px]">
                    Wesell stories
                  </h1>

                  <div className="flex justify-center items-start max-w-[700px] mx-auto gap-[10px] md:gap-[17px] mt-[31px]">
                    {I_HStories_Left_cot}
                    <p className="text-white md:text-[#C1C1C1] text-[16.667px] md:text-[32px] font-italic font-bold text-center font-obviously-wide">
                      Lorem ipsum dolor sit amet consectetur. Augue nisi neque
                      senectus lectus.
                    </p>
                    {I_HStories_Right_cot}
                  </div>

                  <h1 className="text-[24px] text-[#F9F9F9] font-medium font-obviously-wide text-center leading-[24px] mt-[36px]">
                    Bryce Wong
                  </h1>
                  <p className="text-[14px] text-[#F9F9F9] font-obviously-wide text-center leading-[16.8px] mt-[22px] md:mt-[36px] max-w-[400px] mx-auto">
                    Nunc mi id cursus facilisis praesent quam adipiscing.
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="w-full md:flex justify-center gap-[22px] container !mt-[78px] hidden md:inline-block">
          <div className="max-w-[579px] w-full bg-primary rounded-[28px] p-[7px] pb-[16px]">
            <div className="w-full h-full bg-[#F9F9F9] rounded-[28px] pt-[77px] pb-[60px] px-[44px]">
              <h1 className="text-cmn text-[#1D1D1D] text-[24px] font-medium uppercase">
                WeSell Watch
              </h1>
              <p className="text-cmn text-[#1D1D1D] text-[20px] leading-normal capitalize mt-[23px]">
                Symbolize your self-discipline and personal responsibility with
                our signature old-school Timex digital watch.
              </p>
            </div>
          </div>
          <div className="max-w-[579px] w-full bg-primary rounded-[28px] p-[7px] pb-[16px]">
            <div className="w-full h-full bg-[#F9F9F9] rounded-[28px] pt-[77px] pb-[60px] px-[44px]">
              <h1 className="text-cmn text-[#1D1D1D] text-[24px] font-medium uppercase">
                WeSell Wristband
              </h1>
              <p className="text-cmn text-[#1D1D1D] text-[20px] leading-normal capitalize mt-[23px]">
                Represent teamwork and collaboration with a wristband that
                evolves as you achieve greater levels of success.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HWesellStories;
