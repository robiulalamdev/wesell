import WCBackElement from "../WhyChooseWeSellSection/WCBackElement";
import map from "../../../assets/images/outsourcing-sales/what-is-sell/map.png";

const WISItem5 = () => {
  return (
    <div className="container ">
      <WCBackElement className="md:hidden pt-[70px]" />
      <h1
        className="text-primary text-[20px] md:text-[40px] text-center font-semibold font-obviously-wide leading-normal md:uppercase capitalize max-w-[820px] mx-auto"
        style={{
          leadingTrim: "both",
          textEdge: "cap",
        }}
      >
        International Outsourced Sales
      </h1>
      <div className="pt-[55px] md:pt-[70px] max-w-[820px] mx-auto">
        <p className="text-cmn font-obviously-wide font-medium md:capitalize text-[#C1C1C1] text-[16px] md:text-[20px] text-center">
          International sales outsourcing is a strategic business decision that
          can help companies expand their global reach and increase revenue
          streams. By partnering with a third-party organization to manage sales
          operations in international markets, companies can effectively
          navigate the complexities of global expansion. This approach may
          include hiring and managing an international sales team, providing
          sales training and support, and implementing sales strategies tailored
          to the local market.
        </p>

        <img
          src={map}
          alt=""
          className="hidden md:block object-contain mt-[70px] max-w-[600px] mx-auto"
        />
      </div>
    </div>
  );
};

export default WISItem5;
