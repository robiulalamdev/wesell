import { useEffect, useRef } from "react";
import useScrollAnimation from "../../../lib/hooks/useScrollAnimation";
import { ILOGO } from "../../../utils/icons/global";
import KeepInTouch from "../../OutsourcingSales/keepInTouch/KeepInTouch";
import { useScroll, useTransform, motion } from "framer-motion";

const Footer = () => {
  const { inView } = useScrollAnimation();
  const container = useRef();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("Footersection", 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <KeepInTouch />

      <motion.div
        id="Footersection"
        initial={{ scale: 0.8 }}
        animate={{
          scale: 1,
        }}
        transition={{ duration: 0.2 }}
        ref={container}
        style={{ y }}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          className="container !pt-[100px]"
        >
          <div className="flex flex-col items-center">
            <div className="max-w-[55px] md:max-w-[127px]">{ILOGO}</div>
            <h1
              className="text-wp text-[20.695px] md:text-[35.385px] xl:text-[47.385px] font-medium font-obviously-wide leading-normal uppercase mt-[10px] md:mt-[23.8px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              wesell
            </h1>

            <div>
              <p
                className="max-w-[569px] mx-auto text-wp md:text-[#C1C1C1] text-[7.977px] md:text-[16px] font-medium text-center font-obviously-wide leading-normal uppercase mt-[45.21px] md:mt-[88.54px]"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                }}
              >
                Every self-employed person has something in common: they all
                know how to sell. In the future, selling will be the most
                important skill for any entrepreneur. At WeSell, we ensure you
                master this crucial skill to pave the way for your
                entrepreneurial success
              </p>
              <p
                className="text-white md:text-wp text-[10px] md:text-[20px] text-center font-obviously-wide leading-normal md:leading-[14.236px] uppercase mt-[55px] md:mt-[88px] pb-[10px] md:pb-[23px]"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                }}
              >
                Copyright @ All rights reserved to WeSell Private Limited
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
