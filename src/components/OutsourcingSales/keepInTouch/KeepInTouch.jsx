import {
  IKeep_In_Touch_HR,
  IKeep_In_Touch_HR_bottm,
} from "../../../utils/icons/outsourcingSalesIcons";
import hrBg from "../../../assets/images/outsourcing-sales/keep-in-touch/hr.gif";
import useScrollAnimation from "../../../lib/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const KeepInTouch = () => {
  const { inView } = useScrollAnimation();
  const container = useRef();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -600]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("KeepInTouchsection", 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="KeepInTouchsection"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.5 }}
      ref={container}
      style={{ y }}
      className="bg-[#971A53] pt-[100px] pb-[100px] w-full"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: inView.isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {/* <div className="relative w-full max-h-[200px]">
            {IKeep_In_Touch_HR}
          </div> */}
        <div className="w-full">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="0.1"
            className="container"
          >
            <h1
              className="text-wp text-[20px] md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[64px] text-center font-bold font-obviously-wide leading-normal uppercase"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Keep In Touch
            </h1>
            <p
              className="text-white md:text-[#C1C1C1] text-[14px] md:text-[24px] text-center font-normal font-obviously-wide leading-normal uppercase mt-[38px] md:mt-[55px] max-w-[612px] mx-auto"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Morbi velit odio mollis
              volutpat.
            </p>

            <div className="max-w-[1182px] mx-auto h-[92px] md:h-[212px] bg-[#111111] rounded-[13px] md:rounded-[28.8px] mt-[24px] md:mt-[77px] pb-[6px] md:pb-[11px]">
              <div className="flex justify-between items-center bg-[#F9F9F9] w-full h-full rounded-[13px] md:rounded-[28.8px] px-[19px] border-[3.452px] md:border-[7.2px] border-[#111111]">
                <input
                  type="email"
                  placeholder="Enter E.mail"
                  className="flex-grow w-full h-full outline-none focus:outline-none focus:bg-transparent bg-transparent text-[#1D1D1D] placeholder:text-[#1D1D1D] placeholder:text-[14px] text-[14px] md:placeholder:text-[36px] md:text-[36px] !font-bold placeholder:font-bold font-obviously-wide leading-normal capitalize"
                  style={{
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontStyle: "italic",
                  }}
                />
                <button className="w-full max-w-[139px] h-[59px] md:max-w-[359px] md:h-[139px] bg-[#111111] rounded-[13px] md:rounded-[28.8px] pb-[3px] md:pb-[6px]">
                  <div className="bg-primary w-full h-full border-[#111111] border-[2px] md:border-[6px] rounded-[13px] md:rounded-[28.8px] flex justify-center items-center">
                    <h1
                      className="text-[#1D1D1D] text-[14px] md:text-[36px] text-center !font-bold font-obviously-wide leading-normal uppercase"
                      style={{
                        leadingTrim: "both",
                        textEdge: "cap",
                        fontStyle: "italic",
                      }}
                    >
                      Subscribe
                    </h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={hrBg}
          alt=""
          className="w-full relative top-0 md:-top-[130px] max-h-[720px]"
        />
        {/* <div className="absolute -bottom-[50px] md:-bottom-[10px] max-h-[100px] w-full">
            {IKeep_In_Touch_HR_bottm}
          </div> */}
      </motion.div>
    </motion.div>
  );
};

export default KeepInTouch;
