import animation from "../../../assets/images/outsourcing-sales/what-is-outside-sale/animation.gif";

const WIOSales3 = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${animation})`,
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "186px",
        }}
      >
        <div className="max-w-[874px] mx-auto">
          <h1 className="text-cmn font-bold text-[24px] md:text-[48px] leading-normal uppercase text-[#F9F9F9] text-center">
            Best
            <span className="text-primary"> Outside Sales? </span> &
            <span className="text-[#971A53]"> Lead Generation</span> Services
          </h1>

          <p className="text-[16px] md:text-[20px] font-medium text-center text-[#C1C1C1] capitalize font-obviously-wide leading-normal mt-[24px] md:mt-[75px]">
            With decades of expertise and a steadfast dedication to sales
            excellence, WeSell offers a unique blend of creativity, strategic
            direction, and streamlined processes that make us the premier choice
            for outside sales team outsourcing and lead generation services. Our
            corporate culture, process leadership, and ongoing agent development
            ensure that our sales teams have the techniques they need to
            succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WIOSales3;
