import React from 'react';
//import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import Logo from './Logo';
import '../Styles/Home.css';


const Home = () => {
    return (
        <div>
        <header className="header">
        <div className="banner-img"></div>
        <div className="header-info">
            <Navbar/>
            <Logo/>

        </div>

    </header>
            
        </div>
    )
}

export default Home
