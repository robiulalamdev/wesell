import hr from "../../assets/images/home/the-future/hr.png";
import animatedGif from "../../assets/images/home/the-future/animated.gif";
import { Button } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";

const HFuture = () => {
  const { inView } = useScrollAnimation();
  const container = useRef();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -600]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("hfuturesection", 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#000000] h-full">
      <motion.div
        id="hfuturesection"
        animate={{
          filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
        }}
        transition={{ duration: 0.5 }}
        ref={container}
        style={y}
        className="bg-[#000000] h-full min-h-[800px] relative pb-[200px] bottom-[500px]"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.5 }}
          data-aos="fade-up"
          data-aos-duration="700"
          className="container !mt-0"
        >
          <div
            className="max-w-[874px] mx-auto !mt-0 pt-[53px] md:pt-[100px] bg-[length:300px] md:bg-[length:1000px]"
            style={{
              backgroundImage: `url(${animatedGif})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <h1
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-[#F9F9F9] text-[24px] md:text-[40px] font-bold text-center font-obviously-wide uppercase leading-normal"
            >
              Step into WeSell – Where Every Decision Shapes the Future
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-[#C1C1C1] text-[16px] md:text-[20px] text-center font-medium font-obviously-wide leading-normal capitalize mt-[55px] md:mt-[65px]"
            >
              Joining WeSell means becoming part of a dynamic and supportive
              community dedicated to excellence, innovation, and personal
              growth. Here’s why you should consider a career with us:
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-[894px] w-full h-fit rounded-[11px] md:rounded-[44px] bg-primary p-[3.979px] md:p-[11px] pb-[10px] md:pb-[24px] mx-auto mt-[32px] md:mt-[65px]"
          >
            <div className="bg-[#F9F9F9] w-full h-full rounded-[11px] md:rounded-[44px] pt-[24px] md:pt-[52px] pb-[33px] md:pb-[74px] px-[33px] sm:px-[49px] md:px-[80px]">
              <div className="w-full flex justify-center">
                <img src={hr} alt="" className="object-contain" />
              </div>
              <h1 className="text-cmn text-[#000000] capitalize text-[17.208px] md:text-[48px] font-medium mt-[30px] md:mt-[85px]">
                The Self-Manager
              </h1>
              <p className="text-cmn text-[#474747] text-[8.604px] md:text-[24px] capitalize leading-normal mt-[25.72px] md:mt-[72px]">
                Know thyself and master the fundamentals of self-management.
                This level focuses on building self-awareness, personal
                productivity, and effective time management. Demonstrate your
                ability to lead yourself before leading others.
              </p>
            </div>
          </div>
          <Button
            className="shadow-none hover:shadow-none block mx-auto bg-[#971A53] w-fit p-0 outline-none text-cmn rounded-[11.82px] border-[2.955px] md:border-[3.393px] border-b-[8px] md:border-b-[11px] border-[#971A53] text-[20px] md:text-[27.146px] text-black text-[27px] mt-[55px] md:mt-[65px]"
            style={{ fontStyle: "italic" }}
          >
            <div className="bg-white outline-none w-[250px] sm:w-[288px] h-[84px] md:w-[364px] md:h-[84px] !rounded-[11.82px] flex justify-center items-center duration-200">
              Learn More
            </div>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HFuture;
