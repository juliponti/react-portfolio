//import ItemSection from "./ItemSection/itemsection.js";
import aboutMeImg from "../../assets/navbar/user-solid.svg";
import servicesImg from "../../assets/navbar/briefcase-solid.svg";
import expImg from "../../assets/navbar/graduation-cap-solid.svg";
import myWorkImg from "../../assets/navbar/layer-group-solid.svg";
import contactImg from "../../assets/navbar/comments-solid.svg";

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
    className: "navbar__menu-logo--experiencie",
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

function NavbarLinks(props) {
  return (
    <ul className="navbar__menu-list">
      {itemData.map((item) => (
        <li
          className="navbar__menu-list-item"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href={item.link} className="navbar__menu-link">
            <img src={item.img} alt={item.alt} className={item.className} />
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;
