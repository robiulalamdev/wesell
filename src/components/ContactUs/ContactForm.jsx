import { ANIMATED_IMAGES } from "../../utils/data/global";
import bg from "../../assets/images/contact-us/bg.png";
import Header from "../shared/header/Header";
import { Button } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <div
      className="min-h-[800px] pb-[62px] md:pb-[50px]"
      style={{
        background: `linear-gradient(180deg, rgba(22, 48, 120, 0.00) 29.04%, rgba(22, 48, 120, 0.90) 100%), url(${bg}) lightgray 0px 0px / 105% 118.033% no-repeat`,
      }}
    >
      <div
        className="container bg-[length:270px] md:bg-[length:500px] p-0"
        style={{
          backgroundImage: `url(${ANIMATED_IMAGES.INFINITY})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      >
        <Header />

        <div className="mt-[45px] md:mt-[80px]">
          <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[48px] font-bold uppercase">
            Contact US
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-y-[16px] md:gap-y-[54px] gap-x-[20px] mt-[37px] md:mt-[99px]">
            <div>
              <h1 className="text-cmn text-left text-[#F9F9F9] text-[16px] md:text-[24px] capitalize mb-[10px]">
                Full Name
              </h1>
              <input
                type="text"
                className="input-cmn w-full h-[80px] rounded-[10px]"
              />
            </div>
            <div>
              <h1 className="text-cmn text-left text-[#F9F9F9] text-[16px] md:text-[24px] capitalize mb-[10px]">
                Email Address
              </h1>
              <input
                type="email"
                className="input-cmn w-full h-[80px] rounded-[10px]"
              />
            </div>
            <div>
              <h1 className="text-cmn text-left text-[#F9F9F9] text-[16px] md:text-[24px] capitalize mb-[10px]">
                Phone Number
              </h1>
              <input
                type="number"
                className="input-cmn w-full h-[80px] rounded-[10px]"
              />
            </div>
            <div className="md:col-span-3">
              <h1 className="text-cmn text-left text-[#F9F9F9] text-[16px] md:text-[24px] capitalize mb-[10px]">
                Message Write Here
              </h1>
              <textarea
                type="text"
                className="input-cmn w-full h-[148px] md:h-[172px] rounded-[10px]"
              ></textarea>
            </div>

            <Button
              className="shadow-none hover:shadow-none bg-[#971A53] w-fit p-0 outline-none text-cmn rounded-[11.82px] border-[2.955px] md:border-[3.393px] border-b-[8px] md:border-b-[11px] border-[#971A53] text-[20px] md:text-[27.146px] text-black mt-[36px] md:mt-[44px]"
              style={{ fontStyle: "italic" }}
            >
              <div className="bg-white outline-none min-w-[250px] sm:min-w-[270px] max-w-[317px] h-[73px] md:w-[364px] md:h-[84px] !rounded-[11.82px] flex justify-center items-center duration-200">
                Submit
              </div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;