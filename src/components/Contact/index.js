import "./contact.scss";
import { useRef } from "react";
import emailjs from "emailjs-com";
import apiKey from "./emailkey.js";

function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <div id="contact" className="footer-contact">
      <h3 className="section__subtitle">Contáctame</h3>
      <div className="footer-contact__container">
        <div className="footer-contact__info">
          <h4>¡Enviame un mensaje!</h4>
          <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit</p>
        </div>
        <form
          ref={form}
          className="footer-contact__form"
          onSubmit={handleSubmit}
        >
          <fieldset className="footer-contact__form-atributes-group">
            <input
              className="form-input"
              type="text"
              placeholder="Nombre"
              name="user_name"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Email"
              name="user_email"
            />
          </fieldset>
          <textarea
            className="form-input"
            placeholder="Mensaje"
            id="areatext"
            spellCheck="false"
            name="message"
          />
          <input type="submit" value="Enviar" className="button-primary" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
