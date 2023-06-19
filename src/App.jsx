import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Proyects from './components/Proyects/Proyects';
import Contact from './components/Contact/Contact';
import './App.css'

function App() {
  const [isDay, setisDay] = useState(false);
  const [isSpanish, setIsSpanish] = useState(true);

  const themeClass = !isDay ? 'dark-mode' : 'day-mode';

  return (
    <article className={themeClass}>
      <Nav
        isDay={isDay}
        switchMode={() => setisDay(!isDay)}
        isSpanish={isSpanish}
        switchLang={() => setIsSpanish(!isSpanish)}
      />
      <Header/>
      <AboutMe/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <footer>
        <p>
          Miguel Garavito in 2023 ©
        </p>
      </footer>
    </article>
  );
}

export default App
