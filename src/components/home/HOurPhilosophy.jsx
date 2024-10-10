import { Button } from "@material-tailwind/react";
import bg from "../../assets/images/home/our-philosophy/bg.png";
import bg2 from "../../assets/images/home/our-philosophy/bg2.png";
import animatedGif from "../../assets/images/home/our-philosophy/img1.gif";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const HOurPhilosophy = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax effect for Empowering section based on scroll position
  const empoweringProps = useSpring({
    transform: `translateY(${scrollY * -0.3}px)`, // Adjust scroll speed by multiplying scrollY
  });

  return (
    <animated.div
      style={{
        ...empoweringProps,
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full min-h-[800px] relative pb-[200px] bg-[length:400px] md:bg-[length:100%]"
    >
      <div className="container">
        <div className="pt-[109px]">
          <h1 className="text-[#F9F9F9] text-center font-obviously-wide font-bold text-[24px] md:text-[40px] uppercase leading-normal">
            Our Philosophy
          </h1>
          <p className="text-cmn text-[16px] md:text-[24px] font-medium text-white md:text-[#C1C1C1] capitalize mt-[38px] md:mt-[32px]">
            We believe that straight-line selling is ineffective. Instead, we
            focus on empathy-driven influence. No one wants to be sold, but
            everyone loves to buy. We emphasize providing opportunities and
            never pushing for a sale, creating a seamless and natural process.
          </p>

          <Button
            className="shadow-none hover:shadow-none block mx-auto bg-[#0D0D0D] md:bg-[#971A53] w-fit p-0 outline-none text-cmn rounded-[11.82px] border-[2.955px] md:border-[3.393px] border-b-[8px] md:border-b-[11px] border-[#0D0D0D] md:border-[#971A53] text-[20px] md:text-[27.146px] text-black mt-[38px] md:mt-[55px]"
            style={{ fontStyle: "italic" }}
          >
            <div className="bg-white outline-none w-[170px] h-[55px] md:w-[288px] md:h-[93px] !rounded-[11.82px] flex justify-center items-center duration-200">
              Start Now
            </div>
          </Button>

          <img
            src={animatedGif}
            alt=""
            className="max-w-[454px] md:max-w-[800px] object-contain w-full mx-auto"
          />
        </div>
      </div>
    </animated.div>
  );
};

export default HOurPhilosophy;
