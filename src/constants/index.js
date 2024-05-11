import JSImg from "../assets/img/hardskills/js.png"
import HTMLImg from "../assets/img/hardskills/html.jpg"
import CSSImg from "../assets/img/hardskills/css.svg"
import GitImg from "../assets/img/hardskills/git.png"
import GithubImg from "../assets/img/hardskills/github.png"
import ReactImg from "../assets/img/hardskills/react.svg"
import ReactRouterImg from "../assets/img/hardskills/react-router.png"
import ReduxImg from "../assets/img/hardskills/redux.svg"
import NodeJSImg from "../assets/img/hardskills/nodejs.svg"
import EnglishImg from "../assets/img/hardskills/englishflag.jpg"
import ScrumImg from "../assets/img/hardskills/scrum.png"
import PythonImg from "../assets/img/hardskills/python.svg"
import OfficeImg from "../assets/img/hardskills/Office.svg"
import eCommerceReactImg from "../assets/img/proyects/e-commerce-react.png"
import pokeAppImg from "../assets/img/proyects/pokeapp.png"
import usersCRUDImg from "../assets/img/proyects/users-crud.png"
import rickAndMortyImg from "../assets/img/proyects/rickandmorty.png"
import weatherAppImg from "../assets/img/proyects/weatherapp2.png"
import infogalaxImg from "../assets/img/proyects/infogalax.png"
import eCommerceVanillaImg from "../assets/img/proyects/e-commerce-vanilla.png"
import normativasUCundinamarcaImg from "../assets/img/proyects/normativasUCundinamarca.png"

