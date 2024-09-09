import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OutsourcingSales from "../pages/OutsourcingSales/OutsourcingSales";

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
        path: "/home",
        element: <OutsourcingSales />,
      },
    ],
  },
]);
