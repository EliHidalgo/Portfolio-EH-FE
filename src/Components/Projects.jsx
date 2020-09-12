import React from 'react';
import '../Styles/Projects.css';
import NavbarSection from './NavbarSection';
import ProjectBurger from '../Assets/burger-portafolio.jpg';
import ProjectYug from '../Assets/yoga-portafolio.jpg';
import ProjectPokedata from '../Assets/pokedata-portafolio.jpg';
import ProjectMdLinks from '../Assets/md-links-portafolio.jpg';
import ProjectHootie from '../Assets/hootie-hoo-portafolio.jpg';

const Projects = () => {
    return (
        <section className="projects-container" id="projects">
        
        <div className="project-title">
            <h1 className="section-title">PROJECTS</h1>
            <NavbarSection/>
        </div>

        <div className="project-info">
            <div className="container-img-projects">
                <div className="container-project-info">
                    <h2 className="project-name">Proyecto empresa</h2>
                    <p className="project-summary">App informativa dirigida a niños  y cuidadores, con la finalidad de educar sobre el COVID, tomando la inclusión y gamificación como pilares principales.</p>
                </div>
                <img src={ProjectHootie} alt="Proyecto Empresa Hootie Hoo" className="img-project"/>
                <div className="container-links-project">
                    <a target="_blank" rel="noopener noreferrer" href="https://hootie-hoo.web.app/" className="link-project">DEMO</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/EliHidalgo/Hootie-Hoo" className="link-code">CODE</a>
                </div>
            </div>
            
            <div className="container-img-projects">
                <div className="container-project-info">
                    <h2 className="project-name">Md Links</h2>
                    <p className="project-summary">Librería de Node para buscar dentro de los archivos de extensión Markdown los links y validar el estado de los mismos.</p>
                </div>
                <img src={ProjectMdLinks} alt="Proyecto Md Links" className="img-project"/>
                <div className="container-links-project">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/cep-md-links" className="link-project">NPMJS</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/EliHidalgo/SCL013-md-links" className="link-code">CODE</a>
                </div>
            </div>

            <div className="container-img-projects">
                <div className="container-project-info">
                    <h2 className="project-name">Burger Queen</h2>
                    <p className="project-summary">Interfaz para facilitar la toma de pedidos del mesero y la comunicación con cocina para optimizar la preparación y atención al ciente.</p>
                </div>
                <img src={ProjectBurger} alt="Proyecto Burger Queen" className="img-project"/>
                <div className="container-links-project">
                    <a target="_blank" rel="noopener noreferrer" href="https://burger-queen-b6dc0.firebaseapp.com/" className="link-project">DEMO</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/EliHidalgo/SCL013-burger-queen" className="link-code">CODE</a>
                </div>
            </div>

            <div className="container-img-projects">
                <div className="container-project-info">
                    <h2 className="project-name">Yug</h2>
                    <p className="project-summary">Red social para compartir contenido sobre el mundo del yoga, para conectar a las personas interesadas en esta disciplina.</p>
                </div>
                <img src={ProjectYug} alt="Proyecto Yug" className="img-project"/>
                <div className="container-links-project">
                    <a target="_blank" rel="noopener noreferrer" href="https://proyecto-yug-8d1f2.web.app/" className="link-project">DEMO</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/EliHidalgo/SCL013-social-network" className="link-code">CODE</a>
                </div>
                
            </div>

            <div className="container-img-projects">
                <div className="container-project-info">
                    <h2 className="project-name">Pokédata GO</h2>
                    <p className="project-summary">Aplicación dirigida a los usuarios del juego Pokémon GO, donde encontrarán datos de interés sobre los Pokémon de una forma accesible y sencilla.</p>
                </div>
                <img src={ProjectPokedata} alt="Proyecto Pokedata" className="img-project"/>
                <div className="container-links-project">
                    <a target="_blank" rel="noopener noreferrer" href="https://elihidalgo.github.io/SCL013-data-lovers/src/index.html" className="link-project">DEMO</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/EliHidalgo/SCL013-data-lovers" className="link-code" >CODE</a>
                </div>
                
                
            </div>

         
        </div>


    </section>

    )
}

export default Projects;
