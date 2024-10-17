import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/images/funnel/real-people/bg.png";
import img1 from "../../assets/images/funnel/real-people/img1.png";
import qoute from "../../assets/images/funnel/real-people/qoute.png";
import nextArrow from "../../assets/images/funnel/real-people/nextArrow.gif";
import Slider from "react-slick";

const items = [
  {
    id: 1,
    name: "Robert Perry",
    about:
      "This isn’t just a job—it’s an opportunity to help people while growing as a person. I’ve never felt more fulfilled in my career.",
    image: img1,
  },
  {
    id: 2,
    name: "Robert Perry",
    about:
      "This isn’t just a job—it’s an opportunity to help people while growing as a person. I’ve never felt more fulfilled in my career.",
    image: img1,
  },
];

const FunnelRealPeople = () => {
  const [settings, setSettings] = useState();

  const sliderRef = useRef(null);

  // Function to get slider settings based on window width
  const getSliderSettings = (width) => {
    if (width <= 1100) {
      return {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Show 1 slide on small devices
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 1,
        nextArrow: null,
        prevArrow: null,
      };
    } else {
      return {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5, // Show 1.5 slides on larger devices
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        nextArrow: null,
        prevArrow: null,
      };
    }
  };

  // Handle window resize to adjust settings
  useEffect(() => {
    const handleResize = () => {
      setSettings(getSliderSettings(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="pt-[58px] md:pt-[89px] pb-[48px] md:pb-[108px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>{window.screen.width}</h1>
      <div className="container">
        <div className="max-w-[762px] w-full mx-auto">
          <h1 className="text-cmn text-white text-[24px] md:text-[36px] font-bold uppercase">
            Real People, Real Impact
          </h1>
          <p className="text-cmn text-[#C1C1C1] text-[16px] md:text-[20px] font-medium capitalize mt-[42px]">
            Hear from our team members who’ve experienced the transformative
            power of our approach. We’re not just selling products—we’re helping
            people build better lives.
          </p>
        </div>
        <div className="mt-[42px] md:mt-[84px]">
          <Slider ref={sliderRef} {...settings}>
            {items.map((item, index) => (
              <div key={index} className="px-[12px]">
                <div className="md:w-[692px] h-full bg-[#F9F9F9] border-[5px] border-b-[13px] border-primary rounded-[20px] grid grid-cols-2 items-end gap-[10px] md:gap-[54px] px-[14px] md:px-[33px]">
                  <div className="flex flex-col justify-end items-end">
                    <img
                      src={item?.image}
                      alt=""
                      className="max-w-[171px] md:max-w-[271px] w-full max-h-[442px] h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[15px] md:gap-[55px] w-full h-full py-[33px]">
                    <img
                      src={qoute}
                      alt=""
                      className="max-w-[39px] md:max-w-[86px] w-full object-contain"
                    />
                    <p className="text-cmn text-[#1D1D1D] text-[10px] md:text-[16px] font-medium capitalize max-w-[279px] w-full mx-auto">
                      {item?.about}
                    </p>
                    <h1 className="text-cmn text-[#163078] text-[14px] md:text-[20px] capitalize font-medium">
                      {item?.name}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-end mt-[29px] md:mt-[61px]">
            <img
              onClick={() => sliderRef.current.slickNext()}
              src={nextArrow}
              alt=""
              className="max-w-[63px] md:max-w-[89px] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnelRealPeople;
