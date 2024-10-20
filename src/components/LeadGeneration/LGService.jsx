import animated from "../../assets/images/lead-generation/service/animated.gif";

import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const LGService = () => {
  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("LGService", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="LGService"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="bg-[#0b0b0b]"
    >
      <div
        className="container"
        style={{
          backgroundImage: `url(${animated}), url(${animated})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "220px",
        }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="pt-[70px] md:pt-[102px] max-w-[786px] mx-auto"
        >
          <h1
            data-aos="fade-up"
            className="text-cmn font-bold text-[#F9F9F9] text-[20px] md:text-[40px] uppercase"
          >
            B2B Lead Generation Outsourcing & Services
          </h1>
          <div className="mt-[70px] md:mt-[65px]">
            <p
              data-aos="fade-right"
              className="text-cmn text-[#C1C1C1] capitalize text-[16px] md:text-[20px]"
            >
              Lead generation outsourcing has become increasingly popular in
              recent years. By partnering with WeSell for outsourced lead
              generation services, businesses can focus on their core
              competencies while letting experts handle the complex and
              time-consuming task of generating leads. This helps companies
              prioritize other critical tasks while benefiting from specialized
              lead generation strategies. <br /> <br />
            </p>
            <p
              data-aos="fade-left"
              className="text-cmn text-[#C1C1C1] capitalize text-[16px] md:text-[20px]"
            >
              Outsourcing B2B lead generation can also provide a cost-effective
              solution, eliminating the need to hire and train an in-house team,
              which can be expensive and time-consuming. Additionally,
              outsourcing allows companies to access a pool of experienced
              professionals with the skills and tools necessary to identify,
              qualify, and nurture leads effectively. This results in
              higher-quality leads, more efficient lead-generation processes,
              and ultimately increased revenue. With B2B lead generation
              outsourcing, businesses can free up resources, streamline their
              operations, and focus on driving growth.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="w-[170px] h-[55px] hover:w-[210px] hover:h-[63px] hover:md:w-[320px] hover:md:h-[103px] md:w-[288px] md:h-[93px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[22px] xl:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[36px] md:mt-[75px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Start Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LGService;
