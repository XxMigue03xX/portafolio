import { useEffect } from "react";
import ReactImg, { proyects } from "../../constants";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import "./Proyects.css";

const Proyects = () => {

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
        MIS <span>PROYECTOS</span>
      </h3>
      <ul className="proyects-list">
        {proyects.map((proyect) => (
          <li key={proyect.id}>
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
                <a href={proyect.github} target="blank">
                  <button>
                    <i className="bx bxl-github"></i>
                  </button>
                </a>
                <a href={proyect.link} target="blank">
                  <button>
                    <i className="bx bx-link-external"></i>
                  </button>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Proyects;
