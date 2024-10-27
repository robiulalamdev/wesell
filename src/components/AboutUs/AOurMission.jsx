import { ANIMATED_IMAGES } from "../../utils/data/global";
import bottomBg from "../../assets/images/about-us/our-mission/bottombg.png";
import img1 from "../../assets/images/about-us/our-mission/img1.png";
import img2 from "../../assets/images/about-us/our-mission/img2.png";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AOurMission = () => {
  const navigate = useNavigate();
  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("AOurMission", 75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="AOurMission"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="bg-[#1D1D1D]"
    >
      <div
        className="bg-[length:214px] md:bg-[length:399px] pt-[49px] md:pt-[104px] pb-[147px]"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.REVEAL_LOADING})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="container "
        >
          <div className="">
            <div
              className="h-[127px] flex justify-center items-center bg-[length:116px_116px] md:bg-[length:127px_127px]"
              style={{
                backgroundImage: `url(${ANIMATED_IMAGES.REVEAL_LOADING}), url(${ANIMATED_IMAGES.REVEAL_LOADING})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left, top right",
              }}
            >
              <h1
                data-aos="fade-up"
                className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] font-bold uppercase leading-normal"
              >
                Our Mission
              </h1>
            </div>
            <p
              data-aos="fade-up"
              className="text-cmn text-[#C1C1C1] text-left md:text-center text-[20px] md:text-[24px] font-medium capitalize max-w-[1065px] mx-auto mt-[20px] md:mt-[80px]"
            >
              To empower and train the next generation of elite sales
              professionals and business managers who are not just ready for the
              market but are ready to reshape it. We believe that every
              self-employed person has one thing in common: the ability to
              present opportunities and manage effectively. In the future, these
              skills will be the most important for any entrepreneur.
            </p>
          </div>

          <div className="bg-primary p-[7.2px] pb-[21px] rounded-[28px] max-w-[1057px] mx-auto mt-[70px] relative hidden md:block">
            <div className="w-full h-full bg-[#F9F9F9] rounded-[28px] min-h-[369px] relative"></div>
            <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 flex justify-between items-end px-[23px] pt-[71px] pb-[12px]">
              <img
                src={img1}
                alt=""
                className="max-w-[118px] w-full object-contain"
              />
              <div className="max-w-[539px] mx-auto pb-[40px]">
                <h1 className="text-cmn text-[#1D1D1D] text-[24px] uppercase font-bold">
                  Our Philosophy
                </h1>
                <p className="text-cmn text-[#1D1D1D] text-[20px] leading-normal capitalize mt-[26px]">
                  We believe that straight-line selling is ineffective. Instead,
                  we focus on empathy-driven influence. No one wants to be sold,
                  but everyone loves to buy. We emphasize providing
                  opportunities and never pushing for a sale, creating a
                  seamless and natural process.
                </p>
              </div>
              <img
                src={img2}
                alt=""
                className="max-w-[170px] w-full object-contain"
              />
            </div>
          </div>

          <div className="md:flex justify-center hidden md:inline-block">
            <button
              onClick={() => navigate("/funnel")}
              className="w-[288px] h-[84px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-[#540E21] rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[36px] md:mt-[75px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Start Now
            </button>
          </div>

          <div
            data-aos="fade-up"
            className="bg-primary p-[7.2px] pb-[21px] rounded-[28px] max-w-[1057px] mx-auto mt-[70px] relative md:hidden"
          >
            <div className="w-full h-full bg-[#F9F9F9] rounded-[28px] min-h-[369px] relative pt-[31px]">
              <h1 className="text-cmn text-[#1D1D1D] text-[20px] uppercase !font-bold">
                Our <br /> Philosophy
              </h1>
              <div className="flex items-start mt-[35px] pr-[16px]">
                <img
                  src={img1}
                  alt=""
                  className="max-w-[88px] w-full object-contain"
                />
                <p className="text-cmn text-[#1D1D1D] text-[16px] leading-normal capitalize">
                  We believe that straight-line selling is ineffective. Instead,
                  we focus on empathy-driven influence. No one wants to be sold,
                  but everyone loves to buy.
                </p>
              </div>
              <div className="flex items-end mt-[46px] pl-[16px]">
                <p className="text-cmn text-[#1D1D1D] text-[16px] leading-normal capitalize pb-[44px]">
                  We emphasize providing opportunities and never pushing for a
                  sale, creating a seamless and natural process.
                </p>
                <img
                  src={img2}
                  alt=""
                  className="max-w-[117px] w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:hidden">
            <button
              onClick={() => {
                navigate("/funnel");
              }}
              data-aos="fade-up"
              className="w-[170px] h-[55px] !border-b-[5px] border-x-[2px] border-t-[2px] border-[#540E21] rounded-[8px] bg-wp text-[#0D0D0D] capitalize text-[14px] font-semibold font-obviously-wide leading-normal mt-[36px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Take Action
            </button>
          </div>
        </motion.div>
      </div>
      <div
        className="h-[150px]"
        style={{
          backgroundImage: `url(${bottomBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </motion.div>
  );
};

export default AOurMission;
