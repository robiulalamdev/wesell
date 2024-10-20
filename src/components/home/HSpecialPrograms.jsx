import React, { useEffect, useRef } from "react";
import { ANIMATED_IMAGES } from "../../utils/data/global";
import Slider from "react-slick";
import { useScroll, useTransform, motion } from "framer-motion";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";

const items = [
  {
    id: 1,
    title: "WeSell Watch",
    description:
      "Symbolize your self-discipline and personal responsibility with our signature old-school Timex digital watch.",
  },
  {
    id: 2,
    title: "WeSell Watch",
    description:
      "Symbolize your self-discipline and personal responsibility with our signature old-school Timex digital watch.",
  },
  {
    id: 3,
    title: "WeSell Watch",
    description:
      "Symbolize your self-discipline and personal responsibility with our signature old-school Timex digital watch.",
  },
];

const HSpecialPrograms = () => {
  const { inView } = useScrollAnimation();
  const container = useRef();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("hspecialprograme", 65);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
  };
  return (
    <motion.div
      id="hspecialprograme"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2px)",
      }}
      transition={{ duration: 0.2 }}
      ref={container}
      style={{
        y,
      }}
      className="bg-[#1D1D1D] pt-[46px] pb-[80px] md:hidden overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: inView.isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        data-aos="fade-up"
        data-aos-duration="700"
        className="container pt-[63px] pb-[70px]"
      >
        <h1 className="text-cmn text-[#F9F9F9] text-[24px] font-bold uppercase leading-normal">
          Special Programs
        </h1>
        <p className="text-cmn text-[#C1C1C1] text-[16px] font-medium capitalize mt-[38px]">
          At WeSell, we believe that every self-employed person has one thing in
          common: the ability to sell and manage effectively. In the future,
          these skills will be the most important for any entrepreneur. With the
          world changing and AI reshaping the business landscape, mastering
          these arts is more critical than ever. Join us and dare to sell and
          manage, and build your future with WeSell.
        </p>
        <img
          src={ANIMATED_IMAGES.REVEAL_LOADING}
          alt=""
          className="max-w-[144px] w-full object-contain mx-auto mt-[29px]"
        />

        <div className="mt-[44px]">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="px-[6px]">
                <div className="w-full max-h-fit min-h-[139px] bg-primary p-[3px] pb-[13px] rounded-[15.552px]">
                  <div className="w-full h-full bg-white rounded-[15.552px] pt-[40px] pb-[28px] px-[8px]">
                    <h1 className="text-cmn text-[#1D1D1D] text-[18px] uppercase font-medium leading-normal">
                      {item.title}
                    </h1>
                    <p className="text-cmn text-[#1D1D1D] text-[14px] font-normal leading-normal capitalize mt-[25px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HSpecialPrograms;
