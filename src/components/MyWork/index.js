import Img1 from "../../assets/sections/ddd.png";
import Img2 from "../../assets/sections/eee.png";
import Img3 from "../../assets/sections/fff.png";
import Img4 from "../../assets/sections/aaa.png";
import Img5 from "../../assets/sections/bbb.png";
import Img6 from "../../assets/sections/ccc.png";

import "./mywork.scss";

function MyWork() {
  return (
    <section id="my-work" className="section section-my-work">
      <h3 className="section__subtitle">Mis trabajos</h3>
      <hr />
      <div className="section-my-work__bigger-container">
        <div className="section-my-work__container">
          <div className="section-my-work__card">
            <img
              src={Img1}
              alt="question mark icon"
              className="section-my-work__img"
            />
            <a
              className="section-my-work__mask"
              href="https://juliponti.github.io/fetch-pokedex/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="section-my-work__title">Pokedex</h3>
            </a>
          </div>
          <div className="section-my-work__card">
            <img
              src={Img2}
              alt="dollar sign"
              className="section-my-work__img"
            />
            <a
              className="section-my-work__mask"
              href="https://juliponti.github.io/tip-calculator-app/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="section-my-work__title">Tip calculator app</h3>
            </a>
          </div>

          <div className="section-my-work__card">
            <img
              src={Img3}
              alt="cat with yellow bills"
              className="section-my-work__img"
            />
            <a
              className="section-my-work__mask"
              href="https://juliponti.github.io/meli-react-app/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="section-my-work__title">MeLi React app</h3>
            </a>
          </div>
        </div>
        <div className="section-my-work__container">
          <div className="section-my-work__card">
            <img
              src={Img4}
              alt="octopus icon"
              className="section-my-work__img"
            />
            <a
              className="section-my-work__mask"
              href="https://juliponti.github.io/to-do-list/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="section-my-work__title">To do list </h3>
            </a>
          </div>
          <div className="section-my-work__card">
            <img
              src={Img5}
              alt="avatar girl"
              className="section-my-work__img"
            />
            <a className="section-my-work__mask">
              <h3 className="section-my-work__title">Project title </h3>
            </a>
          </div>
          <div className="section-my-work__card">
            <img
              src={Img6}
              alt="girl with a smartphone"
              className="section-my-work__img"
            />
            <a className="section-my-work__mask">
              <h3 className="section-my-work__title">Project title </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWork;
