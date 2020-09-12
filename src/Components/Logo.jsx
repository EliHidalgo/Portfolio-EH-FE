import React from 'react';
import logo from '../Assets/Logo-firma-eh.png';
import '../Styles/Logo.css';

const Logo = () => {
    return (
        <div className="container-logo">
             <img src={logo} className="logo-eh" alt=""/>
            <h1 className="occupation-name">Front-End Developer & Civil Industrial Engineer</h1>
            
        </div>
    )
}

export default Logo;
