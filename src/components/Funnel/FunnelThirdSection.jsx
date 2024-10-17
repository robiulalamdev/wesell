import bg from "../../assets/images/funnel/thirdSection/bg.png";
import img1 from "../../assets/images/funnel/thirdSection/img1.png";

const FunnelThirdSection = () => {
  return (
    <div
      className="pt-[41px] md:pt-[61px] pb-[100px] md:pb-[139px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <img
          src={img1}
          alt=""
          className="max-w-[1185px] w-full object-contain mx-auto"
        />
        <button className="w-[216px] h-[69px] md:w-[288px] md:h-[93px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[20px] md:text-[24px] font-semibold leading-normal mt-[35px] md:mt-[45px] block mx-auto">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default FunnelThirdSection;
