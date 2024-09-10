/* eslint-disable react/prop-types */

const WCItem4SingleCard = ({ data }) => {
  return (
    <div className="bg-primary pb-[13px] mb:pb-[32px] rounded-[28.8px]">
      <div className="bg-wp xl:!min-h-[662px] rounded-[28.8px] border-[7.2px] border-primary px-[16px] py-[15px] flex flex-col justify-center items-center gap-y-[34px]">
        <div className="w-full flex justify-center xl:justify-start">
          <img src={data?.icon} alt="" className="w-[44px] object-contain" />
        </div>
        <h1
          className="text-[#0B0B0B] text-[24px] md:text-[32px] text-center font-bold font-obviously-wide leading-normal capitalize"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
          }}
        >
          {data?.title}
        </h1>
        <p
          className="text-[#474747] text-[14px] md:text-[20px] text-center font-medium font-obviously-wide leading-normal capitalize"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
          }}
        >
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WCItem4SingleCard;
