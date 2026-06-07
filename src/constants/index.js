import PhpImg from "../assets/img/hardskills/php.svg";
import PythonImg from "../assets/img/hardskills/python.svg";
import SqlImg from "../assets/img/hardskills/sql.png";
import MysqlImg from "../assets/img/hardskills/mysql.svg";
import PostgresqlImg from "../assets/img/hardskills/postgresql.svg";
import ApiImg from "../assets/img/hardskills/api.png";
import JSImg from "../assets/img/hardskills/js.png";
import ReactImg from "../assets/img/hardskills/react.svg";
import HTMLImg from "../assets/img/hardskills/html.jpg";
import CSSImg from "../assets/img/hardskills/css.svg";
import GitImg from "../assets/img/hardskills/git.png";
import GithubImg from "../assets/img/hardskills/github.png";

import eCommerceApiImg from "../assets/img/projects/e-commerce.png";
import normativasUCundinamarcaImg from "../assets/img/projects/normativasUCundinamarca.png";
import pokeAppImg from "../assets/img/projects/pokeapp.png";
import weatherAppImg from "../assets/img/projects/weatherapp.png";
import infoSensorTurbidezImg from "../assets/img/projects/info_sensor_turbidez.png";
import beeMonitorImg from "../assets/img/projects/bee_monitor.png";

export const hardSkills = [
  {
    name: "PHP",
    className: "PhpImg",
    img: PhpImg,
  },
  {
    name: "Python",
    className: "PythonImg",
    img: PythonImg,
  },
  {
    name: "SQL",
    className: "SqlImg",
    img: SqlImg,
  },
  {
    name: "MySQL",
    className: "MysqlImg",
    img: MysqlImg,
  },
  {
    name: "PostgreSQL",
    className: "PostgresqlImg",
    img: PostgresqlImg,
  },
  {
    name: "REST APIs",
    className: "ApiImg",
    img: ApiImg,
  },
  {
    name: "JavaScript",
    className: "JSImg",
    img: JSImg,
  },
  {
    name: "React",
    className: "ReactImg",
    img: ReactImg,
  },
  {
    name: "HTML",
    className: "HTMLImg",
    img: HTMLImg,
  },
  {
    name: "CSS",
    className: "CSSImg",
    img: CSSImg,
  },
  {
    name: "Git",
    className: "GitImg",
    img: GitImg,
  },
  {
    name: "Github",
    className: "GithubImg",
    img: GithubImg,
  },
];

export const projectsSpanish = [
  {
    name: "Bee Monitoring Platform",
    img: beeMonitorImg,
    description:
      "Proyecto de grado sobre monitoreo IoT de colmenas. Diseñé la arquitectura completa, desarrollé la API, el modelo en MySQL, la autenticación JWT, el dashboard web y el despliegue productivo.",
    stack: ["PHP", "MySQL", "JavaScript", "JWT", "REST API", "LiteSpeed"],
    github: null,
    link: null
  },
  {
    name: "E-Commerce API",
    img: eCommerceApiImg,
    description:
      "API REST para e-commerce desarrollada como proyecto personal. Implementa autenticación JWT, CRUD de usuarios, productos y categorías, carga de imágenes, carrito de compras, historial de órdenes y pruebas automatizadas.",
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "Cloudinary", "Supertest"],
    github: "https://github.com/XxMigue03xX/Ecommerce-API",
    link: null
  },
  {
    name: "Info Sensor Turbidez",
    img: infoSensorTurbidezImg,
    description:
      "Proyecto académico de integración IoT para registrar mediciones de turbidez desde un ESP32. Implementa API en PHP, persistencia en MySQL, autenticación por token, sesiones de medición y visualización web de resultados.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "ESP32", "Chart.js"],
    github: "https://github.com/XxMigue03xX/info_sensor_turbidez",
    link: null
  },
  {
    name: "Normativas UCundinamarca",
    img: normativasUCundinamarcaImg,
    description:
      "Proyecto desarrollado en equipo para facilitar la consulta del reglamento estudiantil y las políticas de gratuidad mediante una interfaz clara, accesible y orientada a mejorar la experiencia informativa.",
    stack: ["React", "JavaScript", "JSON", "CSS"],
    github: "https://github.com/SebasCastillo18/Proyecto-software",
    link: "https://normativasucundinamarca.netlify.app/"
  },
  {
    name: "PokeApp",
    img: pokeAppImg,
    description:
      "Proyecto personal que simula una Pokédex consumiendo la PokeAPI. Permite búsqueda, filtrado por tipo, navegación entre resultados y renderización dinámica de información para mejorar la experiencia de exploración.",
    stack: ["React", "JavaScript", "CSS", "PokeAPI"],
    github: "https://github.com/XxMigue03xX/PokeApp",
    link: "https://pokeapp-miguelgaravito.netlify.app/"
  },
  {
    name: "Weather App",
    img: weatherAppImg,
    description:
      "Proyecto personal que obtiene la ubicación del usuario y consume una API pública para mostrar clima en tiempo real, incluyendo temperatura, humedad, velocidad del viento y datos básicos del entorno.",
    stack: ["React", "JavaScript", "CSS", "Weather API", "Geolocation API"],
    github: "https://github.com/XxMigue03xX/Weather-App",
    link: "https://weatherapp-miguelgaravito.netlify.app/"
  }
];

