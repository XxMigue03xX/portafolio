import './Nav.css'
import spanishImg from "../../assets/img/spanish.svg"
import englishImg from "../../assets/img/english.svg"

const Nav = ({isDay, switchMode, isSpanish, switchLang}) => {
  return (
    <nav className="nav-container">
      <button onClick={switchMode} className="btn mode">
        {isDay ? "🌙" : "☀️"}
      </button>
      <button onClick={switchLang} className="btn language">
        {isSpanish ? (
          <img src={spanishImg} alt="spanishImg" />
        ) : (
          <img src={englishImg} alt="englishImg" />
        )}
      </button>
      <a href="#home">
        <button className="btn home">
          <i className="bx bxs-home"></i>
        </button>
      </a>
      <a href="#about">
        <button className="btn info">
            <i className="bx bx-info-circle"></i>
        </button>
      </a>
      <a href="#skills">
        <button className="btn abilities">
          <i className="bx bx-medal"></i>
        </button>
      </a>
      <a href="#briefcase">
        <button className="btn briefcase">
          <i className="bx bxs-briefcase-alt"></i>
        </button>
      </a>
      <a href="#contact">
        <button className="btn contact">
          <i className="bx bx-envelope"></i>
        </button>
      </a>
    </nav>
  );
}

export default Nav