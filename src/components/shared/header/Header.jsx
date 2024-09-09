import { useState } from "react";
import HeaderUi from "./HeaderUi";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderUi open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