export const projectsEnglish = [
  {
    name: "Bee Monitoring Platform",
    img: beeMonitorImg,
    description:
      "Capstone project on IoT-based beehive monitoring. I designed the full architecture, developed the API, the MySQL model, JWT authentication, the web dashboard, and the production deployment.",
    stack: ["PHP", "MySQL", "JavaScript", "JWT", "REST API", "LiteSpeed"],
    github: null,
    link: null
  },
  {
    name: "E-Commerce API",
    img: eCommerceApiImg,
    description:
      "REST API for an e-commerce system developed as a personal project. It includes JWT authentication, CRUD for users, products, and categories, image uploads, cart flows, order history, and automated tests.",
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "Cloudinary", "Supertest"],
    github: "https://github.com/XxMigue03xX/Ecommerce-API",
    link: null
  },
  {
    name: "Turbidity Sensor Platform",
    img: infoSensorTurbidezImg,
    description:
      "Academic IoT integration project for registering turbidity measurements from an ESP32 device. It includes a PHP API, MySQL persistence, token-based authentication, measurement sessions, and web-based result visualization.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "ESP32", "Chart.js"],
    github: "https://github.com/XxMigue03xX/info_sensor_turbidez",
    link: null
  },
  {
    name: "UCundinamarca Regulations",
    img: normativasUCundinamarcaImg,
    description:
      "Team project created to simplify access to student regulations and tuition policy information through a clear, accessible interface designed to improve usability and understanding for the university community.",
    stack: ["React", "JavaScript", "JSON", "CSS"],
    github: "https://github.com/SebasCastillo18/Proyecto-software",
    link: "https://normativasucundinamarca.netlify.app/"
  },
  {
    name: "PokeApp",
    img: pokeAppImg,
    description:
      "Personal project that simulates a Pokédex by consuming the PokeAPI. It supports search, type filtering, result navigation, and dynamic rendering of information to improve the browsing experience.",
    stack: ["React", "JavaScript", "CSS", "PokeAPI"],
    github: "https://github.com/XxMigue03xX/PokeApp",
    link: "https://pokeapp-miguelgaravito.netlify.app/"
  },
  {
    name: "Weather App",
    img: weatherAppImg,
    description:
      "Personal project that gets the user's location and consumes a public API to display real-time weather, including temperature, humidity, wind speed, and other basic environmental information.",
    stack: ["React", "JavaScript", "CSS", "Weather API", "Geolocation API"],
    github: "https://github.com/XxMigue03xX/Weather-App",
    link: "https://weatherapp-miguelgaravito.netlify.app/"
  }
];