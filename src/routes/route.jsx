import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OutsourcingSales from "../pages/OutsourcingSales/OutsourcingSales";
import LeadGeneration from "../pages/LeadGeneration/LeadGeneration";

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
    ],
  },
]);
