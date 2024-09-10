const WISItem3SingleCard = ({ data }) => {
  return (
    <div className="bg-primary pb-[16px] rounded-[28.8px]">
      <div className="bg-wp rounded-[28.8px] border-[7.2px] border-primary px-[16px] py-[15px] flex flex-col justify-center items-center gap-y-[34px]">
        <div className="w-full flex justify-center xl:justify-start">
          <img src={data?.icon} alt="" className="w-[44px] object-contain" />
        </div>
        <h1
          className="text-[#0D0D0D] text-[20px] md:text-[28px] text-center font-semibold font-obviously-wide leading-normal capitalize"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
          }}
        >
          {data?.title}
        </h1>
        <p
          className="text-[#1C0D07] text-[18px] text-center font-obviously-wide leading-normal capitalize"
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

export default WISItem3SingleCard;
