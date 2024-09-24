import ABanner from "../../components/AboutUs/ABanner";
import ACareerOpportunities from "../../components/AboutUs/ACareerOpportunities/ACareerOpportunities";
import AManagementPrograms from "../../components/AboutUs/AManagementPrograms";
import AOurMission from "../../components/AboutUs/AOurMission";
import ExclusivePerks from "../../components/AboutUs/ExclusivePerks";

const AboutUs = () => {
  return (
    <div>
      <ABanner />
      <AOurMission />
      <AManagementPrograms />
      <ExclusivePerks />
      <ACareerOpportunities />
    </div>
  );
};

export default AboutUs;
