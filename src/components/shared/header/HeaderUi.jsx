/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/global/header/headerLogo.png";
import { HEADER_ROUTES } from "../../../utils/data/global";
import { IArrow_Right, IClose, IMenu } from "../../../utils/icons/global";
import { Drawer } from "@material-tailwind/react";
import bg from "../../../assets/images/global/header/bg.png";

const HeaderUi = ({ open, setOpen }) => {
  const { pathname } = useLocation();

  console.log(open);
  return (
    <>
      <div className="h-[120px] w-full flex justify-between items-center">
        <img
          src={logo}
          alt=""
          className="w-[63px] md:w-[78px] h-[47px] md:h-[58px] object-contain"
        />
        <div className="flex-grow lg:flex justify-center items-center gap-x-[22px] hidden lg:inline-block">
          {HEADER_ROUTES.map((item, index) => (
            <Link
              key={index}
              to={`/${item.path}`}
              className={`capitalize text-[16px] font-semibold font-obviously-wide leading-normal ${
                pathname.includes(item.path)
                  ? "text-primary"
                  : "text-wp hover:text-primary"
              }`}
              style={{ leadingTrim: "both", textEdge: "cap" }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="w-[150px] h-[44px] relative">
          <button className="absolute w-[150px] h-[48px] hover:w-[170px] hover:h-[55px] duration-300 bg-wp rounded-[6px] hidden lg:inline-block">
            <span
              className="text-[#0D0D0D] capitalize text-[16px] font-semibold font-obviously-wide leading-normal"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "italic",
              }}
            >
              Take Action
            </span>
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {IMenu}
        </button>
      </div>

      <Drawer
        open={open}
        size={327}
        placement="top"
        onClose={() => setOpen(false)}
        className={`bg-[#0D0D0D] !p-0 h-[327px] ${!open && "!-top-[100px]"}`}
      >
        <div
          className="w-full min-h-[312px] backdrop-blur-[87px] !bg-[#0D0D0D] relative mt-[19px]"
          style={{
            borderRadius: "32.363px",
            border: "8.091px solid #0D0D0D",
            background: `url(${bg}) lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="flex justify-end px-[28px]">
            <button onClick={() => setOpen(false)} className="">
              {IClose}
            </button>
          </div>

          <div className="grid grid-cols-1 pt-[15px]">
            {HEADER_ROUTES.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center h-[55px] border-b-[1px] border-[#FFFFFF] px-[28px]"
              >
                <Link
                  to={`/${item.path}`}
                  className={`capitalize text-[14px] font-semibold font-obviously-wide leading-normal ${
                    pathname.includes(item.path)
                      ? "text-primary"
                      : "text-wp hover:text-primary"
                  }`}
                  style={{ leadingTrim: "both", textEdge: "cap" }}
                >
                  {item.name}
                </Link>
                <button>{IArrow_Right}</button>
              </div>
            ))}

            <button
              className="bg-wp bg-opacity-[0.9] w-full h-[55px] rounded-br-[28px] rounded-bl-[28px] text-[#080808] capitalize text-[18px] font-semibold font-obviously-wide leading-[25px]"
              style={{ leadingTrim: "both", textEdge: "cap" }}
            >
              Join Now
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderUi;
