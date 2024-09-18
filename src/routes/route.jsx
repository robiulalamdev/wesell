import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OutsourcingSales from "../pages/OutsourcingSales/OutsourcingSales";
import LeadGeneration from "../pages/LeadGeneration/LeadGeneration";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <OutsourcingSales />,
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
    ],
  },
]);
