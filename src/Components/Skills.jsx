import React from 'react';
import NavbarSection from './NavbarSection';
import '../Styles/Skills.css';
import firebaseIcon from '../Assets/Firebase.png';
import scrumIcon from '../Assets/scrum.png';
import vscodeIcon from '../Assets/visual-studio-code.png';

const Skills = () => {
    return (
        <section className="skills-container" id="skills">

        <div className="skills-title">
            <h1 className="section-title">SKILLS</h1>
            <NavbarSection/>
        </div>

        <div className="skills-info">
            <div className="container-img-skills">
                <i className="fab fa-html5"></i>
                <h6 className="skill-name">HTML</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-css3-alt"></i>
                <h6 className="skill-name">CSS</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-js"></i>
                <h6 className="skill-name">JAVASCRIPT</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-git-alt"></i>
                <h6 className="skill-name">GIT</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-github"></i>
                <h6 className="skill-name">GITHUB</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-react"></i>
                <h6 className="skill-name">REACT JS</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-bootstrap"></i>
                <h6 className="skill-name">BOOTSTRAP</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-node"></i>
                <h6 className="skill-name">NODE JS</h6>
            </div>

            <div className="container-img-skills">
                <img src={firebaseIcon} alt="Logo Firebase" className="icon-skill"/>
                <h6 className="skill-name">FIREBASE</h6>
            </div>

            <div className="container-img-skills">
            <img src={scrumIcon} alt="Logo Scrum" className="icon-skill"/>
                <h6 className="skill-name">SCRUM</h6>
            </div>

            <div className="container-img-skills">
            <img src={vscodeIcon} alt="Logo Visual Studio Code" className="icon-skill"/>
                <h6 className="skill-name">VSCODE</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-trello"></i>
                <h6 className="skill-name">TRELLO</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-invision"></i>
                <h6 className="skill-name">INVISION</h6>
            </div>

            <div className="container-img-skills">
                <i className="fab fa-figma"></i>
                <h6 className="skill-name">FIGMA</h6>
            </div>

            <div className="container-img-skills">
                <i className="fas fa-users-cog"></i>
                <h6 className="skill-name">TEAM WORK</h6>
            </div>

            <div className="container-img-skills">
                <i className="fas fa-puzzle-piece"></i>
                <h6 className="skill-name">ADAPTABILITY</h6>
            </div>

            <div className="container-img-skills">
                <i className="fas fa-user-clock"></i>
                <h6 className="skill-name">TIME MANAGEMENT</h6>
            </div>

            <div className="container-img-skills">
                <i className="fas fa-handshake"></i>
                {/* <!-- <i className="far fa-handshake"></i> --> */}
                <h6 className="skill-name">COMMITTED</h6>
            </div>

            <div className="container-img-skills">
                <i className="fas fa-book-reader"></i>
                <h6 className="skill-name">ALWAYS LEARNING</h6>
            </div>

            <div className="container-img-skills">
                <i className="fas fa-comments"></i>
                <h6 className="skill-name">COMMUNICATION SKILLS</h6>
            </div>


        </div>

    </section>
    )
}

export default Skills;
