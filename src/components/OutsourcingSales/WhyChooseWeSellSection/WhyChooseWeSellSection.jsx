import { Carousel } from "@material-tailwind/react";
import rArrow from "../../../assets/icons/outsourcing-sales/rarrow.png";
import lArrow from "../../../assets/icons/outsourcing-sales/larrow.png";
import { useRef } from "react";
import WCItem1 from "./WCItem1";
import WCItem2 from "./WCItem2";
import WCItem3 from "./WCItem3";
import WCItem4 from "./WCItem4";

import useScrollAnimation from "../../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const WhyChooseWeSellSection = () => {
  const nextRef = useRef();
  const preRef = useRef();

  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("WhyChooseWeSellSection", 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="WhyChooseWeSellSection"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="bg-bp relative"
    >
      <Carousel
        prevArrow={({ handlePrev }) => {
          return <button ref={nextRef} onClick={handlePrev}></button>;
        }}
        nextArrow={({ handleNext }) => {
          return <button ref={preRef} onClick={handleNext}></button>;
        }}
        navigation={() => {}}
      >
        <WCItem1 />
        <WCItem2 />
        <WCItem3 />
        <WCItem4 />
      </Carousel>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: inView.isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="container flex justify-end items-center gap-x-[13px]"
      >
        <button onClick={() => nextRef.current.click()} className="">
          <img
            src={lArrow}
            alt=""
            className="w-[53px] h-[48px] object-contain"
          />
        </button>
        <button onClick={() => preRef.current.click()} className="">
          <img
            src={rArrow}
            alt=""
            className="w-[53px] h-[48px] object-contain"
          />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseWeSellSection;
