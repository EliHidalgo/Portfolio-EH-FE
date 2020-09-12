import React from 'react';
/* import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact'; */
import '../Styles/NavbarSection.css';

const NavbarSection = () => {
    return (
    <nav className="nav-bar-titles">
                <ul>
                    <li className="items-navbar-border"><a href="#aboutme">ABOUT ME</a>
                    </li>
                    <li className="items-navbar-border"><a href="#projects"> PROJECTS</a>
                    </li>
                    <li className="items-navbar-border"><a href="#skills">SKILLS</a>
                    </li>
                    <li className="items-navbar"><a href="#contact">CONTACT</a>
                    </li>
                </ul>
    </nav>

   
    )
}

export default NavbarSection;
