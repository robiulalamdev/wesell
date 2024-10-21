import React, { useState } from "react";
import img1 from "../../assets/images/funnel/ready-to-share/img1.png";
import img2 from "../../assets/images/funnel/ready-to-share/img2.png";

import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img2 },
];

const FunnelReadyToShare = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("FunnelReadyToShare", 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="FunnelReadyToShare"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="py-[57px] md:py-[102px]"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: inView.isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="container"
      >
        <div className="max-w-[762px] w-full mx-auto">
          <h1
            data-aos="fade-up"
            className="text-cmn text-white text-[16px] md:text-[36px] font-bold uppercase"
          >
            Ready to Share Opportunities and Lead?
          </h1>
          <p
            data-aos="fade-up"
            className="text-cmn text-[#C1C1C1] text-[13px] md:text-[20px] font-medium capitalize mt-[33px] md:mt-[49px]"
          >
            Join our team and be part of something bigger. We’re not just
            offering jobs—we’re offering the chance to help others while growing
            your own career.
          </p>
        </div>
        <div className="md:mt-[93px]">
          {selectedItem && (
            <img
              src={selectedItem?.img}
              alt=""
              className="w-full h-[665px] rounded-[12.795px] object-cover hidden md:block"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px] mt-[33px]">
            {items.map((item, index) => (
              <img
                onClick={() => setSelectedItem(item)}
                key={index}
                src={item?.img}
                alt=""
                className={`w-full h-[211px] rounded-[4px] cursor-pointer object-cover !border-[3px] ${
                  selectedItem?.id === item?.id
                    ? "border-[#971A53]"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
          <button className="w-[288px] h-[84px] bg-[#971A53] rounded-[13px] p-[3.393px] pb-[8px] mt-[93px] hidden md:block mx-auto">
            <div
              onClick={() => {
                navigate("/funnel");
                window.scrollTo(0, 0);
              }}
              className="bg-[#F9F9F9] w-full h-full flex justify-center items-center rounded-[13px]"
            >
              <h1 className="text-[#1D1D1D] font-semibold text-[22px] font-italic uppercase leading-normal text-center font-obviously-wide">
                Join the Team
              </h1>
            </div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FunnelReadyToShare;
