import "./contact.scss";

function Contact() {
  return (
    <div id="contact" className="footer-contact">
      <h3 className="section__subtitle">Contáctame</h3>
      <div className="footer-contact__container">
        <div className="footer-contact__info">
          <h4>¡Enviame un mensaje!</h4>
          <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit</p>
        </div>
        <form className="footer-contact__form">
          <fieldset className="footer-contact__form-atributes-group">
            <input className="form-input" type="text" placeholder="Nombre" />
            <input className="form-input" type="text" placeholder="Email" />
          </fieldset>
          <textarea
            className="form-input"
            placeholder="Mensaje"
            id="areatext"
          />
          <bottom type="submit" className="button-primary" value="enviar">
            Enviar
          </bottom>
        </form>
      </div>
    </div>
  );
}

export default Contact;
