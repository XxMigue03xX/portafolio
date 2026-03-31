import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "./AboutMe.css";

const AboutMe = ({ language }) => {
  const [age, setAge] = useState(0);
  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    } else {
      return age;
    }
  };
  useEffect(() => {
    const userBirthdate = "2003-11-01";
    const userAge = calculateAge(userBirthdate);
    setAge(userAge);
    const sr = ScrollReveal();
    sr.reveal(".experience", {
      duration: 3000,
      origin: "bottom",
      distance: "-10px",
      reset: true,
    });
    sr.reveal(".my-info", {
      duration: 3000,
      origin: "bottom",
      distance: "-10px",
      reset: true,
    });
    AOS.init();
  }, []);

  return (
    <section id="about" className="about-me">
      <div className="experience">
        <div className="experience__item">
          <div>
            <h4 className="experience__h4">+200</h4>
            <p className="experience__p">
              {language ? "Horas de práctica" : "Practice hours"}
            </p>
          </div>
        </div>
        <div className="experience__item">
          <div>
            <h4 className="experience__h4">+150</h4>
            <p className="experience__p">
              {language ? "Horas teóricas" : "Theory hours"}
            </p>
          </div>
        </div>
        <div className="experience__item">
          <div>
            <h4 className="experience__h4">+10</h4>
            <p className="experience__p">
              {language ? "Proyectos completados" : "Completed projects"}
            </p>
          </div>
        </div>
      </div>
      <div className="my-info">
        <h3 className="info__h3">
          {language ? "SOBRE" : "ABOUT"} <span>{language ? "MI" : "ME"}</span>
        </h3>
        <p className="info__p">
          {language ? (
            <>
              Soy <span>Miguel Ángel Garavito Camargo</span>, Ingeniero de
              Sistemas y Computación orientado a <span>Backend</span> y{" "}
              <span>desarrollo de software</span>, con experiencia construyendo
              soluciones end-to-end: APIs, bases de datos, autenticación,
              despliegue y dashboards, desde el levantamiento de requerimientos
              y diseño de arquitectura hasta la implementación y operación
              básica.
              <br />
              <br />
              Mi proyecto de grado fue una{" "}
              <span>plataforma IoT de monitoreo</span> para colmenas de abejas,
              donde diseñé la <span>arquitectura completa</span> (dispositivos →
              API → base de datos → interfaz web), desarrollé la API, el modelo
              de datos en MySQL, el dashboard, la autenticación JWT y el
              despliegue en entorno productivo con <span>LiteSpeed</span>. El
              código es privado por tratarse de un proyecto académico
              institucional, pero puedo compartir arquitectura, capturas y
              detalle técnico en entrevista.
              <br />
              <br />
              He trabajado principalmente con <span>PHP</span>,{" "}
              <span>Python</span>, <span>JavaScript/Node.js</span>, SQL, React y
              APIs REST, priorizando prácticas de ingeniería como validación,
              manejo consistente de errores, control de sesiones, trazabilidad
              mediante logs y documentación técnica.
              <br />
              <br />
              Actualmente estoy profundizando en <span>DevOps/SRE</span> y{" "}
              <span>seguridad aplicada</span> a sistemas y APIs, especialmente
              en observabilidad, CI/CD, automatización, control de accesos y
              buenas prácticas de hardening. Además, cuento con una{" "}
              <span>
                Especialización en Metodologías de Calidad para el Desarrollo de
                Software
              </span>
              , que refuerza mi enfoque en procesos, mejora continua y gestión
              de riesgos sin perder el foco técnico.
              <br />
              <br />
              Busco oportunidades donde pueda construir y evolucionar{" "}
              <span>sistemas reales</span> en roles de <span>backend</span>,{" "}
              <span>full-stack</span> o infraestructura, en equipos presenciales
              o remotos.
            </>
          ) : (
            <>
              I’m <span>Miguel Angel Garavito Camargo</span>, a Systems and
              Computing Engineer focused on <span>Backend</span> and{" "}
              <span>software development</span>, with experience building
              end-to-end solutions: APIs, databases, authentication,
              deployments, and dashboards, from requirements gathering and
              architecture design to implementation and basic operations.
              <br />
              <br />
              My capstone project was an <span>
                IoT monitoring platform
              </span>{" "}
              for beehives, where I designed the <span>full architecture</span>{" "}
              (devices → API → database → web interface), developed the API, the
              MySQL data model, the dashboard, JWT authentication, and the
              deployment to a production environment with <span>LiteSpeed</span>
              . The code is private because it was an institutional academic
              project, but I can share architecture, screenshots, and technical
              details in an interview.
              <br />
              <br />
              I’ve worked mainly with <span>PHP</span>, <span>Python</span>,{" "}
              <span>JavaScript/Node.js</span>, SQL, React, and REST APIs,
              prioritizing engineering practices such as validation, consistent
              error handling, session control, traceability through logs, and
              technical documentation.
              <br />
              <br />
              I’m currently deepening my knowledge in <span>
                DevOps/SRE
              </span>{" "}
              and <span>applied security</span> for systems and APIs, especially
              in observability, CI/CD, automation, access control, and hardening
              best practices. I also hold a{" "}
              <span>
                Specialization in Quality Methodologies for Software Development
              </span>
              , which strengthens my focus on processes, continuous improvement,
              and risk management without losing the technical focus.
              <br />
              <br />
              I’m looking for opportunities where I can build and evolve{" "}
              <span>real systems</span> in <span>backend</span>,{" "}
              <span>full-stack</span>, or infrastructure roles, in on-site or
              remote teams.
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;