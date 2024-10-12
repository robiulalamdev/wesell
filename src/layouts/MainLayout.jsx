import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <div className="overflow-hidden">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
