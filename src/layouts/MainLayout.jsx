import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div className="overflow-hidden">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
