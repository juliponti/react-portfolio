import NavLogo from "../../assets/navbar/icons8-rebel.svg";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar__section-container">
      <img src={NavLogo} alt="yellow crown logo" className="navbar__logo-img" />
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default Navbar;
