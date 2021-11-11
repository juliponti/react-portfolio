import "./item-section.scss";

function itemSection(props) {
  const { link, img, alt, title, className } = props;
  return (
    <li className="navbar__menu-list-item">
      <a href={link} className="navbar__menu-link">
        <img src={img} alt={alt} className={className} />
        {title}
      </a>
    </li>
  );
}

export default itemSection;
