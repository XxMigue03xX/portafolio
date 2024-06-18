import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css'

function App() {
  const [isDay, setisDay] = useState(false);
  const [isSpanish, setIsSpanish] = useState(true);

  const themeClass = isDay ? 'day-mode' : 'dark-mode';

  return (
    <article className={themeClass}>
      <Nav
        isDay={isDay}
        switchMode={() => setisDay(!isDay)}
        isSpanish={isSpanish}
        switchLang={() => setIsSpanish(!isSpanish)}
      />
      <Header language={isSpanish}/>
      <AboutMe language={isSpanish}/>
      <Skills language={isSpanish}/>
      <Projects language={isSpanish}/>
      <Contact language={isSpanish}/>
      <footer>
        <p>
          Miguel Garavito in 2023 ©
        </p>
      </footer>
    </article>
  );
}

export default App
