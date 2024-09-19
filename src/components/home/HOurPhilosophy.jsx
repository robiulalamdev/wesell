import { Button } from "@material-tailwind/react";
import bg from "../../assets/images/home/our-philosophy/bg.png";
import animated from "../../assets/images/home/our-philosophy/img1.gif";

const HOurPhilosophy = () => {
  return (
    <div
      className="w-full min-h-[800px] relative bottom-[180px] pb-[300px] bg-[length:400px] md:bg-[length:100%]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="pt-[229px]">
          <h1 className="text-[#F9F9F9] text-center font-obviously-wide font-bold text-[24px] md:text-[40px] uppercase leading-normal">
            Our Philosophy
          </h1>
          <p className="text-cmn text-[16px] md:text-[24px] font-medium text-white md:text-[#C1C1C1] capitalize mt-[38px] md:mt-[32px]">
            We believe that straight-line selling is ineffective. Instead, we
            focus on empathy-driven influence. No one wants to be sold, but
            everyone loves to buy. We emphasize providing opportunities and
            never pushing for a sale, creating a seamless and natural process.
          </p>

          <Button
            className="shadow-none hover:shadow-none block mx-auto bg-[#0D0D0D] md:bg-[#971A53] w-fit p-0 outline-none text-cmn rounded-[11.82px] border-[2.955px] md:border-[3.393px] border-b-[8px] md:border-b-[11px] border-[#0D0D0D] md:border-[#971A53] text-[20px] md:text-[27.146px] text-black mt-[38px] md:mt-[55px]"
            style={{ fontStyle: "italic" }}
          >
            <div className="bg-white outline-none w-[170px] h-[55px] md:w-[288px] md:h-[93px] !rounded-[11.82px] flex justify-center items-center duration-200">
              Start Now
            </div>
          </Button>

          <img
            src={animated}
            alt=""
            className="max-w-[454px] md:max-w-[800px] object-contain w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HOurPhilosophy;