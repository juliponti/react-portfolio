import NavLinks from "./NavLinks.js";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="navbar__menu mobile">
      <Hamburger onToggle={() => setOpen(!open)} />
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavigation;
