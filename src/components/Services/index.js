import HTML from "../../assets/sections/html.svg";
import CSS from "../../assets/sections/css.svg";
import JS from "../../assets/sections/js.svg";
import SASS from "../../assets/sections/sass.svg";
import REACT from "../../assets/sections/react.svg";

import "./services.scss";

function Services() {
  return (
    <section id="#services" className="section section-services">
      <h3 className="section__subtitle">Servicios</h3>
      <hr />
      <div className="section-services_container">
        <div className="card section-services__card" id="card1">
          <div className="section-services__card-logo">
            <img src={HTML} alt="" />
          </div>

          <div>
            <h4 className="section-services__card-name">HTML</h4>
          </div>
        </div>
        <div className="card section-services__card" id="card2">
          <div className="section-services__card-logo">
            <img src={CSS} alt="" />
          </div>
          <div>
            <h4 className="section-services__card-name">CSS</h4>
          </div>
        </div>
        <div className="card section-services__card" id="card3">
          <div className="section-services__card-logo">
            <img src={SASS} alt="" />
          </div>
          <div>
            <h4 className="section-services__card-name">SASS</h4>
          </div>
        </div>
        <div className="card section-services__card" id="card4">
          <div className="section-services__card-logo">
            <img src={JS} alt="" />
          </div>
          <div>
            <h4 className="section-services__card-name">JAVASCRIPT</h4>
          </div>
        </div>
        <div className="card section-services__card" id="card5">
          <div className="section-services__card-logo">
            <img src={REACT} alt="" />
          </div>
          <div>
            <h4 className="section-services__card-name">REACT</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
