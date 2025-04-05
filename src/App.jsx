import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/route";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 50,
  delay: 0,
});

function App() {
  return <RouterProvider router={router} />
}

export default App;
