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
  const [isSpanish, setIsSpanish] = useState(false);

  const themeClass = isDay ? 'day-mode' : 'dark-mode';
  const currentYear = new Date().getFullYear();
  const startYear = 2023;

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
          © {startYear}{currentYear > startYear ? ` - ${currentYear}` : ''} Miguel Garavito
        </p>
      </footer>
    </article>
  );
}

export default App
