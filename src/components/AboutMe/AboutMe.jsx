import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import './AboutMe.css'

const AboutMe = () => {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.experience', {
      duration: 3000,
      origin: 'bottom',
      distance: '-10px',
      reset: true,
    });
    sr.reveal('.my-info', {
      duration: 3000,
      origin: 'bottom',
      distance: '-10px',
      reset: true,
    });
    AOS.init();
  }, []);

  return (
    <section id='about' className='about-me'>
        <div className='experience'>
          <div className='experience__item'>
            <div>
              <h4 className="experience__h4">+150</h4>
              <p className='experience__p'>Horas de práctica</p>
            </div>
          </div>
          <div className='experience__item'>
            <div>
              <h4 className="experience__h4">+100</h4>
              <p className='experience__p'>Horas de teoría</p>
            </div>
          </div>
          <div className='experience__item'>
            <div>
              <h4 className="experience__h4">Muchos</h4>
              <p className='experience__p'>Proyectos completados</p>
            </div>
          </div>
        </div>
        <div className='my-info'>
          <h3 className='info__h3'>SOBRE <span>MI</span></h3>
          <p className='info__p'>Mi nombre es Miguel Ángel Garavito Camargo, soy un joven colombiano de 19 años que vive en la ciudad de <span>Fusagasugá</span>. Me apasiona la tecnología y he encontrado un gusto especial por la <span>programación</span>. Tengo experiencia en el desarrollo de sitios web con funcionalidad y diseño de <span>calidad</span>. Mi personalidad es la de una persona orientada al <span>éxito</span> y a la consecución de objetivos, me gusta mucho la lógica y estoy constantemente aprendiendo y actualizandome para ser mejor. ¡Desarrollemos Juntos!</p>
        </div>
    </section>
  )
}

export default AboutMe