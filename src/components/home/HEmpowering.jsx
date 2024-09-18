import { ANIMATED_IMAGES } from "../../utils/data/global";
import img1 from "../../assets/images/home/empowering/img1.png";

const HEmpowering = () => {
  return (
    <div className="bg-[#1D1D1D] pt-[76px] pb-[100px] hidden md:block">
      <div className="container">
        <div className="max-w-[1018px] mx-auto">
          <h1 className="text-cmn text-[#F9F9F9] text-[36px] font-bold leading-normal uppercase">
            Empowering the next generation of business leaders
          </h1>
          <p className="text-cmn text-[#C1C1C1] leading-normal font-medium text-[16px] mt-[57px] capitalize">
            In today&apos;s competitive landscape, many young entrepreneurs
            aspire to achieve financial freedom but lack the essential skills in
            sales and management to build a sustainable and successful career.
            While AI tools are transforming industries, the true power lies in
            mastering the fundamentals of sales and management. At WeSell, we
            recognize that without the right guidance and hands-on experience,
            these ambitious individuals may struggle to turn their potential
            into real ownership and long-term success. There is a need for a
            program that not only teaches these core disciplines but also
            provides the opportunity to leverage advanced tools and create a
            pathway to owning a cashflow-positive business.
          </p>

          <img
            src={ANIMATED_IMAGES.REVEAL_LOADING}
            alt=""
            className="max-w-[262px] w-full object-contain mx-auto mt-[56px]"
          />

          {/* <h1 className="text-cmn font-italic font-medium text-[24px] text-[#FFFFFF] uppercase mt-[56px]">
            entrepreneur
          </h1> */}

          <img
            src={img1}
            alt=""
            className="object-contain max-w-[852px] w-full mx-auto mt-[56px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HEmpowering;
