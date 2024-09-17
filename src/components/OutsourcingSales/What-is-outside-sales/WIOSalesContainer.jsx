import { useState } from "react";
import rArrow from "../../../assets/icons/outsourcing-sales/rarrow.png";
import lArrow from "../../../assets/icons/outsourcing-sales/larrow.png";
import WCBackElement from "../WhyChooseWeSellSection/WCBackElement";
import WIOSales1 from "./WIOSales1";
import WIOSales2 from "./WIOSales2";
import WIOSales3 from "./WIOSales3";
import bg from "../../../assets/images/outsourcing-sales/what-is-outside-sale/bg.png";

const WIOSalesContainer = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full h-full pb-[60px]">
      <div className="!pt-[35px] md:!pt-[70px]">
        <WCBackElement className="md:hidden ml-[12px]" />
        <div className="mt-[35px]">
          {step === 1 && <WIOSales1 />}
          {step === 2 && <WIOSales2 />}
          {step === 3 && <WIOSales3 />}
        </div>
        <div className="flex justify-between items-end w-full container">
          {step === 3 && (
            <img
              src={bg}
              alt=""
              className="max-w-[200px] md:max-w-[431px] object-contain w-full"
            />
          )}
          {step !== 3 && <div></div>}
          <div className="flex justify-end gap-x-[13px] !mt-[32px] !z-[999999999]">
            <button onClick={() => handlePrev()} className="">
              <img
                src={lArrow}
                alt=""
                className="min-w-[53px] w-[53px] h-[48px] object-contain"
              />
            </button>
            <button onClick={() => handleNext()} className="">
              <img
                src={rArrow}
                alt=""
                className="min-w-[53px] w-[53px] h-[48px] object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIOSalesContainer;
