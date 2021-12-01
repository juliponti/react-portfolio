import NavLogo from "../../assets/navbar/icons8-rebel.svg";
import ItemSection from "./ItemSection";
import aboutMeImg from "../../assets/navbar/user-solid.svg";
import servicesImg from "../../assets/navbar/briefcase-solid.svg";
import expImg from "../../assets/navbar/graduation-cap-solid.svg";
import myWorkImg from "../../assets/navbar/layer-group-solid.svg";
import contactImg from "../../assets/navbar/comments-solid.svg";
import "./navbar.scss";

const itemData = [
  {
    link: "#about-me",
    img: aboutMeImg,
    alt: "user icon",
    title: "Sobre mi",
    className: "navbar__menu-logo",
  },
  {
    link: "#services",
    img: servicesImg,
    alt: "briefcase icon",
    title: "Servicios",
    className: "navbar__menu-logo",
  },
  {
    link: "#experience",
    img: expImg,
    alt: "graduation cap icon",
    title: "Experencia",
    className: "navbar__menu-logo--experiencies",
  },
  {
    link: "#my-work",
    img: myWorkImg,
    alt: "layer group icon",
    title: "Mis Proyectos",
    className: "navbar__menu-logo",
  },
  {
    link: "#contact",
    img: contactImg,
    alt: "comments icon",
    title: "Contacto",
    className: "navbar__menu-logo--contact",
  },
];

function Navbar() {
  return (
    <div className="navbar__section-container">
      <img src={NavLogo} alt="yellow crown logo" className="navbar__logo-img" />
      <nav className="navbar__menu">
        <ul className="navbar__menu-list">
          {itemData.map((item) => (
            <ItemSection {...item} key={itemData.title} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;