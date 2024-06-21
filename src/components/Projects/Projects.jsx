import { useEffect } from "react";
import ReactImg, { projectsEnglish, projectsSpanish } from "../../constants";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import "./Projects.css";

const Projects = ({ language }) => {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.projects', {
          duration: 3000,
          origin: 'bottom',
          distance: '-10px',
          reset: true,
        });
        AOS.init();
      }, []);

  return (
    <section id="briefcase" className="projects">
      <h3>
        {language ? "MIS" : "MY"} <span>{language ? "PROYECTOS" : "PROJECTS"}</span>
      </h3>
      <ul className="projects-list">
        {language ? (
            projectsSpanish.map((project, index) => (
              <li key={index}>
                <div className="project__img-container">
                  <img src={project.img} alt={project.name} />
                </div>
                <div className="project__info-container">
                  <div className="title-container">
                    {project.isReact && (
                      <div className="react-container">
                        <img src={ReactImg} alt="react" />
                      </div>
                    )}
                    <h4>{project.name}</h4>
                  </div>
                  <p>{project.description}</p>
                  <div className="project__btns-container">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <button>
                        <i className="bx bxl-github"></i>
                      </button>
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <button>
                        <i className="bx bx-link-external"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            ))
        ):(
          projectsEnglish.map((project, index) => (
            <li key={index}>
              <div className="project__img-container">
                <img src={project.img} alt={project.name} />
              </div>
              <div className="project__info-container">
                <div className="title-container">
                  {project.isReact && (
                    <div className="react-container">
                      <img src={ReactImg} alt="react" />
                    </div>
                  )}
                  <h4>{project.name}</h4>
                </div>
                <p>{project.description}</p>
                <div className="project__btns-container">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button>
                      <i className="bx bxl-github"></i>
                    </button>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
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

export default Projects;
