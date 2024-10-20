import bg from "../../assets/images/lead-generation/companies-work/bg.png";
import animated from "../../assets/images/lead-generation/companies-work/animated.gif";

import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const LGCompaniesWork = () => {
  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("LGCompaniesWork", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="LGCompaniesWork"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      className="min-h-[800px] py-[100px] relative"
      style={{
        y,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full h-full container"
        style={{
          backgroundImage: `url(${animated}), url(${animated})`,
          backgroundPosition: "bottom left, top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "170px",
        }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="pt-[70px] md:pt-[129px] max-w-[786px] mx-auto pb-[100px] md:pb-[117px]"
        >
          <h1 className="text-cmn font-bold text-[#F9F9F9] text-[20px] md:text-[40px] uppercase">
            How Do Lead Generation Outsourcing Companies Work?
          </h1>
          <p className="text-cmn text-[#C1C1C1] capitalize text-[16px] md:text-[20px] mt-[70px] md:mt-[65px]">
            Lead generation outsourcing companies provide a valuable service to
            businesses looking to increase their sales and revenue. B2B lead
            generation outsourcing allows businesses to focus on their key
            strengths and hand the lead generation process to professionals.
            <br /> <br />
            WeSell uses various approaches, such as email marketing campaigns,
            telemarketing, and social media outreach, to generate high-quality
            leads for our clients. With our experience and expertise, we can
            identify potential clients and nurture relationships, increasing the
            likelihood of successful conversions.
            <br /> <br />
            B2B sales lead generation is a critical component of a successful
            sales strategy, and outsourcing this process to WeSell, with our
            best-in-class lead generation processes, can save time and resources
            while delivering significant returns on investment.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LGCompaniesWork;
