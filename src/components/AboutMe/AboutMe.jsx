import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import './AboutMe.css'

const AboutMe = () => {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.experience', {
      duration: 3000,
      origin: 'right',
      distance: '-100px',
      reset: true,
    });
    sr.reveal('.my-info', {
      duration: 3000,
      origin: 'left',
      distance: '-100px',
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
              <h4 className="experience__h4">8</h4>
              <p className='experience__p'>Proyectos completados</p>
            </div>
          </div>
        </div>
        <div className='my-info'>
          <h3 className='info__h3'>SOBRE <span>MI</span></h3>
          <p className='info__p'>Soy un desarrollador web joven enfocado en la obtención de resultados y
          la resolución de problemas. Poseo experiencia desarrollando sitios
          web con funcionalidad y diseño de calidad, mis cualidades incluyen mi
          capacidad de aprendizaje, adaptación y mi capacidad de trabajar bien
          bajo presión. También estoy estudiando ingeniería de sistemas y
          computación en la Universidad de Cundinamarca, no dudes en revisar mis
          proyectos y mi CV. ¡Desarrollemos juntos!</p>
        </div>
    </section>
  )
}

export default AboutMe