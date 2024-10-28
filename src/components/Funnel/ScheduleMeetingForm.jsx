import React, { useEffect } from "react";
import {
  IF_email,
  IF_instagram,
  IF_linkedin,
  IF_phone,
  IF_sms,
  IF_user,
  IF_whatsapp,
} from "../../utils/icons/funnelIcons";
import useScrollAnimation from "../../lib/hooks/useScrollAnimation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const ScheduleMeetingForm = () => {
  const navigate = useNavigate();
  const { inView } = useScrollAnimation();

  const { scrollY: sY } = useScroll();
  const y = useTransform(sY, [0, 1000], [0, -500]);

  useEffect(() => {
    const handleScroll = () => {
      inView.applyInView("ScheduleMeetingForm", 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { addToast } = useToasts();

  const handleSubmit = async () => {
    addToast("Schedule submitted successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  return (
    <motion.div
      id="ScheduleMeetingForm"
      animate={{
        filter: inView.isInView ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ duration: 0.2 }}
      style={{
        y,
      }}
      className="bg-[#163078] py-[33px] md:py-[62px]"
    >
      <div className="container">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView.isInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="max-w-[643px] w-full mx-auto"
        >
          <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
            <div className="max-w-[20px] md:max-w-[32px]">{IF_user}</div>
            <input
              type="text"
              placeholder="full Name"
              required={true}
              className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
            />
          </div>
          <div className="mt-[30px] md:mt-[44px]">
            <h1 className="text-cmn text-[#F9F9F9] text-[16px] md:text-[20px] font-medium capitalize">
              How should we contact You
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] md:gap-[14px] max-w-[544px] mx-auto mt-[44px]">
              <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                <div className="max-w-[20px] md:max-w-[32px]">{IF_email}</div>
                <input
                  type="email"
                  placeholder="E.mail"
                  required={true}
                  className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                />
              </div>
              <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                <div className="max-w-[20px] md:max-w-[32px]">{IF_phone}</div>
                <input
                  type="tel"
                  placeholder="Phone Call"
                  required={true}
                  className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                />
              </div>
              <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                <div className="max-w-[20px] md:max-w-[32px]">
                  {IF_whatsapp}
                </div>
                <input
                  type="text"
                  placeholder="WhatsApp"
                  required={true}
                  className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                />
              </div>
              <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                <div className="max-w-[20px] md:max-w-[32px]">{IF_sms}</div>
                <input
                  type="text"
                  placeholder="SMS"
                  required={true}
                  className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                />
              </div>
              <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                <div className="max-w-[20px] md:max-w-[32px]">
                  {IF_linkedin}
                </div>
                <input
                  type="text"
                  placeholder="Linkedin"
                  required={true}
                  className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                />
              </div>
              <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                <div className="max-w-[20px] md:max-w-[32px]">
                  {IF_instagram}
                </div>
                <input
                  type="text"
                  placeholder="Instagram"
                  required={true}
                  className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                />
              </div>
            </div>
            <button
              onClick={() => handleSubmit()}
              className="w-[214px] h-[51px] md:w-[363px] md:h-[84px] border-b-[6px] md:!border-b-[8px] border-x-[4px] border-t-[2px] border-primary rounded-[7px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[11px] md:text-[20px] font-semibold leading-normal mt-[45px] md:mt-[55px] mx-auto block"
            >
              Schedule Meeting
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScheduleMeetingForm;
