import { useEffect } from 'react';
import { hardSkills } from '../../constants'
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import './Skills.css'

const Skills = () => {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.soft-skills', {
      duration: 3000,
      origin: 'bottom',
      distance: '-10px',
      reset: true,
    });
    sr.reveal('.hard-skills', {
      duration: 3000,
      origin: 'bottom',
      distance: '-10px',
      reset: true,
    });
    AOS.init();
  }, []);

  return (
    <section id='skills' className='skills'>
        <div className='soft-skills'>
          <h3>Habilidades <span>Blandas</span></h3>
          <ul className='soft-skills__list'>
            <li>Trabajo bajo presión</li>
            <li>Trabajo en equipo</li>
            <li>Comunicación asertiva</li>
            <li>Productividad personal</li>
            <li>Liderazgo</li>
            <li>Adaptabilidad</li>
          </ul>
        </div>
        <div className='hard-skills'>
        <h3>Habilidades <span>Duras</span></h3>
          <ul className='hard-skills__list'>
            {hardSkills.map(hardSkill => (
              <li key={hardSkill.id}>
                <p>  
                  {hardSkill.name}
                </p>
                <div className="hard-skills__img-container">
                  <img src={hardSkill.img} alt={hardSkill.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default Skills