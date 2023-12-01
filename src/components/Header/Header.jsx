import myImg from "../../assets/img/MyPhoto.jpg";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "./Header.css";

const Header = ({ language }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = (hovered) => {
      if(isHovered !== hovered){
        setIsHovered(hovered);
      }
    };

    const backgroundStyle = {
      background: isHovered ? "var(--blue-gradient)" : "var(--orange-gradient)",
    }

    const borderStyle = () => {
      const borderColor = isHovered ? "var(--orange)" : "var(--blue)";
      return {"box-shadow": `5px 5px 10px 2px ${borderColor}`}
    }

    const fontStyle = {
      color: isHovered ? "var(--blue)" : "var(--orange)",
    }

    const btnStyle = () => {
      const btnColor = isHovered ? "var(--blue)" : "var(--orange)";
      return {"box-shadow": `1px 1px 2px 1px ${btnColor}`}
    }

    useEffect(() => {
      const sr = ScrollReveal();
      sr.reveal('.description', {
        duration: 3000,
        origin: 'bottom',
        distance: '-10px',
        reset: true
      });
      sr.reveal('.btn-cv', {
        duration: 3000,
        origin: 'left',
        distance: '-10px',
        reset: true
      });
      sr.reveal('.my-img', {
        duration: 3000,
        origin: 'right',
        distance: '0px',
        reset: true
      });
      AOS.init();
    }, []);

  return (
    <header id="home" className="header">
      <div className="header__img-section" style={backgroundStyle}>
        <div
            className="img-container" style={borderStyle()}
            onMouseOver={() => handleHover(true)}
            onMouseOut={() => handleHover(false)}>
            <img className="my-img" src={myImg} alt="my-photo" />
        </div>
      </div>
      <div className="header__description-and-cv">
      <div className="description">
        <h1>
          {
            language ? "Hola, mi nombre es" : "Hello, i am" 
          }
          <br />
          <span style={fontStyle}>Miguel Garavito</span>
        </h1>
        <h2>
            <span style={fontStyle}>FullStack</span> Developer
        </h2>
        <p>
          {
            language ? `Bienvenido a mi portafolio. Soy un joven desarrollador web enfocado en la obtención de resultados y
            la resolución de problemas, ofrezco soluciones innovadoras y efectivas. ¡No dudes en revisar mis proyectos y contactarme!` : `Welcome to my portfolio. I'm a young web developer focused on getting results and solving problems, I offer innovative and effective solutions.
            Don't hesitate to check my projects and contact me!`
          }
          
        </p>
      </div>
        <a
          className="btn-cv"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1zf5n0EdF-Gm7viPmQFivgKqn6gOs9AJb/view"
          download="cv"
        >
      <button className="header__btn-cv" style={btnStyle()}>
          <strong>{
            language ? "Descargar CV" : "Download CV"
          }</strong>
          <i className='bx bx-down-arrow-circle' ></i>
      </button>
        </a>
      </div>
      <div className="header__diagonal"></div>
    </header>
  );
};

export default Header;
