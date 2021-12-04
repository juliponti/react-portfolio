import bannerLogo from "../../assets/banner/pale.png";
import liLogo from "../../assets/banner/linkedin.svg";
import ghLogo from "../../assets/banner/github.svg";
import twLogo from "../../assets/banner/twitter.svg";
import igLogo from "../../assets/banner/instagram.svg";
import scroll from "../../assets/banner/scroll.png";
import "./banner.scss";

function Banner() {
  return (
    <section className="section-banner">
      <img src={bannerLogo} className="section-banner__avatar" alt="avatar" />
      <h1 className="section-banner__name">Julieta Pontino</h1>
      <h2 className="section-banner__profesion">Frontend Developer</h2>
      <ul className="section-banner__list">
        <li className="section-banner__list-item">
          <a
            href="https://www.linkedin.com/in/julieta-pontino-3a168b211/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={liLogo}
              alt="linkedin logo"
              className="section-banner__item-icon"
            />
          </a>
        </li>
        <li className="section-banner__list-item">
          <a
            href="https://github.com/juliponti"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ghLogo}
              alt="github logo"
              className="section-banner__item-icon"
            />
          </a>
        </li>
        <li className="section-banner__list-item">
          <a
            href="https://www.twitter.com/ju_ponti"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twLogo}
              alt="twitter logo"
              className="section-banner__item-icon"
            />
          </a>
        </li>
        <li className="section-banner__list-item">
          <a
            href="https://www.instagram.com/julipontino/"
            target="_blank"
            rel="noreferrer"
          >
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
        <img
          src={scroll}
          className="section-banner__scroll-icon"
          alt="scroll icon"
        />
      </a>
    </section>
  );
}

export default Banner;
