import Header from "../../shared/header/Header";
import bg from "../../../assets/images/home/banner/bg.png";
import img1 from "../../../assets/images/home/banner/img1.png";
import img2 from "../../../assets/images/home/banner/img2.png";
import { ANIMATED_IMAGES } from "../../../utils/data/global";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../../lib/hooks/useScrollAnimation";

import icon1 from "../../../assets/icons/home/banner/icon1.png";
import icon2 from "../../../assets/icons/home/banner/icon2.png";
import icon3 from "../../../assets/icons/home/banner/icon3.png";
import { useNavigate } from "react-router-dom";

const items = [
  { id: 1, title: "Brand Representation", icon: icon1 },
  { id: 2, title: "Expertise and Specialization", icon: icon2 },
  { id: 3, title: "Cost-Effective and Scalable", icon: icon3 },
];

const Banner = () => {
  const navigate = useNavigate();
  const { blurScale } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      blurScale.applyBlurScale("hbanner", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const texts = [
    "Transform Your Sales Strategy and Unleash Your Entrepreneurial Potential.",
    "Where we dare to sell and empower the next generation of sales leaders and managers. At WeSell,",
    "We transform ambition into success through our comprehensive sales and management training programs.",
  ];

  // State to keep track of the current text index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to automatically cycle through the texts every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div
      id="hbanner"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`overflow-hidden min-h-[800px] pb-[62px] md:pb-[150px] ${
        blurScale.isBlurred ? "blur-sm" : "blur-none"
      }`}
      style={{
        background: `linear-gradient(180deg, rgba(22, 48, 120, 0.00) 35.91%, rgba(22, 48, 120, 0.90) 100%), url(${bg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div
        className="container bg-[length:270px] md:bg-[length:500px] p-0"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.INFINITY})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      >
        <Header />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: blurScale.scale }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div
            data-aos="zoom-out-up"
            data-aos-duration="900"
            className="mt-[32px] md:mt-[100px] max-w-[902px] mx-auto"
          >
            <h1 className="text-[17.844px] md:text-[36px] font-bold leading-normal font-obviously-wide text-[#E4DCDE] font-italic text-center hidden md:block">
              Students, graduates, dreamers—no matter where you start, without
              sales and management, your journey will stall. Learn what every
              successful person knows.
            </h1>
            <motion.h1
              key={currentIndex} // Ensure each new text has a unique key to trigger animation
              initial={{ y: -30, opacity: 0 }} // Start position: slightly above with opacity 0
              animate={{ y: 0, opacity: 1 }} // End position: normal and fully visible
              exit={{ y: 30, opacity: 0 }} // Exit position: below and faded out
              transition={{
                type: "spring", // Use spring for animation type
                stiffness: 1000, // Spring stiffness
                damping: 5, // Spring damping for smooth animation
                duration: 1.0, // Speed of the transition
              }}
              className="min-h-[150px] text-[17.844px] md:text-[36px] font-bold leading-normal font-obviously-wide text-[#E4DCDE] font-italic text-center md:hidden"
            >
              {texts[currentIndex]}
            </motion.h1>

            <Button
              onClick={() => navigate("/funnel")}
              data-aos="fade-up"
              data-aos-duration="900"
              className="shadow-none hover:shadow-none block mx-auto bg-[#0D0D0D] md:bg-[#971A53] w-fit p-0 outline-none text-cmn rounded-[11.82px] border-[2.955px] md:border-[3.393px] border-b-[8px] md:border-b-[11px] border-[#0D0D0D] md:border-[#971A53] text-[20px] md:text-[27.146px] text-black mt-[14px] md:mt-[64px]"
              style={{ fontStyle: "italic" }}
            >
              <div
                onClick={() => navigate("/funnel")}
                className="bg-white outline-none w-[170px] h-[55px] md:w-[288px] md:h-[93px] !rounded-[11.82px] flex justify-center items-center duration-200"
              >
                Start Now
              </div>
            </Button>
          </div>

          <div className="flex justify-between md:justify-center w-full items-center gap-x-[12px] mt-[70px] md:mt-[63px] overflow-hidden">
            <img
              data-aos="fade-right"
              src={img1}
              alt=""
              className="max-w-[85px] sm:max-w-[133px] object-contain w-full md:hidden"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="flex justify-center items-center flex-wrap gap-y-[12px] gap-x-[17.99px] md:gap-y-[17.99px]"
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-[104px] min-h-[116px] md:w-[247px] md:h-[245px] bg-[#0D0D0D] rounded-[11px] md:rounded-[24.25px] p-[4px] pb-[12px]"
                >
                  <div className="bg-[#F9F9F9] rounded-[11px] md:rounded-[24.25px] w-full h-full flex flex-col justify-center items-center gap-y-[7.11px] md:gap-y-[18.75px] py-[12px] px-[8px]">
                    <div className="w-[49px] h-[49px] md:w-[103px] md:h-[103px] flex justify-center items-center bg-primary p-[4px] rounded-full">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h1 className="text-cmn text-[#1D1D1D] text-[9.627px] md:text-[20px] font-raleway font-medium leading-normal capitalize">
                      {item.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <img
              data-aos="fade-left"
              src={img2}
              alt=""
              className="max-w-[90px] sm:max-w-[139px] object-contain w-full md:hidden"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
