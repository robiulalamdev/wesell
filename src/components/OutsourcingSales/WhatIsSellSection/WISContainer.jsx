import top from "../../../assets/images/outsourcing-sales/what-is-sell/top.png";
import bottom from "../../../assets/images/outsourcing-sales/what-is-sell/bottom.png";
import rArrow from "../../../assets/icons/outsourcing-sales/rarrow.png";
import lArrow from "../../../assets/icons/outsourcing-sales/larrow.png";
import WISItem1 from "./WISItem1";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import WISItem2 from "./WISItem2";

const WISContainer = () => {
  const nextRef = useRef();
  const preRef = useRef();

  const [isShow, setIsShow] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 720) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial value based on current window width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-bp py-[52px] relative mt-[100px] mb-[300px]">
      <img src={top} alt="" className="w-full relative top-[10px]" />
      <div className="bg-[#971A53] py-[50px]">
        <Carousel
          className="!p-0 m-0 h-fit max-h-fit !transform-none"
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
          <WISItem1 />
          {isShow && <WISItem2 />}
        </Carousel>
        <div className="container flex justify-end gap-x-[13px]">
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
      <img src={bottom} alt="" className="w-full relative bottom-[10px]" />
    </div>
  );
};

export default WISContainer;
