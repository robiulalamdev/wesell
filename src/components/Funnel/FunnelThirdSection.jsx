import { useNavigate } from "react-router-dom";
import bg from "../../assets/images/funnel/thirdSection/bg.png";
import img1 from "../../assets/images/funnel/thirdSection/img1.png";

import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const FunnelThirdSection = () => {
  const navigate = useNavigate();
  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("FunnelThirdSection", 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="FunnelThirdSection"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      className="pt-[41px] md:pt-[61px] pb-[100px] md:pb-[139px]"
      style={{
        y,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
        <img
          src={img1}
          alt=""
          className="max-w-[1185px] w-full object-contain mx-auto"
        />
        <button
          onClick={() => {
            window.location.href = "/funnel?pos=appointment";
          }}
          className="w-[216px] h-[69px] md:w-[288px] md:h-[93px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[20px] md:text-[24px] font-semibold leading-normal mt-[35px] md:mt-[45px] block mx-auto"
        >
          Start Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FunnelThirdSection;
