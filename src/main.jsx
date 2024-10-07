import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ThemeProvider>
  </StrictMode>
);
