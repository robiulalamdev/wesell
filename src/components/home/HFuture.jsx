/* eslint-disable react/no-unescaped-entities */
// import hr from "../../assets/images/home/the-future/hr.png";
import animatedGif from "../../assets/images/home/the-future/animated.gif";
import watch from "../../assets/images/home/the-future/watch.png";
import watch2 from "../../assets/images/home/the-future/watch2.png";
import hr from "../../assets/images/home/the-future/hr.png";
import { Button, step } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import downArrow from "../../assets/icons/global/down-arrow.gif";

const HFuture = () => {
  const { inView } = useScrollAnimation();
  const container = useRef();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("hfuturesection", 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [step, setStep] = useState(0);

  return (
    <div className="bg-[#000000] h-full">
      <motion.div
        id="hfuturesection"
        animate={{
          filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
        }}
        transition={{ duration: 0.2 }}
        ref={container}
        style={{ y }}
        className="bg-[#000000] h-full min-h-[800px] relative pb-[100px]"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#C1C1C1] text-[16px] md:text-[20px] text-center font-medium font-obviously-wide leading-normal capitalize mt-[55px] md:mt-[65px]"
            >
              Joining WeSell means becoming part of a dynamic and supportive
              community dedicated to excellence, innovation, and personal
              growth. Here’s why you should consider a career with us:
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block max-w-[1055px] w-full h-fit rounded-[11px] md:rounded-[44px] bg-primary p-[3.979px] md:p-[11px] pb-[10px] md:pb-[24px] mx-auto mt-[32px] md:mt-[65px] relative"
          >
            <motion.div
              className="group bg-[#F9F9F9] w-full h-full rounded-[11px] md:rounded-[44px] pt-[24px] md:pt-[52px] pb-[33px] md:pb-[74px] px-[33px] sm:px-[49px] md:px-[80px] relative cursor-pointer overflow-hidden"
              whileHover="hovered"
              initial="initial"
              variants={{
                initial: {
                  duration: 0.6,
                },
                hovered: {
                  duration: 0.6,
                },
              }}
              transition={{ duration: 0.2 }}
            >
              {step === 0 && (
                <>
                  <div className="flex justify-center items-center gap-[17px] w-full h-full group-hover:hidden">
                    {/* Text positioned in the center */}
                    <motion.h1
                      className="text-cmn text-[#474747] capitalize text-[32px] md:text-[64px] font-[670] transition-all duration-500 ease-in-out"
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: 200, x: "50%" },
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      Wesell Watch
                    </motion.h1>

                    <motion.img
                      src={watch}
                      alt="Watch"
                      className="max-w-[280px] md:max-w-[367px] max-h-[553px] w-full object-contain transition-all duration-500 ease-in-out"
                      variants={{
                        initial: { rotateY: 0, x: 0 },
                        hovered: { rotateZ: -90, y: -100, x: "-50%" },
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <div className="group-hover:flex flex-col-reverse justify-center items-center gap-[17px] w-full h-full hidden group-hover:inline-block">
                    <motion.div
                      initial={{ scale: 1.2, y: 350 }}
                      variants={{
                        initial: { scale: 1.2, y: 350 },
                        hovered: { scale: 1, y: 0, duration: 0.2 },
                      }}
                      transition={{ duration: 0.2 }}
                      // initial={{ y: 200, x: 0, scale: 0.9 }}
                      // variants={{
                      //   initial: { y: 0, x: 0, scale: 0.9 },
                      //   hovered: { y: 0, x: 0, scale: 0 },
                      // }}
                      // transition={{ duration: 0.1 }}
                      className="hidden group-hover:block transition-all duration-200 ease-in"
                    >
                      <motion.h1
                        className="text-cmn text-[#000000] capitalize text-[32px] md:text-[36px] font-[670] transition-all duration-500 ease-in"
                        transition={{ duration: 0.1 }}
                      >
                        The Self-Manager
                      </motion.h1>
                      <p className="text-[#474747] text-[18px] capitalize font-obviously-wide leading-normal text-cmn max-w-[467px] mx-auto mt-[19px] md:mt-[54px]">
                        Know thyself and master the fundamentals of
                        self-management. This level focuses on building
                        self-awareness, personal productivity, and effective
                        time management. Demonstrate your ability to lead
                        yourself before leading others.
                      </p>
                    </motion.div>

                    <motion.img
                      src={watch}
                      alt="Watch"
                      className="max-h-[280px] md:max-h-[262px] max-w-[395px] w-full object-contain transition-all duration-500 ease-in-out hidden group-hover:block"
                      initial={{ rotateZ: 0, rotateY: 0, x: 300, y: 100 }}
                      variants={{
                        initial: { rotateZ: 0, rotateY: 0, x: 300, y: 100 },
                        hovered: { rotateZ: -90, rotateY: 0, y: 0, x: 0 },
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </>
              )}

              {step === 1 && (
                <div className="flex justify-center items-center gap-x-[17px] w-full">
                  <motion.img
                    src={watch}
                    alt="Watch"
                    className="max-w-[280px] md:max-w-[336px] max-h-[506px] w-full object-contain transition-all duration-500 ease-in-out"
                    initial={{ rotateY: -90, y: -100, x: 150 }}
                    animate={{ rotateY: 0, y: 0, x: 0 }}
                    transition={{ duration: 0.1 }}
                  />
                  <motion.div
                    initial={{ y: 100, x: -100 }}
                    animate={{ rotateY: 0, y: 0, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className="transition-all duration-300 ease-in"
                  >
                    <motion.h1
                      className="text-cmn text-[#000000] capitalize text-[32px] md:text-[36px] font-medium transition-all duration-500 ease-in"
                      transition={{ duration: 0.1 }}
                    >
                      The Strategic Planner
                    </motion.h1>
                    <p className="text-[#474747] text-[18px] capitalize font-obviously-wide leading-normal text-cmn font-normal max-w-[467px] mx-auto mt-[19px] md:mt-[54px]">
                      Develop and implement strategic plans to navigate complex
                      management scenarios. Utilize advanced AI tools to enhance
                      decision-making processes and optimize team performance
                    </p>
                  </motion.div>
                </div>
              )}
              {step === 2 && (
                <div className="flex justify-center items-center gap-x-[17px] w-full">
                  <motion.img
                    src={watch2}
                    alt="Watch"
                    className="max-w-[280px] md:max-w-[336px] max-h-[506px] w-full object-contain transition-all duration-500 ease-in-out"
                    initial={{ rotateY: 90, y: 0, x: 0, opacity: 0 }}
                    animate={{ rotateY: 0, y: 0, x: 0, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  />
                  <motion.div
                    initial={{ y: 100, x: -100 }}
                    animate={{ rotateY: 0, y: 0, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className="transition-all duration-300 ease-in"
                  >
                    <motion.h1
                      className="text-cmn text-[#000000] capitalize text-[32px] md:text-[36px] font-medium transition-all duration-500 ease-in"
                      transition={{ duration: 0.1 }}
                    >
                      The Visionary Leader
                    </motion.h1>
                    <p className="text-[#474747] text-[18px] capitalize font-obviously-wide leading-normal text-cmn font-normal max-w-[467px] mx-auto mt-[19px] md:mt-[54px]">
                      Create and execute innovative management strategies that
                      drive organizational success. Showcase your ability to
                      inspire and motivate your team, and implement initiatives
                      that foster growth and efficiency
                    </p>
                  </motion.div>
                </div>
              )}
              {step === 3 && (
                <div className="flex justify-center items-center gap-x-[17px] w-full">
                  <motion.img
                    src={watch2}
                    alt="Watch"
                    className="max-w-[280px] md:max-w-[336px] max-h-[506px] w-full object-contain transition-all duration-500 ease-in-out"
                    initial={{ rotateY: 90, y: 0, x: 0, opacity: 0 }}
                    animate={{ rotateY: 0, y: 0, x: 0, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  />
                  <motion.div
                    initial={{ y: 100, x: -100 }}
                    animate={{ rotateY: 0, y: 0, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className="transition-all duration-300 ease-in"
                  >
                    <motion.h1
                      className="text-cmn text-[#000000] capitalize text-[32px] md:text-[36px] font-medium transition-all duration-500 ease-in"
                      transition={{ duration: 0.1 }}
                    >
                      The Executive Titan
                    </motion.h1>
                    <p className="text-[#474747] text-[18px] capitalize font-obviously-wide leading-normal text-cmn font-normal max-w-[467px] mx-auto mt-[19px] md:mt-[54px]">
                      Lead multiple teams, achieve high organizational targets,
                      and demonstrate your executive leadership in high-pressure
                      environments. Graduating at this level is akin to earning
                      a black belt in management—prestigious, recognized, and
                      respected. You will embody the pinnacle of our 'Dare to
                      Manage' philosophy
                    </p>
                  </motion.div>
                </div>
              )}

              <motion.button
                onClick={() => (step < 3 ? setStep(step + 1) : setStep(0))}
                className={`w-[116px] h-[116px] flex justify-center items-center rounded-full absolute bottom-[51px] right-[51px] transition-all duration-500 ease-in ${
                  step === 0
                    ? "hidden group-hover:inline-block"
                    : "inline-block"
                }`}
              >
                <motion.img
                  initial={{ rotate: 0 }}
                  variants={{
                    hovered: { rotate: -90 },
                  }}
                  transition={{ duration: 0.3 }}
                  src={downArrow}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="md:hidden max-w-[894px] w-full h-fit rounded-[11px] md:rounded-[44px] bg-primary p-[3.979px] md:p-[11px] pb-[10px] md:pb-[24px] mx-auto mt-[32px] md:mt-[65px]"
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
