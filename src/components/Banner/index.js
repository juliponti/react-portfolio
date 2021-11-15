import bannerLogo from "../../assets/banner/pale.png";
import liLogo from "../../assets/banner/linkedin.svg";
import ghLogo from "../../assets/banner/github.svg";
import twLogo from "../../assets/banner/twitter.svg";
import igLogo from "../../assets/banner/instagram.svg";
import scroll from "../../assets/banner/scroll.png";
import "./banner.scss";

function Banner(props) {
  const { name, profesion, liUser, ghUser, twUser, igUser } = props;

  return (
    <section className="section-banner">
      <img src={bannerLogo} className="section-banner__avatar" alt="avatar" />
      <h1 className="section-banner__name">{name}</h1>
      <h2 className="section-banner__profesion">{profesion}</h2>
      <ul className="section-banner__list">
        <li className="section-banner__list-item">
          <a href={() => "https://www.linkedin.com/" + liUser} target="_blank">
            <img
              src={liLogo}
              alt="linkedin logo"
              className="section-banner__item-icon"
            />
          </a>
        </li>
        <li className="section-banner__list-item">
          <a href={() => "https://github.com/" + ghUser} target="_blank">
            <img
              src={ghLogo}
              alt="github logo"
              className="section-banner__item-icon"
            />
          </a>
        </li>
        <li className="section-banner__list-item">
          <a href={() => "https://www.twitter.com/" + twUser} target="_blank">
            <img
              src={twLogo}
              alt="twitter logo"
              className="section-banner__item-icon"
            />
          </a>
        </li>
        <li className="section-banner__list-item">
          <a href={() => "https://www.instagram.com/" + igUser} target="_blank">
            <img
              src={igLogo}
              alt="instagram logo"
              className="section-banner__item-icon"
            />
          </a>
        </li>
      </ul>
      <a href="#contact" className="button-primary">
        Contáctame
      </a>
      <a href="#about-me" className="section-banner__scroll">
        <span>Scroll down</span>
        <img src={scroll} className="section-banner__scroll-icon" />
      </a>
    </section>
  );
}

export default Banner;
