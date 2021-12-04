import NavLinks from "./NavLinks.js";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <BiMenuAltRight
      className="hamburger"
      size="40px"
      color="smokewhite"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoIosCloseCircleOutline
      className="hamburger"
      size="40px"
      color="smokewhite"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className="navbar__menu mobile">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
}

export default MobileNavigation;
