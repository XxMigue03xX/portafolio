import { useEffect, useState } from 'react';
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import './AboutMe.css'

const AboutMe = ({ language }) => {
  const [age, setAge] = useState(0);
  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    else {
      return age;
    }
  }
  useEffect(() => {
    const userBirthdate = '2003-11-01';
    const userAge = calculateAge(userBirthdate);
    setAge(userAge);
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
              <p className='experience__p'>
                {language ? "Horas de práctica" : "Practice hours"}
              </p>
            </div>
          </div>
          <div className='experience__item'>
            <div>
              <h4 className="experience__h4">+100</h4>
              <p className='experience__p'>
                {language ? "Horas teóricas" : "Theory hours"}
              </p>
            </div>
          </div>
          <div className='experience__item'>
            <div>
              <h4 className="experience__h4">+8</h4>
              <p className='experience__p'>
                {language ? "Proyectos completados" : "Completed projects"}
              </p>
            </div>
          </div>
        </div>
        <div className='my-info'>
          <h3 className='info__h3'>{language ? "SOBRE" : "ABOUT"} <span>{language ? "MI" : "ME"}</span></h3>
          <p className='info__p'>{language ? `Mi nombre es Miguel Ángel Garavito Camargo, soy un joven colombiano de ${age} años que vive en la ciudad de` : `My name is Miguel Angel Garavito Camargo, I am a young Colombian man of ${age} years old living in the city of`} <span>Fusagasugá</span>. {language ? `Me apasiona la tecnología y he encontrado un gusto especial por la` : `I am passionate about technology and I have found a special taste for`} <span>{language ? "programación" : "programming"}</span>. {language ? "Tengo experiencia en el desarrollo de sitios web con funcionalidad y diseño de" : "I have experience in developing websites with functionality and design of"} <span>{language ? "calidad" : "quality"}</span>. {language ? "Mi personalidad es la de una persona orientada al" : "My personality is that of a"} <span>{language ? "éxito" : "succes-oriented"}</span> {language ? "y a la consecución de objetivos, me gusta mucho la lógica y estoy constantemente aprendiendo y actualizandome para ser mejor. ¡Desarrollemos Juntos!" : "and goal-oriented person, I love logic and I am constantly learning and updating myself to be better. Let's develop together!"}</p>
        </div>
    </section>
  )
}

export default AboutMe