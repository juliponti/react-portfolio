//import ItemSection from "./ItemSection/itemsection.js";
import aboutMeImg from "../../assets/navbar/user-solid.svg";
import servicesImg from "../../assets/navbar/briefcase-solid.svg";
import expImg from "../../assets/navbar/graduation-cap-solid.svg";
import myWorkImg from "../../assets/navbar/layer-group-solid.svg";
import contactImg from "../../assets/navbar/comments-solid.svg";
import { motion } from "framer-motion";

const itemData = [
  {
    link: "#about-me",
    img: aboutMeImg,
    alt: "user icon",
    title: "About me",
    className: "navbar__menu-logo",
  },
  {
    link: "#services",
    img: servicesImg,
    alt: "briefcase icon",
    title: "Services",
    className: "navbar__menu-logo",
  },
  {
    link: "#experience",
    img: expImg,
    alt: "graduation cap icon",
    title: "Experience",
    className: "navbar__menu-logo--experiencie",
  },
  {
    link: "#my-work",
    img: myWorkImg,
    alt: "layer group icon",
    title: "My work",
    className: "navbar__menu-logo",
  },
  {
    link: "#contact",
    img: contactImg,
    alt: "comments icon",
    title: "Contact",
    className: "navbar__menu-logo--contact",
  },
];

function NavbarLinks(props) {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const aniFrom = { x: -400 };
  const aniTo = { x: 0 };

  return (
    <motion.ul
      className="navbar__menu-list"
      initial={aniFrom}
      animate={aniTo}
      transition={{ duration: 0.3 }}
    >
      {itemData.map((item) => (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          className="navbar__menu-list-item"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href={item.link} className="navbar__menu-link">
            <img src={item.img} alt={item.alt} className={item.className} />
            {item.title}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default NavbarLinks;
