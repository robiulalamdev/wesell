import { Carousel } from "@material-tailwind/react";
import bg from "../../../assets/images/about-us/exclusive-perks/onboardingBg.png";
import { GIcons } from "../../../utils/data/global";
import { useRef } from "react";
import Header from "../../shared/header/Header";
import AOItem1 from "./AOItem1";
import AOItem2 from "./AOItem2";
import AOItem3 from "./AOItem3";
import AOItem4 from "./AOItem4";
import AOItem5 from "./AOItem5";
import AOItem6 from "./AOItem6";
import AOItem7 from "./AOItem7";
import AOItem8 from "./AOItem8";

const AOnboardingContainer = () => {
  const nextRef = useRef();
  const preRef = useRef();
  return (
    <>
      <div className="min-h-[1500px]"></div>
      <div
        className="min-h-[1600px] absolute w-full top-0 right-0 left-0 pb-[300px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Header />
        </div>
        <>
          <Carousel
            className="!p-0 m-0 h-fit max-h-fit !transform-none mt-[45px] md:mt-[100px]"
            prevArrow={({ handlePrev }) => {
              return <button ref={nextRef} onClick={handlePrev}></button>;
            }}
            nextArrow={({ handleNext }) => {
              return <button ref={preRef} onClick={handleNext}></button>;
            }}
            navigation={() => {
              return <div></div>;
            }}
          >
            <AOItem1 />
            <AOItem2 />
            <AOItem3 />
            <AOItem4 />
            <AOItem5 />
            <AOItem6 />
            <AOItem7 />
            <AOItem8 />
          </Carousel>
          <div className="container flex justify-end gap-x-[13px]">
            <button onClick={() => nextRef.current.click()} className="">
              <img
                src={GIcons.PREV}
                alt=""
                className="w-[53px] h-[48px] object-contain"
              />
            </button>
            <button onClick={() => preRef.current.click()} className="">
              <img
                src={GIcons.NEXT}
                alt=""
                className="w-[53px] h-[48px] object-contain"
              />
            </button>
          </div>
        </>
      </div>
    </>
  );
};
export default AOnboardingContainer;
