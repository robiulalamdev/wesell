import bg from "../../assets/images/about-us/exclusive-perks/bg.png";
import onboardingbtn from "../../assets/images/about-us/exclusive-perks/onboardingbtn.png";
import { ANIMATED_IMAGES } from "../../utils/data/global";
import icon1 from "../../assets/icons/about-us/exclusive-perks/icon1.png";

const items = [
  "Luxury Airbnb properties",
  "Access to high-end vehicles",
  "Advanced sales and management tools",
  "Competitive commission-based earnings",
];

const ExclusivePerks = () => {
  return (
    <div
      className="min-h-[800px] relative bottom-[50px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div
          className="pt-[188px] md:pt-[288px] pb-[130px] bg-[length:175px_175px] md:bg-[length:400px_400px]"
          style={{
            backgroundImage: `url(${ANIMATED_IMAGES.OPENER_LOADING}), url(${ANIMATED_IMAGES.OPENER_LOADING})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 100px, bottom right",
          }}
        >
          <h1 className="text-cmn text-[#F9F9F9] text-[24px] md:text-[40px] font-bold uppercase leading-normal">
            Exclusive Perks
          </h1>

          <div className="grid grid-cols-1 gap-y-[18px] md:gap-y-[28px] max-w-[777px] mx-auto mt-[37px] md:mt-[60px]">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full bg-primary rounded-[15px] md:rounded-[28px] p-[4px] md:p-[7px] pb-[7px] md:pb-[11px]"
              >
                <div className="bg-[#F9F9F9] w-full rounded-[15px] md:rounded-[28px] flex items-center gap-x-[15px] md:gap-x-[27px] px-[15px] md:px-[33px] py-[24px] md:py-[32px]">
                  <img
                    src={icon1}
                    alt=""
                    className="max-w-[30px] md:max-w-[42px] object-contain w-full"
                  />
                  <h1 className="text-cmn text-left text-[#1D1D1D] text-[14px] md:text-[24px] font-medium leading-normal uppercase">
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <p className="md:text-center font-obviously-wide text-[16px] md:text-[24px] font-medium capitalize leading-normal text-[#C1C1C1] mt-[40px] md:mt-[64px]">
            We believe that straight-line selling is ineffective. Instead, we
            focus on empathy-driven influence. No one wants to be sold, but
            everyone loves to buy. We emphasize providing opportunities and
            never pushing for a sale, creating a seamless and natural process.
          </p>

          <img
            src={onboardingbtn}
            alt=""
            className="max-w-[340px] md:max-w-[366px] object-contain w-full mt-[40px] md:mt-[60px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusivePerks;
