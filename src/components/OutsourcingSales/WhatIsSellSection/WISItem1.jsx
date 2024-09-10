import WISItem2 from "./WISItem2";

const WISItem1 = () => {
  return (
    <div className="container">
      <h1 className="pt-[1px] md:pt-[70px] text-cmn text-primary font-bold text-[20px] md:text-[40px] max-w-[820px] mx-auto">
        What Is Sales Co-Sourcing?
      </h1>
      <p className="text-cmn mt-[50px] md:mt-[65px] font-medium text-[#C1C1C1] text-[16px] md:text-[20px] capitalize max-w-[712px] mx-auto">
        Sales co-sourcing is a business strategy that involves partnering with
        an external company to supplement and enhance a company’s existing sales
        team. Co-sourcing sales is a form of outsourcing that provides companies
        access to sales experts, sales technology, and best practices to improve
        the effectiveness of their sales efforts.
      </p>

      <div className="hidden md:block">
        <WISItem2 buttonShow={false} className="mt-[65px]" />
      </div>
      <div className="flex justify-center mt-[50px] md:mt-[65px]">
        <button
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
    </div>
  );
};

export default WISItem1;
