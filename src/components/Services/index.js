import "./services.scss";
import HTML from "../../assets/sections/html.svg";
import CSS from "../../assets/sections/css.svg";
import JS from "../../assets/sections/js.svg";
import SASS from "../../assets/sections/sass.svg";
import REACT from "../../assets/sections/react.svg";
import { useState } from "react";

function Services() {
  const [cardText, setCardText] = useState("");

  function handleMouseEnter() {
    setCardText(() => {
      <ul className="section-services__card-text">
        <li>Etiquetas semánticas</li>
        <li>SEO básico</li>
        <li>Listas</li>
        <li>Formularios y validaciones</li>
        <li>Conveciones y mejores prácticas</li>
      </ul>;
    });
  }

  function handleMouseLeave() {
    setCardText(() => {
      return <h4 className="section-services__card-name">HTML</h4>;
    });
  }
  return (
    <section id="#services" className="section section-services">
      <h3 className="section__subtitle">Servicios</h3>
      <hr />
      <div className="section-services_container">
        <div
          className="card section-services__card"
          id="card1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section-services__card-logo">
            <img src={HTML} />
          </div>
          <div></div>
        </div>
        <div className="card section-services__card" id="card2">
          <div className="section-services__card-logo">
            <img src={CSS} />
          </div>
          <div>
            <h4 className="section-services__card-name">CSS</h4>
            <ul className="section-services__card-text">
              <li>Selectores</li>
              <li>Especificidad</li>
              <li>Posicionamiento</li>
              <li>Metodología BEM</li>
              <li>Pseudoclases y pseudoelementos</li>
              <li>Box model</li>
              <li>Flexbox y grid</li>
              <li>Diseño responsive y media querys</li>
              <li>Animaciones</li>
            </ul>
          </div>
        </div>
        <div className="card section-services__card" id="card3">
          <div className="section-services__card-logo">
            <img src={SASS} />
          </div>
          <div>
            <h4 className="section-services__card-name">SASS</h4>
            <ul className="section-services__card-text">
              <li>Anidación</li>
              <li>Mixing</li>
              <li>Variables</li>
              <li>Modificar</li>
            </ul>
          </div>
        </div>
        <div className="card section-services__card" id="card4">
          <div className="section-services__card-logo">
            <img src={JS} />
          </div>
          <div>
            <h4 className="section-services__card-name">JAVASCRIPT</h4>
            <ul className="section-services__card-text">
              <li>Variables</li>
              <li>Operadores</li>
              <li>Concatenación</li>
              <li>Condicionales</li>
              <li>Arrays</li>
              <li>Bucles e iteraciones</li>
              <li>Funciones</li>
              <li>POO</li>
              <li>Métodos</li>
              <li>Objetos</li>
              <li>Manipulación de DOM básica</li>
              <li>Async/await y fetch API </li>
            </ul>
          </div>
        </div>
        <div className="card section-services__card" id="card5">
          <div className="section-services__card-logo">
            <img src={REACT} />
          </div>
          <div>
            <h4 className="section-services__card-name">REACT</h4>
            <ul className="section-services__card-text">
              <li>React app</li>
              <li>Componentes</li>
              <li>Virtual dom</li>
              <li>JSX</li>
              <li>Api context</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
