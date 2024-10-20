import animated from "../../../assets/images/outsourcing-sales/what-is-inside-sell/animated.gif";

const WIISell1 = () => {
  return (
    <div className="">
      <h1
        data-aos="fade-up"
        className="text-cmn font-bold text-[24px] md:text-[40px] uppercase leading-normal text-primary text-center"
      >
        What Is Inside Sales?
      </h1>
      <p
        data-aos="fade-up"
        className="text-[16px] md:text-[20px] font-medium text-center text-[#C1C1C1] capitalize font-obviously-wide leading-normal mt-[24px] md:mt-[75px]"
      >
        Inside sales refers to the process of selling products or services to
        potential customers remotely, rather than in person. Outsourced inside
        sales teams provide businesses with a scalable, cost-effective solution
        to drive revenue growth. Managing inside sales teams is straightforward,
        as these teams are typically staffed by trained sales professionals with
        the expertise and resources to handle various aspects of the sales
        process, including lead generation, prospecting, qualifying, and closing
        deals.
      </p>

      <img src={animated} alt="" className="object-contain mx-auto" />
    </div>
  );
};

export default WIISell1;
