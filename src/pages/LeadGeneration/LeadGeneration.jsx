import LGBanner from "../../components/LeadGeneration/LGBanner";
import LGCompaniesWork from "../../components/LeadGeneration/LGCompaniesWork";
import LGService from "../../components/LeadGeneration/LGService";

const LeadGeneration = () => {
  return (
    <div className="bg-black">
      <LGBanner />
      <LGService />
      <LGCompaniesWork />
    </div>
  );
};

export default LeadGeneration;
