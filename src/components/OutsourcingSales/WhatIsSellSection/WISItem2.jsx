import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const WISItem2 = ({ buttonShow = true, className = "", show = true }) => {
  const navigate = useNavigate();
  return (
    show && (
      <div className="container">
        <h1
          data-aos="fade-up"
          className={`pt-[1px] md:pt-[70px] text-cmn text-primary font-bold text-[20px] md:text-[40px] max-w-[820px] mx-auto ${className}`}
        >
          Co-Sourcing vs. Outsourcing: Which is More Beneficial?
        </h1>
        <p
          data-aos="fade-up"
          className="text-cmn mt-[50px] md:mt-[65px] font-medium text-[#C1C1C1] text-[16px] md:text-[20px] capitalize max-w-[712px] mx-auto"
        >
          The choice between co-sourcing sales and outsourcing sales depends on
          a business’s current condition, goals, and specific circumstances.
          Here’s when each approach might be more suitable:
        </p>
        {buttonShow && (
          <div className="flex justify-center mt-[50px] md:mt-[65px]">
            <button
              onClick={() => {
                navigate("/funnel");
              }}
              className="w-[170px] h-[55px] hover:w-[200px] hover:h-[60px] md:w-[200px] md:h-[76px] md:hover:w-[288px] md:hover:h-[88px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-[#163078] md:border-primary rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[27px] md:mt-[82px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Take Action
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default WISItem2;
