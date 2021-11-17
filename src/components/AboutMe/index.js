import Avatar from "../../assets/sections/pale-129.png";
import CV from "../../assets/CV-PONTINO-JULIETA-ES.pdf";
import "./aboutme.scss";

function AboutMe() {
  return (
    <section id="about-me" className="section section-about-me">
      <h3 className="section__subtitle">Sobre mi</h3>
      <hr />
      <div className="section-about-me__container">
        <div className="section-about-me__avatar-container">
          <img
            src={Avatar}
            alt="female avatar with a cup of coffe"
            className="section-about-me__avatar"
          />
        </div>
        <div className="section-about-me__right-container">
          <div className=" section-about-me__card">
            <div className="section-about-me__card-info">
              <p>
                Hola! Soy una desarrolladora frontend en progreso. Comencé a
                adentrarme en el mundo It en Mayo de 2021 y me encantó. Estoy en
                busca de mi primera oportunidad laboral y no puedo esperar a
                tenerla! Realicé todos los cursos certificados de frontend en
                <a
                  href="https://courseit.io/"
                  target="_blank"
                  className="p-first-link"
                >
                  {" "}
                  Course[It]
                </a>{" "}
                y estudio mucho por mi cuenta a través de diversas fuentes como
                Youtube, FreeCodeCamp y el abanico de posibilidades y
                herramientas que afortunadamente nos brinda internet hoy en día.
                También complemento para poner en práctica lo aprendido haciendo
                challenges en {""}
                <a
                  href="https://www.frontendmentor.io/"
                  target="_blank"
                  className="p-second-link"
                >
                  {""} FrontendMentor .
                </a>
              </p>
            </div>
            <form method="get" action={CV} target="_blank">
              <button className="button-primary">Descargar CV</button>
            </form>
          </div>
          <div className=" card section-about-me__card-switches ">
            <span>HTML5</span>
            <div className="section-about-me__skill-bar">
              <div className="section-about-me__skill-bar--html"></div>
            </div>
            <span>CSS3/SASS</span>
            <div className="section-about-me__skill-bar">
              <div className="section-about-me__skill-bar--css"></div>
            </div>
            <span>JAVASCRIPT</span>
            <div className="section-about-me__skill-bar">
              <div className="section-about-me__skill-bar--js"></div>
            </div>
            <span>REACT</span>
            <div className="section-about-me__skill-bar">
              <div className="section-about-me__skill-bar--react"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
