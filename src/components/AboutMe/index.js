import Avatar from "../../assets/sections/pale-129.png";
import CV from "../../assets/PontinoJulieta-CV-ES.pdf";
import "./aboutme.scss";

const AboutMe = () => {
  return (
    <section id="about-me" className="section section-about-me">
      <h3 className="section__subtitle">About me</h3>
      <hr />
      <div className="section-about-me__container">
        <div className="section-about-me__up-container">
          <div className="section-about-me__avatar-container">
            <img
              src={Avatar}
              alt="female avatar with a cup of coffe"
              className="section-about-me__avatar"
            />
          </div>

          <div className=" section-about-me__card">
            <div className="section-about-me__card-info">
              <p>
                Are you searching for a talented and driven Frontend Developer
                to elevate your digital presence and deliver captivating user
                experiences? Look no further! With a deep-rooted passion for web
                development I thrive in the ever-evolving world of technology,
                staying up to date with the latest trends and industry best
                practices. My goal is to create visually stunning and
                user-friendly interfaces that leave a lasting impact on users.
                {" "}
                I'm from Argentina, Buenos Aires 
              </p>
            </div>
            <form method="get" action={CV} target="_blank" rel="noreferrer">
              <button className="button-primary">Download CV</button>
            </form>
          </div>
        </div>
        <div className=" card section-about-me__card-switches ">
          <span>HTML5</span>
          <div className="section-about-me__skill-bar">
            <div className="section-about-me__skill-bar--html"></div>
          </div>
          <span>CSS3</span>
          <div className="section-about-me__skill-bar">
            <div className="section-about-me__skill-bar--css"></div>
          </div>
          <span>SASS</span>
          <div className="section-about-me__skill-bar">
            <div className="section-about-me__skill-bar--sass"></div>
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
    </section>
  );
};

export default AboutMe;