export const hardSkills = [
    {
        name: "JavaScript",
        className: "JSImg",
        img: JSImg,
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
    {
        name: "React",
        className: "ReactImg",
        img: ReactImg,
    },
    {
        name: "React Router",
        className: "ReactRouterImg",
        img: ReactRouterImg,
    },
    {
        name: "Redux",
        className: "ReduxImg",
        img: ReduxImg,
    },
    {
        name: "Node JS",
        className: "NodeJSImg",
        img: NodeJSImg,
    },
    {
        name: "English C1",
        className: "EnglishImg",
        img: EnglishImg,
    },
    {
        name: "Scrum Master",
        className: "ScrumImg",
        img: ScrumImg,
    },
    {
        name: "Python",
        className: "PythonImg",
        img: PythonImg,
    },
    {
        name: "Office",
        className: "OfficeImg",
        img: OfficeImg,
    }
];

export const proyectsSpanish = [
    {
        name: "Normativas UCundinamarca",
        img: normativasUCundinamarcaImg,
        description: "Proyecto realizado en conjunto con el fin de desarrollar una página para informar a la comunidad universitaria sobre el reglamento estudiantil y las politicas de gratuidad.",
        github: "https://github.com/SebasCastillo18/Proyecto-software",
        link: "https://normativasucundinamarca.netlify.app/",
        isReact: true
    },
    {
        name: "E-Commerce React",
        img: eCommerceReactImg,
        description: "Proyecto personal que simula todas las operaciones de un e-commerce, realiza peticiones a una API para obtener los productos, iniciar sesión, manejo del carrito y creación de registros de compras.",
        github: "https://github.com/XxMigue03xX/ecommerce-react",
        link: "https://ecommerce-react-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "PokeApp",
        img: pokeAppImg,
        description: "Proyecto personal que simula el funcionamiento de una pokedex, consumiendo los datos de la PokeAPI para mostrar todos los pokemones, implementa un sistema de busqueda y filtrado por tipo.",
        github: "https://github.com/XxMigue03xX/PokeApp",
        link: "https://pokeapp-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "Users CRUD",
        img: usersCRUDImg,
        description: "Proyecto personal que brinda toda la funcionalidad de un gestor de usuarios, utiliza una API a la que se realizan las peticiones HTTP que permiten crear, obtener, actualizar y eliminar usuarios.",
        github: "https://github.com/XxMigue03xX/Users-CRUD",
        link: "https://users-crud-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "Rick and Morty",
        img: rickAndMortyImg,
        description: "Proyecto personal que muestra a los personajes de rick and morty, los obtiene de una API y los clasifica por dimensión, implementa paginación y un sistema de búsqueda por ID.",
        github: "https://github.com/XxMigue03xX/RickAndMorty",
        link: "https://rickandmorty-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "Weather App",
        img: weatherAppImg,
        description: "Proyecto personal que obtiene la ubicación del usuario y con ésa información realiza una petición a una API para obtener los datos del clima de ésa ubicación en ése momento, implementa un modo oscuro.",
        github: "https://github.com/XxMigue03xX/Weather-App",
        link: "https://weatherapp-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "Infogalax",
        img: infogalaxImg,
        description: "Primer proyecto personal realizado en React, este proyecto muestra datos sobre el espacio, al oprimir el botón, el dato y el fondo de pantalla cambian por otros aleatorios.",
        github: "https://github.com/XxMigue03xX/Infogalax",
        link: "https://infogalax-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "E-Commerce",
        img: eCommerceVanillaImg,
        description: "Proyecto personal que simula un e-commerce básico, realiza peticiones a una API para obtener los productos e implementa un carrito de compras sencillo, fue realizado usando HTML, Javascript y CSS.",
        github: "https://github.com/XxMigue03xX/E-Commerce",
        link: "https://e-commerce-miguelgaravito.netlify.app/",
        isReact: false
    },
]

export const proyectsEnglish = [
    {
        name: "UCundinamarca Regulations",
        img: normativasUCundinamarcaImg,
        description: "Joint project to develop a web page to inform the university community about student regulations and free policies.",
        github: "https://github.com/SebasCastillo18/Proyecto-software",
        link: "https://normativasucundinamarca.netlify.app/",
        isReact: true
    },
    {
        name: "E-Commerce React",
        img: eCommerceReactImg,
        description: "Personal project that simulates all the operations of an e-commerce, makes requests to an API to get the products, login, cart management and creation of shopping records.",
        github: "https://github.com/XxMigue03xX/ecommerce-react",
        link: "https://ecommerce-react-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "PokeApp",
        img: pokeAppImg,
        description: "Personal project that simulates the operation of a pokedex, consuming the PokeAPI data to display all pokemon, implements a search and filtering system by type.",
        github: "https://github.com/XxMigue03xX/PokeApp",
        link: "https://pokeapp-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "Users CRUD",
        img: usersCRUDImg,
        description: "Personal project that provides all the functionality of a user manager, uses an API to which HTTP requests are made that allow users to create, get, update and delete users.",
        github: "https://github.com/XxMigue03xX/Users-CRUD",
        link: "https://users-crud-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "Rick and Morty",
        img: rickAndMortyImg,
        description: "Personal project that displays rick and morty characters, fetches them from an API and sorts them by dimension, implements pagination and a search by ID system.",
        github: "https://github.com/XxMigue03xX/RickAndMorty",
        link: "https://rickandmorty-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "WeatherApp",
        img: weatherAppImg,
        description: "Personal project that gets the user's location and with that information makes a request to an API to get the weather data for that location at that time, implements a dark mode.",
        github: "https://github.com/XxMigue03xX/Weather-App",
        link: "https://weatherapp-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "Infogalax",
        img: infogalaxImg,
        description: "First personal project done in React, this project displays data about the space, when the button is pressed, the data and the background change to random ones.",
        github: "https://github.com/XxMigue03xX/Infogalax",
        link: "https://infogalax-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        name: "E-Commerce",
        img: eCommerceVanillaImg,
        description: "Personal project that simulates a basic e-commerce, makes requests to an API to get the products and implements a simple shopping cart, it was made using HTML, Javascript and CSS.",
        github: "https://github.com/XxMigue03xX/E-Commerce",
        link: "https://e-commerce-miguelgaravito.netlify.app/",
        isReact: false
    },
];



export default ReactImg;