import { useEffect } from "react";
import { hardSkills } from "../../constants";
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "./Skills.css";

const Skills = ({ language }) => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".soft-skills", {
      duration: 3000,
      origin: "bottom",
      distance: "-10px",
      reset: true,
    });
    sr.reveal(".hard-skills", {
      duration: 3000,
      origin: "bottom",
      distance: "-10px",
      reset: true,
    });
    AOS.init();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="hard-skills">
        {language ? (
          <h3>
            Habilidades <span>Tecnológicas</span>
          </h3>
        ) : (
          <h3>
            <span>Tech</span> Skills
          </h3>
        )}
        <ul className="hard-skills__list">
          {hardSkills.map((hardSkill, index) => (
            <li key={index}>
              <p>{hardSkill.name}</p>
              <div className="hard-skills__img-container">
                <img
                  src={hardSkill.img}
                  alt={hardSkill.name}
                  className={hardSkill.className}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="soft-skills">
        {language ? (
          <h3>
            Habilidades <span>Blandas</span>
          </h3>
        ) : (
          <h3>
            <span>Soft</span> Skills
          </h3>
        )}
        <ul className="soft-skills__list">
          {language ? (
            <>
              <li>Trabajo en equipo</li>
              <li>Comunicación asertiva</li>
              <li>Adaptabilidad</li>
              <li>Pensamiento analítico</li>
              <li>Aprendizaje continuo</li>
              <li>Responsabilidad</li>
            </>
          ) : (
            <>
              <li>Teamwork</li>
              <li>Assertive communication</li>
              <li>Adaptability</li>
              <li>Analytical thinking</li>
              <li>Continuous learning</li>
              <li>Responsibility</li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Skills;