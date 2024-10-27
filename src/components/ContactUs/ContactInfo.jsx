import { ANIMATED_IMAGES } from "../../utils/data/global";

import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const ContactInfo = () => {
  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("ContactInfo", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="ContactInfo"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="bg-[#0b0b0b] pt-[100px]"
    >
      <div
        className="container min-h-[600px] bg-[length:220px_220px] w-full h-full flex justify-center items-center !pt-[100px]"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.REVEAL_LOADING}), url(${ANIMATED_IMAGES.REVEAL_LOADING})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left, bottom right",
        }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="max-w-[1057px] w-full max-h-fit mx-auto rounded-[28.8px] bg-primary p-[7.2px] pb-[23px]"
        >
          <div className="bg-[#F9F9F9] w-full h-full grid lg:grid-cols-2 gap-[28px] rounded-[28.8px] px-[15px] md:px-[44px] py-[40px] md:py-[112px]">
            <div>
              <h1 className="text-cmn text-left text-[#000000] text-[20px] md:text-[24px] font-semibold mb-[28px] md:mb-[33px]">
                VISITING ADDRESS
              </h1>
              <p className="text-[#000000] text-[16px] md:text-[20px] leading-[23.36px] md:leading-[29.2px] font-obviously-wide">
                WeSell Inc.
              </p>
              <p className="text-[#000000] text-[16px] md:text-[20px] leading-[23.36px] md:leading-[29.2px] font-obviously-wide">
                111 Colonade Rd K2E ZM3
              </p>
              <p className="text-[#000000] text-[16px] md:text-[20px] leading-[23.36px] md:leading-[29.2px] font-obviously-wide">
                Ottawa, ON
              </p>
              {/* <p className="text-[#000000] text-[16px] md:text-[20px] leading-[23.36px] md:leading-[29.2px] font-obviously-wide">
                60549 Frankfurt Airport
              </p> */}
            </div>
            <div>
              <h1 className="text-cmn text-left text-[#000000] text-[20px] md:text-[24px] font-semibold mb-[28px] md:mb-[33px]">
                CONTACT INFO
              </h1>
              {/* <div className="flex flex-col md:flex-row gap-x-[4px] md:gap-x-[20px]">
                <h1 className="w-[100px] text-black text-[16px] md:text-[20px] font-bold leading-[36.64px] font-obviously-wide all_break">
                  Phone
                </h1>
                <p className="text-black text-[16px] md:text-[20px] leading-[36.64px] font-obviously-wide">
                  +49 (0) 69 8088 3729
                </p>
              </div> */}
              <div className="flex flex-col md:flex-row gap-x-[4px] md:gap-x-[20px]">
                <h1 className="w-[100px] text-black text-[16px] md:text-[20px] font-bold leading-[36.64px] font-obviously-wide text-nowrap">
                  Email
                </h1>
                <p className="text-black text-[16px] md:text-[20px] leading-[36.64px] font-obviously-wide all_break">
                  admin@wesellconsulting.ca
                </p>
              </div>
              {/* <div className="flex flex-col md:flex-row gap-x-[4px] md:gap-x-[20px]">
                <h1 className="w-[100px] text-black text-[16px] md:text-[20px] font-bold leading-[36.64px] font-obviously-wide all_break">
                  Website
                </h1>
                <p className="text-black text-[16px] md:text-[20px] leading-[36.64px] font-obviously-wide">
                  www.websie wesell.com
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-x-[4px] md:gap-x-[20px]">
                <h1 className="w-[100px] text-black text-[16px] md:text-[20px] font-bold leading-[36.64px] font-obviously-wide all_break">
                  Open
                </h1>
                <p className="text-black text-[16px] md:text-[20px] leading-[36.64px] font-obviously-wide">
                  Monday - Friday, 8-17h
                </p>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
