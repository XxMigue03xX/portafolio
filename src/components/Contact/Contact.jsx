import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import "./Contact.css";

const Contact = ({ language }) => {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".contact-me", {
      duration: 3000,
      origin: "bottom",
      distance: "-10px",
      reset: true,
    });
    AOS.init();
  }, []);

  return (
    <section id="contact" className="contact-me">
      <h3>{language ? "CONTACTAME" : "CONTACT ME"}</h3>
      <div className="contact__items-container">
        <div className="contact__item">
          <a
            href="https://wa.me/+573054079207?text=Hola,%20quiero%20contactarte"
            target="blank"
          >
            <div className="icon-container">
              <i className="bx bxs-phone"></i>
            </div>
          </a>
          <div className="contact__info-container">
            <h5>{language ? "Teléfono" : "Phone"}</h5>
            <p>+57 3054079207</p>
          </div>
        </div>
        <div className="contact__item">
          <a
            href="https://www.linkedin.com/in/miguel-%C3%A1ngel-garavito-camargo/"
            target="blank"
          >
            <div className="icon-container">
              <i className="bx bxl-linkedin-square"></i>
            </div>
          </a>
          <h5>Linkedin</h5>
        </div>
        <div className="contact__item">
          <a href="https://github.com/XxMigue03xX" target="blank">
            <div className="icon-container">
              <i className="bx bxl-github"></i>
            </div>
          </a>
          <h5>Github</h5>
        </div>
        <div className="contact__item">
          <a href="mailto:mgaravitocamargo@gmail.com" target="blank">
            <div className="icon-container">
              <i className="bx bx-envelope"></i>
            </div>
          </a>
          <div className="contact__info-container">
            <h5>Email</h5>
            <p>mgaravitocamargo@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
