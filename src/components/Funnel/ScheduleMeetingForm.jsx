import React, { useEffect, useState } from "react";
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
import { ISpinner } from "../../utils/icons/global";

const platforms = [
  { id: 1, name: "SMS", platform: "sms", icon: IF_sms },
  { id: 2, name: "Email", platform: "email", icon: IF_sms },
  { id: 3, name: "WhatsApp", platform: "sms", icon: IF_whatsapp },
  { id: 4, name: "Linkedin", platform: "sms", icon: IF_linkedin },
  { id: 5, name: "Instagram", platform: "sms", icon: IF_instagram },
];

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

  const [selectedTab, setSelectedTab] = useState(platforms[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form?.email?.value;
    const phone = form?.phone?.value;

    if (selectedTab && selectedTab?.platform === "email" && !email) {
      addToast("Email is required", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (selectedTab && selectedTab?.platform === "sms" && !phone) {
      addToast("Phone is required", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    setIsLoading(true);

    const data = {
      name,
    };

    if (selectedTab?.name === "Email") {
      data["platform"] = "email";
      data["contact"] = email;
    } else if (selectedTab?.name === "WhatsApp") {
      data["platform"] = "whatsapp";
      data["contact"] = phone;
    } else if (selectedTab?.name === "SMS") {
      data["platform"] = "sms";
      data["contact"] = phone;
    } else if (selectedTab?.name === "Linkedin") {
      data["platform"] = "linkedin";
      data["contact"] = phone;
    } else if (selectedTab?.name === "Instagram") {
      data["platform"] = "instagram";
      data["contact"] = phone;
    }

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    fetch(`https://api.ilovegoodfood.ca/join`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.status === "ok") {
          addToast("Schedule submitted successfully", {
            appearance: "success",
            autoDismiss: true,
          });
        } else {
          addToast("Schedule submitted unsuccessfully", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
        form.reset();
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
          <form onSubmit={handleSubmit}>
            {/* <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
              <div className="max-w-[20px] md:max-w-[32px]">{IF_user}</div>
              <input
                type="text"
                name="name"
                placeholder="full Name"
                required={true}
                className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
              />
            </div> */}
            <div className="mt-[30px] md:mt-[44px]">
              <h1 className="text-cmn text-[#F9F9F9] text-[16px] md:text-[20px] font-medium capitalize">
                How should we contact You
              </h1>
              <div className="max-w-[544px] mx-auto mt-[44px]">
                <h1 className="text-cmn text-left text-[#F9F9F9] text-[14px] sm:text-[16px] md:text-[17px] capitalize mb-[10px]">
                  Select platform
                </h1>

                <div
                  id="appointmentContainer"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] md:gap-[14px]"
                >
                  {platforms.map((item, index) => (
                    <div
                      onClick={() => setSelectedTab(item)}
                      key={index}
                      className={`flex items-center gap-[12px] md:gap-[23px] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px] cursor-pointer
                      ${
                        selectedTab?.name === item.name
                          ? "bg-[#FCCF3D] text-[#0D0D0D]"
                          : "bg-[#F9F9F933] text-[#FCCF3D]"
                      }
                      `}
                    >
                      <div className="max-w-[20px] md:max-w-[32px] text-current">
                        {item.icon}
                      </div>

                      <h1
                        className={`flex-grow w-full text-cmn text-left capitalize text-[10px] md:text-[14px] font-medium ${
                          selectedTab?.name === item.name
                            ? "!text-[#0D0D0D]"
                            : "text-[#F2F2F2]"
                        }`}
                      >
                        {item.name}
                      </h1>
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <h1 className="text-cmn text-left text-[#F9F9F9] text-[14px] sm:text-[16px] md:text-[17px] capitalize mb-[10px]">
                      Enter Full Name*
                    </h1>
                    <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                      <div className="max-w-[20px] md:max-w-[32px]">
                        {IF_user}
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="full Name"
                        required={true}
                        className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                      />
                    </div>
                  </div>

                  {selectedTab?.platform === "sms" && (
                    <div className="sm:col-span-2">
                      <h1 className="text-cmn text-left text-[#F9F9F9] text-[14px] sm:text-[16px] md:text-[17px] capitalize mb-[10px]">
                        Enter Phone*
                      </h1>
                      <div className="flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                        <div className="max-w-[20px] md:max-w-[32px]">
                          {IF_phone}
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Call"
                          required={true}
                          pattern="^\+[0-9]{10,15}$"
                          title="Please enter a valid phone number starting with + and containing 10-15 digits."
                          className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                        />
                      </div>
                    </div>
                  )}

                  {selectedTab?.platform === "email" && (
                    <div className="sm:col-span-2">
                      <h1 className="text-cmn text-left text-[#F9F9F9] text-[14px] sm:text-[16px] md:text-[17px] capitalize mb-[10px]">
                        Enter Email*
                      </h1>
                      <div className="col-span-2 flex items-center gap-[12px] md:gap-[23px] bg-[#F9F9F933] rounded-[5px] md:rounded-[9px] w-full h-[39px] md:h-[67px] px-[18px]">
                        <div className="max-w-[20px] md:max-w-[32px]">
                          {IF_email}
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="E.mail"
                          required={true}
                          className="flex-grow w-full h-full outline-none focus:outline-none bg-transparent focus:bg-transparent text-cmn placeholder:text-cmn text-left placeholder:text-left text-[#F2F2F2] placeholder:text-[#F2F2F2] capitalize placeholder:capitalize text-[10px] md:text-[14px] placeholder:text-[10px] md:placeholder:text-[14px] font-medium placeholder:font-medium"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-[51px] w-full md:h-[84px] border-b-[6px] md:!border-b-[8px] border-x-[4px] border-t-[2px] border-primary rounded-[7px] md:rounded-[13.573px] bg-wp hover:bg-wp/85 text-cmn font-italic text-[#0D0D0D] capitalize text-[11px] md:text-[20px] font-semibold leading-normal flex items-center justify-center gap-2 mt-[45px] md:mt-[55px] mx-auto inline-block"
                >
                  {isLoading && (
                    <div className="text-black max-w-[25px]">{ISpinner}</div>
                  )}{" "}
                  Schedule Meeting
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScheduleMeetingForm;
