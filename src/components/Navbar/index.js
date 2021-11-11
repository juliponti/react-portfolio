import NavLogo from "../../assets/navbar/navlogo.png";
import ItemSection from "./ItemSection";
import aboutMeImg from "../../assets/navbar/user-solid.svg";
import servicesImg from "../../assets/navbar/briefcase-solid.svg";
import expImg from "../../assets/navbar/graduation-cap-solid.svg";
import myWorkImg from "../../assets/navbar/layer-group-solid.svg";
import contactImg from "../../assets/navbar/comments-solid.svg";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar__section-container">
      <img src={NavLogo} alt="yellow crown logo" className="navbar__logo-img" />
      <nav className="navbar__menu">
        <ul className="navbar__menu-list">
          <ItemSection
            link="#about-me"
            img={aboutMeImg}
            alt="user icon"
            title="Sobre mi"
            className="navbar__menu-logo"
          />
          <ItemSection
            link="#services"
            img={servicesImg}
            alt="briefcase icon"
            title="Servicios"
            className="navbar__menu-logo"
          />
          <ItemSection
            link="#experiencies"
            img={expImg}
            alt="graduation cap icon"
            title="Experencia"
            className="navbar__menu-logo--experiencies"
          />
          <ItemSection
            link="#my-work"
            img={myWorkImg}
            alt="layer group icon"
            title="Mis Proyectos"
            className="navbar__menu-logo"
          />
          <ItemSection
            link="#contact"
            img={contactImg}
            alt="comments icon"
            title="Contacto"
            className="navbar__menu-logo--contact"
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
