const WISItem3SingleCard = ({ data }) => {
  return (
    <div className="bg-bp pb-[16px] rounded-[28.8px]">
      <div className="bg-wp h-full rounded-[28.8px] border-[7.2px] border-bp px-[21px] py-[15px] flex flex-col justify-center items-center">
        <div className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start">
          <div className="flex justify-center xl:justify-start gap-[5px]">
            <img
              src={data?.icon}
              alt=""
              className="min-w-[44px] w-[44px] object-contain"
            />
          </div>
          <h1
            className="flex-grow text-[#0D0D0D] text-[24px] md:text-[28px] text-center font-semibold font-obviously-wide leading-normal md:uppercase capitalize"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
            }}
          >
            {data?.title}
          </h1>
        </div>
        <p
          className="text-[#1C0D07] text-[16px] text-center font-obviously-wide leading-normal capitalize mt-[28px] xl:mt-[34px]"
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
