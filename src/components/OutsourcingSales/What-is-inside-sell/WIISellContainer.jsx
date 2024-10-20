import bg from "../../../assets/images/outsourcing-sales/what-is-inside-sell/bg.png";
import rArrow from "../../../assets/icons/outsourcing-sales/rarrow.png";
import lArrow from "../../../assets/icons/outsourcing-sales/larrow.png";
import WIISell1 from "./WIISell1";
import WCBackElement from "../WhyChooseWeSellSection/WCBackElement";
import { useState } from "react";
import WIISell2 from "./WIISell2";
import WIISell3 from "./WIISell3";

import useScrollAnimation from "../../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const WIISellContainer = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("WIISellContainer", 75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="WIISellContainer"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      className="min-h-[800px] w-full h-full pb-[60px] pt-[40px]"
      style={{
        y,
        background: `linear-gradient(180deg, rgba(17, 39, 98, 0.00) 52.38%, rgba(17, 39, 98, 0.90) 97.05%), url(${bg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: inView.isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="container !pt-[35px] md:!pt-[70px]"
      >
        <WCBackElement className="md:hidden" />
        <div className="mt-[35px]">
          {step === 1 && <WIISell1 />}
          {step === 2 && <WIISell2 />}
          {step === 3 && <WIISell3 />}
        </div>
        <div className="flex justify-end gap-x-[13px] mt-[32px]">
          <button onClick={() => handlePrev()} className="">
            <img
              src={lArrow}
              alt=""
              className="w-[53px] h-[48px] object-contain"
            />
          </button>
          <button onClick={() => handleNext()} className="">
            <img
              src={rArrow}
              alt=""
              className="w-[53px] h-[48px] object-contain"
            />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WIISellContainer;
