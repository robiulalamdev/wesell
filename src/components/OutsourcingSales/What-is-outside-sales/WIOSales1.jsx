import img from "../../../assets/images/outsourcing-sales/what-is-outside-sale/latter.png";
import animation from "../../../assets/images/outsourcing-sales/what-is-outside-sale/animation.gif";

const WIOSales1 = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${animation})`,
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "186px",
      }}
    >
      <div className="max-w-[874px] mx-auto">
        <h1 className="text-cmn font-bold text-[24px] md:text-[48px] leading-normal uppercase text-[#F9F9F9] text-center">
          What Is{" "}
          <span className="text-primary">
            Outside <br /> Sales?
          </span>
        </h1>

        <div className="flex md:justify-end mt-[109px] md:ml-[50px] overflow-hidden">
          <img
            src={img}
            alt=""
            className="object-contain max-w-[707px] max-h-[718px] w-full h-full ml-[25px] md:ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default WIOSales1;
