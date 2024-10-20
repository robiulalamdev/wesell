import bg from "../../../assets/images/outsourcing-sales/bg.png";
import Header from "../../shared/header/Header";
import img1 from "../../../assets/images/outsourcing-sales/img1.png";
import img2 from "../../../assets/images/outsourcing-sales/img2.png";
import img3 from "../../../assets/images/outsourcing-sales/img3.png";
import img4 from "../../../assets/images/outsourcing-sales/img4.png";
import { useState } from "react";
import rArrow from "../../../assets/icons/outsourcing-sales/rarrow.png";
import lArrow from "../../../assets/icons/outsourcing-sales/larrow.png";
import { ANIMATED_IMAGES } from "../../../utils/data/global";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../../../lib/hooks/useScrollAnimation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Sales Outsourcing",
    description:
      "Sales outsourcing is the practice of hiring a third-party company to handle some or all of your sales activities. This can include tasks such as prospecting for new clients, making sales calls, negotiating deals, and managing customer relationships. Outsourcing sales can be a cost-effective way for a company to improve its sales performance and expand into new markets without having to invest in additional resources or hire new employees. Additionally, outsourcing sales can provide access to specialized knowledge and expertise that may not be available within the company.",
    img1: img1,
    img2: img2,
  },
  {
    id: 2,
    title: "What Are Appointment Setting Services?",
    description:
      "Appointment setting services involve scheduling meetings, consultations, or sales presentations between a business and its prospective clients or customers. This crucial aspect of the sales process includes identifying qualified leads, initiating contact, and arranging appointments to facilitate further discussions or transactions. Appointment setting can be tailored to different business models, such as Business-to-Business (B2B) and Business-to-Consumer (B2C).",
    img1: img3,
    img2: img4,
  },
];

const OutsourcingSalesBanner = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { blurScale } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      blurScale.applyBlurScale("OutsourcingSalesBanner", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="OutsourcingSalesBanner"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`min-h-[1008px] w-full ${
        blurScale.isBlurred ? "blur-sm" : "blur-none"
      }`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <Header />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: blurScale.scale }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden w-full relative bg-[length:280px_280px] md:bg-[length:400px_400px] pb-[200px]"
          style={{
            backgroundImage: `url(${ANIMATED_IMAGES.INFINITY})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
          }}
        >
          <div className="w-full grid grid-cols-2 relative">
            {items.map((item, index) => (
              <div
                key={index}
                className={`mt-[33px] md:mt-[100px] xl:mt-[130px] w-full ease-linear duration-300 ${
                  item.id === step
                    ? "col-span-2"
                    : "absolute !-left-[1200px] container"
                }`}
              >
                <h1
                  className="text-wp text-[24px] md:text-[32px] xl:text-[40px] font-bold font-obviously-wide leading-normal uppercase"
                  style={{
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  {item.title}
                </h1>
                <div className="mt-[57.36px]">
                  <div>
                    <div>
                      <img
                        src={item.img1}
                        alt=""
                        className="max-w-[468px] max-h-[450px] object-contain float-right hidden md:block"
                      />
                      <img
                        src={item.img2}
                        alt=""
                        className="max-w-[200px] max-h-[450px] object-contain float-right md:hidden"
                      />
                      <p
                        className="text-[#C1C1C1] capitalize text-[16px] md:text-[20px] font-normal font-obviously-wide leading-normal"
                        style={{
                          leadingTrim: "both",
                          textEdge: "cap",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => navigate("/funnel")}
                      className="w-[170px] h-[55px] hover:w-[210px] hover:h-[63px] hover:md:w-[320px] hover:md:h-[103px] md:w-[288px] md:h-[93px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-[#540E21] rounded-[8px] md:rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[22px] xl:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[27px] md:mt-[82px]"
                      style={{
                        leadingTrim: "both",
                        textEdge: "cap",
                        fontStyle: "italic",
                      }}
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-end mt-[32px]">
          {step === 1 && (
            <button onClick={() => setStep(2)}>
              <img
                src={rArrow}
                alt=""
                className="w-[53px] h-[48px] object-contain"
              />
            </button>
          )}
          {step === 2 && (
            <button onClick={() => setStep(1)}>
              <img
                src={lArrow}
                alt=""
                className="w-[53px] h-[48px] object-contain"
              />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OutsourcingSalesBanner;
