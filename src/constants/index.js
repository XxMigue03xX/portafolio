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
import eCommerceReactImg from "../assets/img/proyects/e-commerce-react.png"
import pokeAppImg from "../assets/img/proyects/pokeapp.png"
import usersCRUDImg from "../assets/img/proyects/users-crud.png"
import rickAndMortyImg from "../assets/img/proyects/rickandmorty.png"
import weatherAppImg from "../assets/img/proyects/weatherapp2.png"
import infogalaxImg from "../assets/img/proyects/infogalax.png"
import eCommerceVanillaImg from "../assets/img/proyects/e-commerce-vanilla.png"

export const hardSkills = [
    {
        id: 1,
        name: "JavaScript",
        img: JSImg,
    },
    {
        id: 2,
        name: "HTML",
        img: HTMLImg,
    },
    {
        id: 3,
        name: "CSS",
        img: CSSImg,
    },
    {
        id: 4,
        name: "Git",
        img: GitImg,
    },
    {
        id: 5,
        name: "Github",
        img: GithubImg,
    },
    {
        id: 6,
        name: "React",
        img: ReactImg,
    },
    {
        id: 7,
        name: "React Router",
        img: ReactRouterImg,
    },
    {
        id: 8,
        name: "Redux",
        img: ReduxImg,
    },
    {
        id: 9,
        name: "Node JS",
        img: NodeJSImg,
    },
    {
        id: 10,
        name: "English C1",
        img: EnglishImg,
    }
];

export const proyects = [
    {
        id: 1,
        name: "E-Commerce React",
        img: eCommerceReactImg,
        description: "Proyecto personal que simula todas las operaciones de un e-commerce, realiza peticiones a una API para obtener los productos, iniciar sesión, manejo del carrito y creación de registros de compras.",
        github: "https://github.com/XxMigue03xX/ecommerce-react",
        link: "https://ecommerce-react-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        id: 2,
        name: "PokeApp",
        img: pokeAppImg,
        description: "Proyecto personal que simula el funcionamiento de una pokedex, consumiendo los datos de la PokeAPI para mostrar todos los pokemones, implementa un sistema de busqueda y filtrado por tipo.",
        github: "https://github.com/XxMigue03xX/PokeApp",
        link: "https://pokeapp-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        id: 3,
        name: "Users CRUD",
        img: usersCRUDImg,
        description: "Proyecto personal que brinda toda la funcionalidad de un gestor de usuarios, utiliza una API a la que se realizan las peticiones HTTP que permiten crear, obtener, actualizar y eliminar usuarios.",
        github: "https://github.com/XxMigue03xX/Users-CRUD",
        link: "https://users-crud-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        id: 4,
        name: "Rick and Morty",
        img: rickAndMortyImg,
        description: "Proyecto personal que muestra a los personajes de rick and morty, los obtiene de una API y los clasifica por dimensión, implementa paginación y un sistema de búsqueda por ID.",
        github: "https://github.com/XxMigue03xX/RickAndMorty",
        link: "https://rickandmorty-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        id: 5,
        name: "Weather App",
        img: weatherAppImg,
        description: "Proyecto personal que obtiene la ubicación del usuario y con ésa información realiza una petición a una API para obtener los datos del clima de ésa ubicación en ése momento, implementa un modo oscuro.",
        github: "https://github.com/XxMigue03xX/Weather-App",
        link: "https://weatherapp-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        id: 6,
        name: "Infogalax",
        img: infogalaxImg,
        description: "Primer proyecto personal realizado en React, este proyecto muestra datos sobre el espacio, al oprimir el botón, el dato y el fondo de pantalla cambian por otros aleatorios.",
        github: "https://github.com/XxMigue03xX/Infogalax",
        link: "https://infogalax-miguelgaravito.netlify.app/",
        isReact: true
    },
    {
        id: 7,
        name: "E-Commerce",
        img: eCommerceVanillaImg,
        description: "Proyecto personal que simula un e-commerce básico, realiza peticiones a una API para obtener los productos e implementa un carrito de compras sencillo, fue realizado usando HTML, Javascript y CSS.",
        github: "https://github.com/XxMigue03xX/E-Commerce",
        link: "https://e-commerce-miguelgaravito.netlify.app/",
        isReact: false
    },
]

export default ReactImg;