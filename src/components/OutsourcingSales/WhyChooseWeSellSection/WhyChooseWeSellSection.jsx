import { Carousel } from "@material-tailwind/react";
import rArrow from "../../../assets/icons/outsourcing-sales/rarrow.png";
import lArrow from "../../../assets/icons/outsourcing-sales/larrow.png";
import { useRef } from "react";
import WCItem1 from "./WCItem1";
import WCItem2 from "./WCItem2";
import WCItem3 from "./WCItem3";
import WCItem4 from "./WCItem4";

const WhyChooseWeSellSection = () => {
  const nextRef = useRef();
  const preRef = useRef();

  return (
    <div className="bg-bp relative">
      <Carousel
        prevArrow={({ handlePrev }) => {
          return <button ref={nextRef} onClick={handlePrev}></button>;
        }}
        nextArrow={({ handleNext }) => {
          return <button ref={preRef} onClick={handleNext}></button>;
        }}
        navigation={() => {}}
      >
        <WCItem1 />
        <WCItem2 />
        <WCItem3 />
        <WCItem4 />
      </Carousel>
      <div className="container flex justify-end items-center gap-x-[13px]">
        <button onClick={() => nextRef.current.click()} className="">
          <img
            src={lArrow}
            alt=""
            className="w-[53px] h-[48px] object-contain"
          />
        </button>
        <button onClick={() => preRef.current.click()} className="">
          <img
            src={rArrow}
            alt=""
            className="w-[53px] h-[48px] object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default WhyChooseWeSellSection;
