import { ANIMATED_IMAGES } from "../../utils/data/global";
import img1 from "../../assets/images/home/empowering/img1.png";
import { useTransform, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HEmpowering = () => {
  const container = useRef();

  const { scrollY: sY } = useScroll(); // Get scrollY value
  const y = useTransform(sY, [0, 1000], [0, -500]);

  const [inView, setInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("section");
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when the section is 50% in view
      const isInView =
        rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;
      setInView(isInView);

      // Track the current scroll position
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="section"
      animate={{
        filter: inView ? "blur(0px)" : "blur(2.5px)",
      }}
      ref={container}
      style={{
        y,
      }}
      className="bg-[#1D1D1D] pt-[76px]  hidden md:block relative pb-[100px]"
    >
      <div className="container !mt-0">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{
            scale: inView ? 1 : 0.9,
          }}
          transition={{ duration: 0.5 }}
          className="max-w-[1018px] mx-auto"
        >
          <div data-aos="flip-up" data-aos-duration="500">
            <h1 className="text-cmn text-[#F9F9F9] text-[36px] font-bold leading-normal uppercase">
              Empowering the next generation of business leaders
            </h1>
            <p className="text-cmn text-[#C1C1C1] leading-normal font-medium text-[16px] mt-[57px] capitalize">
              In today&apos;s competitive landscape, many young entrepreneurs
              aspire to achieve financial freedom but lack the essential skills
              in sales and management to build a sustainable and successful
              career. While AI tools are transforming industries, the true power
              lies in mastering the fundamentals of sales and management. At
              WeSell, we recognize that without the right guidance and hands-on
              experience, these ambitious individuals may struggle to turn their
              potential into real ownership and long-term success. There is a
              need for a program that not only teaches these core disciplines
              but also provides the opportunity to leverage advanced tools and
              create a pathway to owning a cashflow-positive business.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            data-aos-anchor-placement="center"
          >
            <img
              src={ANIMATED_IMAGES.REVEAL_LOADING}
              alt=""
              className="max-w-[262px] w-full object-contain mx-auto mt-[56px]"
            />

            {/* <h1 className="text-cmn font-italic font-medium text-[24px] text-[#FFFFFF] uppercase mt-[56px]">
            entrepreneur
          </h1> */}

            <img
              src={img1}
              alt=""
              className="object-contain max-w-[552px] w-full mx-auto mt-[46px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HEmpowering;
