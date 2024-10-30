import { useNavigate } from "react-router-dom";
import no1 from "../../assets/icons/outsourcing-sales/no1.png";
import no2 from "../../assets/icons/outsourcing-sales/no2.png";
import no3 from "../../assets/icons/outsourcing-sales/no3.png";
import no4 from "../../assets/icons/outsourcing-sales/no4.png";

import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const items = [
  { id: 1, title: "Leadership and Team Management", icon: no1 },
  { id: 2, title: "Project Management Excellence", icon: no2 },
  { id: 3, title: "Strategic Planning and Execution", icon: no3 },
  { id: 4, title: "Financial Acumen for Managers", icon: no4 },
];

const AManagementPrograms = () => {
  const navigate = useNavigate();
  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("AManagementPrograms", 75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="AManagementPrograms"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="bg-[#971A53] relative bottom-[5px] pb-[65px] md:pb-[100px]"
    >
      <div className="container">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <h1
            data-aos="fade-down"
            className="text-cmn text-[#FCCF3D] text-[24px] md:text-[40px] font-bold uppercase text-left md:text-center"
          >
            Management Programs
          </h1>
          <p
            data-aos="fade-up"
            className="text-cmn text-[#C1C1C1] text-[16px] md:text-[24px] capitalize text-left md:text-center mt-[30px] md:mt-[60px]"
          >
            We provide hands-on training, real-world simulations, and
            role-playing exercises to build your confidence and skills under
            pressure. Our unique approach integrates advanced AI tools to ensure
            you are working smart and staying ahead of the competition.
          </p>

          <div className="grid grid-cols-1 gap-[19px] md:gap-[33px] mt-[30px] md:mt-[60px] max-w-[980px] mx-auto">
            {items.map((item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="rounded-[17.094px] md:rounded-[24px] bg-[#202020] pb-[7px] md:pb-[11px]"
              >
                <div className="bg-[#F9F9F9] flex items-center gap-[23px] md:gap-[40px] rounded-[17.094px] md:rounded-[24px] border-primary border-[3.561px] md:border-[5px] px-[17px] md:px-[35px] xl:px-[50px] py-[18px] xl:py-[26px]">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-[53px] md:w-[75px] h-[53px] md:h-[75px] rounded-full"
                  />
                  <h1 className="text-cmn text-left text-[#000000] text-[16px] md:text-[22px] xl:text-[28px] font-medium capitalize">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/funnel?pos=appointment")}
            className="max-w-[318px] w-full h-[74px] md:w-[364px] md:h-[84px] bg-[#112661] rounded-[11.895px] md:rounded-[13px] p-[2.974px] md:p-[3.353px] pb-[8px] md:pb-[11px] mt-[30px] md:mt-[60px] mx-auto block"
          >
            <div className="w-full h-full bg-[#F9F9F9] rounded-[11.895px] md:rounded-[13px] flex justify-center items-center">
              <h1 className="text-cmn text-[#000000] text-[20px] md:text-[27px] font-bold uppercase font-italic">
                enroll now
              </h1>
            </div>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AManagementPrograms;
