import "./services.scss";
import HTML from "../../assets/sections/icons8-html-5-512.png";
import CSS from "../../assets/sections/icons8-css3-512.png";
import JS from "../../assets/sections/icons8-logotipo-de-javascript-512.png";

function Services() {
  return (
    <section id="#services" className="section section-services">
      <h3 className="section-subtitle">Servicios</h3>
      <div className="section-services_container">
        <div className="card section-services__card">
          <div className="section-services__card-logo">
            <img src={HTML} />
          </div>
          <div>
            <h4 className="section-services__card-name">HTML</h4>
            <p className="section-services__card-text">
              Lorem ipsum dolor sit amet, consectetur adipis
            </p>
          </div>
        </div>
        <div className="card section-services__card">
          <div className="section-services__card-logo">
            <img src={CSS} />
          </div>
          <div>
            <h4 className="section-services__card-name">CSS/SASS</h4>
            <p className="section-services__card-text">
              Lorem ipsum dolor sit amet, con
            </p>
          </div>
        </div>
        <div className="card section-services__card">
          <div className="section-services__card-logo">
            <img src={JS} />
          </div>
          <div>
            <h4 className="section-services__card-name">JAVASCRIPT</h4>
            <p className="section-services__card-text">
              Lorem ipsum dolor sit amet{" "}
            </p>
          </div>
        </div>
        <div className="card section-services__card">
          <div className="section-services__card-logo">
            <img />
          </div>
          <div>
            <h4 className="section-services__card-name">REACT</h4>
            <p className="section-services__card-text">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
