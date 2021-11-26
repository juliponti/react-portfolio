import cap from "../../assets/sections/graduation-cap.svg";
import "./experience.scss";

function Experience(){
    return(
        <section id="#experience" className="section section-experience">
            <h3 className="section-experience__subtitle">Experiencia</h3>
            <hr/>
            <div className="section-experience__container">
                <div className="card section-experience__card">
                    <div className="section-experience__card-div">
                        <div>
                            <img src={cap} className="section-experience__card-img" alt="gorro de graduación"/>
                            <div className="vl"></div>
                        </div>
                        <div className="section-experience__card-text_container">
                            <h5 className="section-experience__card-years">Mayo-Noviembre 2021</h5>
                            <h3 className="section-experience__card-title">Course[it]</h3>
                            <ul className="section-experience__card-list">
                                <li>Introducción al desarrollo web</li>
                                <li>Visual Studio Code</li>
                                <li>Terminales</li>
                                <li>Git y Github</li>
                                <li>HTML y CSS</li>
                                <li>Animaciones</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>API Context</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-experience__card-div">
                        <div>
                            <img src={cap} className="section-experience__card-img" alt="gorro de graduación"/>
                            <div className="vl"></div>
                        </div>
                        <div className="section-experience__card-text_container">
                            <h5 className="section-experience__card-years">2021-2022</h5>
                            <h3 className="section-experience__card-title">Academy</h3>
                            <p className="section-experience__card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore</p>
                        </div>
                    </div>
                </div>
                <div className="card section-experience__card">
                    <div className="section-experience__card-div">
                        <div>
                            <img src={cap} className="section-experience__card-img" alt="gorro de graduación"/>
                            <div className="vl"></div>
                        </div>
                        <div className="section-experience__card-text_container">
                            <h5 className="section-experience__card-years">2021-2022</h5>
                            <h3 className="section-experience__card-title">Academy</h3>
                            <p className="section-experience__card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore</p>
                        </div>
                    </div>
                  
                    <div className="section-experience__card-div">
                        <div>
                            <img src={cap} className="section-experience__card-img" alt="gorro de graduación"/>
                            <div className="vl"></div>
                        </div>
                        <div className="section-experience__card-text_container">
                            <h5 className="section-experience__card-years">2021-2022</h5>
                            <h3 className="section-experience__card-title">Academy</h3>
                            <p className="section-experience__card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi ad molestiae inventore</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;