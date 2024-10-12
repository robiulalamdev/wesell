// import bg from "../../assets/images/home/career-opportunities/bg.png";
import no1 from "../../assets/icons/outsourcing-sales/no1.png";
import no2 from "../../assets/icons/outsourcing-sales/no2.png";
import no3 from "../../assets/icons/outsourcing-sales/no3.png";
import no4 from "../../assets/icons/outsourcing-sales/no4.png";
import { useScroll, motion, useTransform } from "framer-motion";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useEffect } from "react";

const items = [
  { id: 1, title: "Access to high-end vehicles", icon: no1 },
  { id: 2, title: "Luxury Airbnb properties", icon: no2 },
  { id: 3, title: "Advanced sales  management tools", icon: no3 },
  { id: 4, title: " commission-based earnings", icon: no4 },
];

const HCareerOpportunities = () => {
  const { inView } = useScrollAnimation();
  const { scrollY } = useScroll(); // Get scrollY value
  const y = useTransform(scrollY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("hCareerOpportunities", 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getInitialAnimation = (index) => {
    if (index === 0) {
      return { x: -100 }; // "fade-right" equivalent
    } else if (index === 1) {
      return { x: 100 }; // "fade-left" equivalent
    } else {
      return { y: 20 }; // "fade-in" equivalent for other indexes
    }
  };

  return (
    <motion.div
      id="hCareerOpportunities"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="w-full min-h-[800px] relative bg-[#971A53] !pt-[100px] !pb-[150px]"
    >
      <div
        className=""
        // style={{
        //   backgroundImage: `url(${bg})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="container"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <h1 className="text-cmn text-[24px] md:text-[40px] font-bold text-primary leading-normal uppercase font-italic">
              Career Opportunities
            </h1>

            <p className="text-cmn text-white md:text-[#C1C1C1] text-[16px] md:text-[24px] font-medium capitalize mt-[38px] md:mt-[50px] max-w-[816px] mx-auto">
              WeSell offers a clear path for career growth, with opportunities
              for advancement and leadership roles. Our placement services
              position you at the forefront of sales and management innovation,
              and our Business Incubator Program supports aspiring entrepreneurs
              in developing and launching their ventures.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-y-[22px] md:gap-y-[50px] gap-x-[21px] mt-[122px]">
            {items.map((item, index) => (
              <motion.div
                initial={getInitialAnimation()}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.4 }}
                key={index}
                className="w-full h-full bg-[#0D0D0D] p-[5px] pb-[16px] rounded-[28px]"
              >
                <div className="w-full h-full bg-white rounded-[28px] py-[37px] md:py-[48px] px-[19px] md:px-[75px]">
                  <img
                    src={item.icon}
                    alt=""
                    className="max-w-[62px] md:max-w-[100px] w-full object-contain mx-auto"
                  />
                  <h1 className="text-cmn text-[#1D1D1D] text-[24px] md:text-[40px] uppercase font-semibold leading-normal font-italic mt-[55px]">
                    {item.title}
                  </h1>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HCareerOpportunities;
