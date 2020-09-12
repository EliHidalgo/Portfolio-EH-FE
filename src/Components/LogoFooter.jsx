import React from 'react';
import logoFooter from '../Assets/Logo-footer-eh.png';
import '../Styles/LogoFooter.css';

const LogoFooter = () => {
    return (
        <div className="container-loguito">
             <a href="#home"><img src={logoFooter} className="loguito-eh" alt=""/></a>
                        
        </div>
    )
}

export default LogoFooter;