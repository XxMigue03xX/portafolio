import { useEffect } from "react";
import ReactImg, { proyectsEnglish, proyectsSpanish } from "../../constants";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import "./Proyects.css";

const Proyects = ({ language }) => {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.proyects', {
          duration: 3000,
          origin: 'bottom',
          distance: '-10px',
          reset: true,
        });
        AOS.init();
      }, []);

  return (
    <section id="briefcase" className="proyects">
      <h3>
        {language ? "MIS" : "MY"} <span>{language ? "PROYECTOS" : "PROJECTS"}</span>
      </h3>
      <ul className="proyects-list">
        {language ? (
            proyectsSpanish.map((proyect, index) => (
              <li key={index}>
                <div className="proyect__img-container">
                  <img src={proyect.img} alt={proyect.name} />
                </div>
                <div className="proyect__info-container">
                  <div className="title-container">
                    {proyect.isReact && (
                      <div className="react-container">
                        <img src={ReactImg} alt="react" />
                      </div>
                    )}
                    <h4>{proyect.name}</h4>
                  </div>
                  <p>{proyect.description}</p>
                  <div className="proyect__btns-container">
                    <a href={proyect.github} target="_blank" rel="noreferrer">
                      <button>
                        <i className="bx bxl-github"></i>
                      </button>
                    </a>
                    <a href={proyect.link} target="_blank" rel="noreferrer">
                      <button>
                        <i className="bx bx-link-external"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            ))
        ):(
          proyectsEnglish.map((proyect, index) => (
            <li key={index}>
              <div className="proyect__img-container">
                <img src={proyect.img} alt={proyect.name} />
              </div>
              <div className="proyect__info-container">
                <div className="title-container">
                  {proyect.isReact && (
                    <div className="react-container">
                      <img src={ReactImg} alt="react" />
                    </div>
                  )}
                  <h4>{proyect.name}</h4>
                </div>
                <p>{proyect.description}</p>
                <div className="proyect__btns-container">
                  <a href={proyect.github} target="_blank" rel="noreferrer">
                    <button>
                      <i className="bx bxl-github"></i>
                    </button>
                  </a>
                  <a href={proyect.link} target="_blank" rel="noreferrer">
                    <button>
                      <i className="bx bx-link-external"></i>
                    </button>
                  </a>
                </div>
              </div>
            </li>
          )
        ))}
      </ul>
    </section>
  );
};

export default Proyects;
