/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import back from "../../../assets/icons/outsourcing-sales/back.png";

const WCBackElement = ({ className }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={`${className}`}>
      <img src={back} alt="" className="" />
    </button>
  );
};

export default WCBackElement;
