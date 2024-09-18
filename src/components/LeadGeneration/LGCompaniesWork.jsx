import bg from "../../assets/images/lead-generation/companies-work/bg.png";
import animated from "../../assets/images/lead-generation/companies-work/animated.gif";

const LGCompaniesWork = () => {
  return (
    <div
      className="min-h-[800px] py-[100px] relative top-[50px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full h-full container"
        style={{
          backgroundImage: `url(${animated}), url(${animated})`,
          backgroundPosition: "bottom left, top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "170px",
        }}
      >
        <div className="pt-[70px] md:pt-[129px] max-w-[786px] mx-auto pb-[100px] md:pb-[117px]">
          <h1 className="text-cmn font-bold text-[#F9F9F9] text-[20px] md:text-[40px] uppercase">
            How Do Lead Generation Outsourcing Companies Work?
          </h1>
          <p className="text-cmn text-[#C1C1C1] capitalize text-[16px] md:text-[20px] mt-[70px] md:mt-[65px]">
            Lead generation outsourcing companies provide a valuable service to
            businesses looking to increase their sales and revenue. B2B lead
            generation outsourcing allows businesses to focus on their key
            strengths and hand the lead generation process to professionals.
            <br /> <br />
            WeSell uses various approaches, such as email marketing campaigns,
            telemarketing, and social media outreach, to generate high-quality
            leads for our clients. With our experience and expertise, we can
            identify potential clients and nurture relationships, increasing the
            likelihood of successful conversions.
            <br /> <br />
            B2B sales lead generation is a critical component of a successful
            sales strategy, and outsourcing this process to WeSell, with our
            best-in-class lead generation processes, can save time and resources
            while delivering significant returns on investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LGCompaniesWork;
