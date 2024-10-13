import { ANIMATED_IMAGES } from "../../utils/data/global";
import arrow from "../../assets/images/home/faq/downArrow.png";
// import bottomBg from "../../assets/images/home/faq/bottomBg.png";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

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
  const { inView } = useScrollAnimation();
  const container = useRef();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("HFaqsection", 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selectedFaq, setSelectedFaq] = useState(null);
  return (
    <motion.div
      id="HFaqsection"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      ref={container}
      className="bg-[#000000] relative w-full h-full bg-[length:164px_164px] md:bg-[length:379px_379px] pt-[100px]"
      style={{
        y,
        backgroundImage: `url(${ANIMATED_IMAGES.OPENER_LOADING}), url(${ANIMATED_IMAGES.OPENER_LOADING})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left, top right",
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: inView.isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="container"
      >
        <h1 className="text-left md:text-center font-bold text-[47.777px] md:text-[128px] font-italic leading-[78.354px] md:leading-[209.92px] uppercase text-primary font-obviously-wide">
          FAQ
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-[14.93px] md:gap-[40px] max-w-[860px] mx-auto mt-[26px] md:mt-[70px]"
        >
          {faqs.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              key={index}
              className="bg-[#F9F9F9] border-[1.866px] md:border-[5px] border-primary rounded-[8.958px] md:rounded-[24px]"
            >
              <div className="flex justify-between items-end">
                <h1 className="flex-grow font-medium text-[#000000] text-[15px] md:text-[36px] capitalize font-obviously-wide leading-normal pl-[20px] md:pl-[54px] py-[12px] md:py-[31px]">
                  {item.question}
                </h1>
                <button
                  onClick={() =>
                    selectedFaq?.id === item?.id
                      ? setSelectedFaq(null)
                      : setSelectedFaq(item)
                  }
                  className="min-w-[20px] max-w-[20px] md:max-w-[56px] min-h-[20px] max-h-[20px] md:max-h-[56px] rounded-full mr-[5px] !mb-[10px] md:mr-[15px]"
                >
                  <img src={arrow} alt="" className="w-full h-full" />
                </button>
              </div>
              {item?.id === selectedFaq?.id && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="border-t-[3px] border-primary"
                  >
                    <h1 className="flex-grow font-medium text-[#000000] text-[13.437px] md:text-[36px] capitalize font-obviously-wide leading-normal pl-[20px] md:pl-[54px] py-[12px] md:py-[31px]">
                      {selectedFaq?.answer}
                    </h1>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* <div
        className="min-h-[300px] absolute -bottom-[350px] right-0 left-0 w-full"
        style={{
          backgroundImage: `url(${bottomBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div> */}
    </motion.div>
  );
};

export default HFaq;
