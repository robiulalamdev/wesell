import bg from "../../assets/images/lead-generation/banner/bg.png";
import img1 from "../../assets/images/lead-generation/banner/img1.png";
import img2 from "../../assets/images/lead-generation/banner/img2.png";
import Header from "../shared/header/Header";
import { ANIMATED_IMAGES } from "../../utils/data/global";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const LGBanner = () => {
  const navigate = useNavigate();
  const { blurScale } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      blurScale.applyBlurScale("hbanner", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      id="hbanner"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`min-h-[1008px] pb-[200px] ${
        blurScale.isBlurred ? "blur-sm" : "blur-none"
      }`}
      style={{
        background: `linear-gradient(180deg, rgba(22, 48, 120, 0.00) 35.91%, rgba(22, 48, 120, 0.90) 100%), url(${bg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div
        className="container"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.INFINITY})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          backgroundSize: "200px",
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
            data-aos-duration="700"
            className="lg:flex justify-between items-center gap-[16px] mt-[150px] pb-[71px] hidden lg:inline-block"
          >
            <img
              data-aos="fade-right"
              src={img1}
              alt=""
              className="max-w-[225px] object-contain"
            />
            <div className="max-w-[700px] mx-auto">
              <h1 className="text-cmn font-bold text-[40px] text-[#F9F9F9] uppercase text-center">
                Lead Generation Outsourcing with WeSell
              </h1>
              <p className="text-cmn capitalize text-[#C1C1C1] text-[20px] font-normal mt-[75px]">
                Lead generation outsourcing has emerged as a highly effective
                strategy for businesses seeking to enhance their sales efforts
                and revenue streams. By partnering with reputable B2B lead
                generation service providers like WeSell, companies can delegate
                the intricate and time-consuming task of generating leads to
                experts in the field. This approach frees up valuable resources
                and eliminates the need for costly in-house team recruitment and
                training.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => navigate("/funnel?pos=appointment")}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="w-[170px] h-[55px] hover:w-[210px] hover:h-[63px] hover:md:w-[320px] hover:md:h-[103px] md:w-[288px] md:h-[93px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-[#540E21] rounded-[8px] md:rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[22px] xl:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[36px] md:mt-[75px]"
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
            <img
              data-aos="fade-left"
              src={img2}
              alt=""
              className="max-w-[300px] object-contain"
            />
          </div>
        </motion.div>

        <div className="mt-[35px] lg:hidden pb-[45px]">
          <div className="flex justify-between items-center">
            <img
              data-aos="fade-right"
              src={img1}
              alt=""
              className="max-w-[102px] object-contain"
            />
            <div>
              <h1 className="text-cmn font-bold text-[16px] md:text-[24px] text-[#F9F9F9] uppercase text-center">
                Lead Generation Outsourcing with WeSell
              </h1>
              <p className="text-cmn capitalize text-[#C1C1C1] text-[16px] md:text-[18px] font-normal mt-[29px]">
                Lead generation outsourcing has emerged as a highly effective
                strategy for businesses seeking to enhance their sales efforts
                and revenue streams. By partnering with reputable B2B lead
                generation service providers
              </p>
            </div>
          </div>
          <div className="flex justify-between items-end overflow-hidden">
            <div>
              <p className="text-cmn capitalize text-[#C1C1C1] text-[16px] md:text-[18px] font-normal mt-[29px]">
                like WeSell, companies can delegate the intricate and
                time-consuming task of generating leads to experts in the field.
                This approach frees up valuable resources and eliminates the
                need for costly in-house team recruitment and training.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => navigate("/funnel?pos=appointment")}
                  className="w-[170px] h-[55px] hover:w-[210px] hover:h-[63px] hover:md:w-[320px] hover:md:h-[103px] md:w-[288px] md:h-[93px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-[#540E21] rounded-[8px] md:rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[22px] xl:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[36px] md:mt-[75px]"
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
            <img
              data-aos="fade-left"
              src={img2}
              alt=""
              className="max-w-[164px] object-contain w-ful -mr-[50px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LGBanner;
