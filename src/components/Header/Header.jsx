import myImg from "../../assets/img/MyPhoto.jpg";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "./Header.css";

const Header = ({ language }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered) => {
    if (isHovered !== hovered) {
      setIsHovered(hovered);
    }
  };

  const backgroundStyle = {
    background: isHovered ? "var(--blue-gradient)" : "var(--orange-gradient)",
  };

  const borderStyle = () => {
    const borderColor = isHovered ? "var(--orange)" : "var(--blue)";
    return { "box-shadow": `5px 5px 10px 2px ${borderColor}` };
  };

  const fontStyle = {
    color: isHovered ? "var(--blue)" : "var(--orange)",
  };

  const btnStyle = () => {
    const btnColor = isHovered ? "var(--blue)" : "var(--orange)";
    return { "box-shadow": `1px 1px 2px 1px ${btnColor}` };
  };

  const redirectTo = (site) => {
    window.open(site);
  }

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".description", {
      duration: 3000,
      origin: "bottom",
      distance: "-10px",
      reset: true,
    });
    sr.reveal(".btn-header", {
      duration: 3000,
      origin: "left",
      distance: "-10px",
      reset: true,
    });
    sr.reveal(".my-img", {
      duration: 3000,
      origin: "right",
      distance: "0px",
      reset: true,
    });
    AOS.init();
  }, []);

  return (
    <header id="home" className="header">
      <div className="header__img-section" style={backgroundStyle}>
        <div
          className="img-container"
          style={borderStyle()}
          onMouseOver={() => handleHover(true)}
          onMouseOut={() => handleHover(false)}
        >
          <img className="my-img" src={myImg} alt="my-photo" />
        </div>
      </div>
      <div className="header__contact-and-cv">
        <div className="description">
          <h1>
            {language ? "Hola, mi nombre es" : "Hello, i am"}
            <br />
            <span style={fontStyle}>Miguel Garavito</span>
          </h1>
          <h2>
            <span style={fontStyle}>FullStack</span> Developer
          </h2>
        </div>
        <div className="header__btns-container">
          <button 
            onClick={() => redirectTo("https://wa.me/+573054079207?text=Hola,%20quiero%20contactarte")}
            className="btn-header phone-btn"
          >
            <strong>{language ? "Teléfono" : "Phone"}</strong>
            <i className="bx bxs-phone"></i>
          </button>
          <button 
            onClick={() => redirectTo("https://www.linkedin.com/in/miguel-%C3%A1ngel-garavito-camargo/")}
            className="btn-header linkedin-btn"
          >
            <strong>Linkedin</strong>
            <i className="bx bxl-linkedin-square"></i>
          </button>
          <button 
            onClick={() => redirectTo("https://github.com/XxMigue03xX")}
            className="btn-header github-btn"
          >
            <strong>Github</strong>
            <i className="bx bxl-github"></i>
          </button>
          <button 
            onClick={() => redirectTo("mailto:mgaravitocamargo@gmail.com")}
            className="btn-header email-btn"
          >
            <strong>Email</strong>
            <i className="bx bx-envelope"></i>
          </button>
          <button 
            onClick={() => redirectTo("https://drive.google.com/file/d/1Npy96UyITlT8_l3aw5N27AwuGkWBdVrv/view")}
            className="btn-header cv-btn"
            style={btnStyle()}>
            <strong>{language ? "Descargar CV" : "Download CV"}</strong>
            <i className="bx bx-down-arrow-circle"></i>
          </button>
        </div>
      </div>
      <div className="header__diagonal"></div>
    </header>
  );
};

export default Header;
