import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OutsourcingSales from "../pages/OutsourcingSales/OutsourcingSales";
import LeadGeneration from "../pages/LeadGeneration/LeadGeneration";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/outsourcing-sales",
        element: <OutsourcingSales />,
      },
      {
        path: "/lead-generation",
        element: <LeadGeneration />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
