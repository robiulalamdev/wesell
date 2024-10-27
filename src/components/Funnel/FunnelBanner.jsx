import Header from "../shared/header/Header";
import bg from "../../assets/images/funnel/banner/bg.png";
import popupbg from "../../assets/images/funnel/banner/popupbg.png";
import popupImg1 from "../../assets/images/funnel/banner/popupImg1.png";

import { useRef, useState } from "react";
import {
  I_F1,
  I_F2,
  I_F3,
  I_F4,
  I_F5,
  I_FRight_arrow,
} from "../../utils/icons/funnelIcons";

import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useToasts } from "react-toast-notifications";

const FunnelBanner = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dateA, setDateA] = useState("");
  const [dateB, setDateB] = useState("");

  const dateARef = useRef();
  const dateBRef = useRef();

  const navigate = useNavigate();
  const { blurScale } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      blurScale.applyBlurScale("hbanner", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { addToast } = useToasts();

  const handleSubmit = () => {
    if (!dateA || !dateB) {
      addToast("Date is required", {
        appearance: "warning",
        autoDismiss: true,
      });
      return;
    }

    addToast("Schedule submitted successfully", {
      appearance: "success",
      autoDismiss: true,
    });
    setDateA("");
    setDateB("");
    setOpenModal(false);
  };
  return (
    <motion.div
      id="hbanner"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`min-h-[800px] pb-[350px] md:pb-[250px] ${
        blurScale.isBlurred ? "blur-sm" : "blur-none"
      }`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <Header />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: blurScale.scale }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="max-w-[979px] mx-auto"
        >
          <h1
            data-aos="zoom-out-up"
            data-aos-duration="900"
            className="text-cmn text-white font-bold text-[24px] md:text-[48px] uppercase mt-[42px] md:mt-[32px]"
          >
            Join a Team That’s Focused on Helping You Succeed!
          </h1>
          <p
            data-aos="zoom-out-up"
            data-aos-duration="900"
            className="text-cmn text-[#C1C1C1] text-[16px] md:text-[24px] font-medium capitalize mt-[31px] md:mt-[62px]"
          >
            We’re not just selling—we’re sharing life-changing opportunities. At
            WeSell, we’re passionate about helping you unlock your potential
            through a unique blend of sales expertise and management skills.
          </p>

          <button
            data-aos="fade-up"
            data-aos-duration="900"
            onClick={() => setOpenModal(!openModal)}
            className="w-[288px] h-[84px] !border-b-[8px] hover:border-b-[9px] border-x-[4px] border-t-[2px] border-[#971A53] rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[14px] md:text-[22px] font-semibold leading-normal mt-[31px] md:mt-[62px] mx-auto block"
          >
            Join the Team
          </button>

          <div className="w-full rounded-[24px] bg-[#0D0D0D] pt-[6px] px-[6px] pb-[16px] mt-[61px]">
            <div className="flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap gap-[32px] bg-[#F9F9F9] rounded-[24px] px-[44px] py-[33px]">
              <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[14px]">
                <div className="flex justify-center items-center max-w-[78px] md:max-w-[103px]">
                  {I_F3}
                </div>
                <h1 className="text-cmn text-[#1D1D1D] text-[14px] md:text-[20px] font-medium capitalize">
                  Opportunity Sharing
                </h1>
              </div>
              <div className="max-w-[91px] hidden md:block">
                {I_FRight_arrow}
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[14px]">
                <div className="flex justify-center items-center max-w-[78px] md:max-w-[103px]">
                  {I_F4}
                </div>
                <h1 className="text-cmn text-[#1D1D1D] text-[14px] md:text-[20px] font-medium capitalize">
                  Grow as a Leader
                </h1>
              </div>
              <div className="max-w-[91px] hidden md:block">
                {I_FRight_arrow}
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[14px]">
                <div className="flex justify-center items-center max-w-[78px] md:max-w-[103px]">
                  {I_F5}
                </div>
                <h1 className="text-cmn text-[#1D1D1D] text-[14px] md:text-[20px] font-medium capitalize">
                  Build a Future
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className={`${
          openModal ? "block" : "hidden"
        } fixed top-0 bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in flex justify-center items-center bg-transparent outline-none border-none shadow-none px-[12px] md:px-0`}
      >
        <div
          className="max-w-[982px] w-full min-h-[600px] h-fit rounded-b-[16px] border-b-[16px] border-[#0D0D0D] relative pb-[67px] md:pb-[87px]"
          style={{
            backgroundImage: `url(${popupbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            onClick={() => setOpenModal(false)}
            className="w-[37px] h-[37px] flex justify-center items-center absolute top-[23px] right-[18px] z-50 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M12.8347 13.3281L38.9977 39.4911"
                stroke="white"
                strokeWidth="4.18868"
                strokeLinecap="round"
              />
              <path
                d="M13.3284 39.4912L39.4913 13.3283"
                stroke="white"
                strokeWidth="4.18868"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="px-[12px]">
            <img
              src={popupImg1}
              alt=""
              className="max-w-[242px] md:max-w-[373px] w-full h-full object-contain mx-auto mt-[68px] md:mt-[87px]"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[15px] md:gap-[25px] mt-[62px]">
            <DatePicker
              ref={dateBRef}
              selected={dateA}
              onChange={(date) => setDateA(date)}
              customInput={
                <div
                  onClick={() => dateARef.current.click()}
                  className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-[182px] h-[39px] md:w-[309px] md:h-[67px] px-[18px]"
                >
                  <div className="max-w-[12px] md:max-w-[32px]">{I_F1}</div>
                  <h1 className="text-cmn text-left text-[#F2F2F2] text-[10px] md:text-[14px] font-medium capitalize">
                    {dateA
                      ? moment(dateA).format("DD MMM YYYY")
                      : "Select Date"}
                  </h1>
                </div>
              }
            />
            <DatePicker
              ref={dateBRef}
              selected={dateB}
              onChange={(date) => setDateB(date)}
              showTimeSelect
              showTimeSelectOnly
              timeFormat="p"
              timeIntervals={15}
              customInput={
                <div
                  onClick={() => dateBRef.current.click()}
                  className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-[182px] h-[39px] md:w-[309px] md:h-[67px] px-[18px]"
                >
                  <div className="max-w-[12px] md:max-w-[32px]">{I_F2}</div>
                  <h1 className="text-cmn text-left text-[#F2F2F2] text-[10px] md:text-[14px] font-medium capitalize">
                    {dateB ? moment(dateB).format("hh:mm A") : "Select time"}
                  </h1>
                </div>
              }
            />
          </div>

          <button
            onClick={() => handleSubmit()}
            className="w-[214px] h-[51px] md:w-[363px] md:h-[84px] border-b-[6px] md:!border-b-[8px] border-x-[4px] border-t-[2px] border-primary rounded-[7px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[11px] md:text-[20px] font-semibold leading-normal mt-[45px] md:mt-[55px] mx-auto block"
          >
            Schedule Meeting
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FunnelBanner;
