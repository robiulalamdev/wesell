import animated from "../../assets/images/lead-generation/service/animated.gif";

const LGService = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${animated}), url(${animated})`,
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "220px",
      }}
    >
      <div className="pt-[70px] md:pt-[102px] max-w-[786px] mx-auto pb-[100px] md:pb-[117px]">
        <h1 className="text-cmn font-bold text-[#F9F9F9] text-[20px] md:text-[40px] uppercase">
          B2B Lead Generation Outsourcing & Services
        </h1>
        <p className="text-cmn text-[#C1C1C1] capitalize text-[16px] md:text-[20px] mt-[70px] md:mt-[65px]">
          Lead generation outsourcing has become increasingly popular in recent
          years. By partnering with WeSell for outsourced lead generation
          services, businesses can focus on their core competencies while
          letting experts handle the complex and time-consuming task of
          generating leads. This helps companies prioritize other critical tasks
          while benefiting from specialized lead generation strategies. <br />{" "}
          <br />
          Outsourcing B2B lead generation can also provide a cost-effective
          solution, eliminating the need to hire and train an in-house team,
          which can be expensive and time-consuming. Additionally, outsourcing
          allows companies to access a pool of experienced professionals with
          the skills and tools necessary to identify, qualify, and nurture leads
          effectively. This results in higher-quality leads, more efficient
          lead-generation processes, and ultimately increased revenue. With B2B
          lead generation outsourcing, businesses can free up resources,
          streamline their operations, and focus on driving growth.
        </p>
        <div className="flex justify-center">
          <button
            className="w-[170px] h-[55px] hover:w-[210px] hover:h-[63px] hover:md:w-[320px] hover:md:h-[103px] md:w-[288px] md:h-[93px] duration-200 ease-linear !border-b-[6px] hover:border-b-[9px] border-x-[2px] border-t-[2px] border-primary rounded-[8px] md:rounded-[13.573px] bg-wp text-[#0D0D0D] capitalize text-[14px] md:text-[22px] xl:text-[27.146px] font-semibold font-obviously-wide leading-normal mt-[36px] md:mt-[75px]"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontStyle: "italic",
            }}
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LGService;
