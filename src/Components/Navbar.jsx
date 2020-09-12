import React from 'react';
//import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
//import AboutMe from './AboutMe';
//import Projects from './Projects';
//import Skills from './Skills';
//import Contact from './Contact';
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        
            <nav className="nav-bar">
                <ul>
                    <li className="items-navbar-bord"><a href="#aboutme">ABOUT ME</a>
                    </li>
                    <li className="items-navbar-bord"><a href="#projects"> PROJECTS</a>
                    </li>
                    <li className="items-navbar-bord"><a href="#skills">SKILLS</a>
                    </li>
                    <li className="items-navbar"><a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>

            
    )
}

export default Navbar;
